let db;

const getData = async (dbName, storeName) => {
  if (!db) {
    return;
  }

  let transaction = db.transaction([storeName], "readonly");
  let objectStore = transaction.objectStore(storeName);
  let request = objectStore.get(1);

  request.onsuccess = () => {
    console.log("Token recuperado com sucesso: ", request.result);
  };

  request.onerror = (event) => {
    console.log("Ocorreu um erro: ", event);
  };
};

const addData = (token, dbName, storeName) => {
  if (!db) {
    console.error("Database is not initialized. Call createDB first.");
    return;
  }

  let transaction = db.transaction([storeName], "readwrite");
  let objectStore = transaction.objectStore(storeName);
  let request = objectStore.add({ accessToken: token });

  request.onsuccess = () => {
    console.log("Token armazenado com sucesso");
  };

  transaction.oncomplete = (event) => {
    console.log("Transação concluída: ", event);
  };

  transaction.onerror = (event) => {
    console.log("Ocorreu um erro: ", event);
  };
};

const createDB = (dbName, storeName) => {
  const indexedDB =
    self.indexedDB ||
    self.mozIndexedDB ||
    self.webkitIndexedDB ||
    self.msIndexedDB ||
    self.shimIndexedDB;

  if (!indexedDB) {
    console.log("Imposível utilizar a API do IndexedDB.");
    return;
  }

  const request = indexedDB.open(dbName, 1);

  request.onerror = (event) => {
    console.error("Ocorreu um erro com a API do IndexedDB");
    console.error(event);
  };

  request.onsuccess = (event) => {
    db = request.result;
    console.log("Banco de dados criado com sucesso");
  };

  request.onupgradeneeded = (event) => {
    db = event.target.result;
    console.log("Banco de dados criado com sucesso");

    if (!db.objectStoreNames.contains(storeName)) {
      db.createObjectStore(storeName, { autoIncrement: true });
    }
  };
};

const fetchToken = async (apiUrl) => {
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data.token; // A confirmar 
};





//Acima, estão funções auxiliares do indexedDB e para resgatar o token da API.

const NOME_CACHE = "cache-v1";
//Páginas estáticas que serão armazenadas em cache
const ARQUIVOS_CACHE = ["index.html", "offline.html"];

//Verifica se o site está rodando em localhost (função auxiliar a ser implementada)
const isLocalhost = Boolean(
  self.location.hostname === "localhost" ||
    //Para endereços IPv6, o localhost é igual a ::1
    self.location.hostname === "[::1]" ||
    //Para endereços IPv4, o localhost pode ser entre 127.0.0.1 e 127.255.255.255
    self.location.hostname.match(
      /^127(?:\.(?:25[0-5]2[0-4][0-9]|[01]?[0-9][-9]?)){3}$/
    )
);

//Instalação dos service workers
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(NOME_CACHE).then((cache) => {
      console.log("Cache aberto");
      return cache.addAll(ARQUIVOS_CACHE);
    })
    );
    
    //Busca o token via requisição da API
    event.waitUntil(
        fetchToken('urlDaAPI').then((token) => {
            addData(token, "db", "store");
        }).catch((error) => {
            console.error("Erro ao buscar o token: ", error);
        }
        )
    );
});

//Escuta de requisições
self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      //Busca o token no IndexedDB
      const tokenRequest = await getData("db", "store");
      const headers = new Headers(event.request.headers);

      // Append the token to the headers only if it exists
      if (tokenRequest && tokenRequest.token) {
        headers.append("Authorization", `Bearer ${tokenRequest.token}`);
      }

      //Busca os recursos do cache
      const cacheRequest = await caches.match(event.request);
      if (cacheRequest) {
        return cacheRequest;
      }

      //Altera a requisição para incluir o token
      const modifiedRequest = new Request(event.request, {
        method: event.request.method,
        headers: headers,
        body: event.request.body,
      });

      //Busca os recursos da rede
      const networkRequest = await fetch(modifiedRequest);
      const cache = await caches.open(NOME_CACHE);

      //Atualiza os recursos no cache
      cache.put(event.request, networkRequest.clone());
      return networkRequest;
    })(),

    //Lógica auxiliar, para cache de arquivos estáticos
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request)
        .then((response) => {
          return response;
        })
        .catch(() => {
          return caches.match("offline.html");
        });
    })
  );
});

//Ativação dos service workers
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(NOME_CACHE);
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
