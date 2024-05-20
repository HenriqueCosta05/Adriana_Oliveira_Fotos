const NOME_CACHE = "cache-v1";
const ARQUIVOS_CACHE = [
    "index.html",
    "offline.html"
]

//Instalação dos service workers
this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(NOME_CACHE).then((cache) => {
            console.log('Cache aberto');
            return cache.addAll(ARQUIVOS_CACHE);
        })
    )
})

//Escuta de requisições
this.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if(response) {
                return response;
            }
            return fetch(event.request).then((response) => {
                return response;
            }).catch(() => {
                return caches.match('offline.html');
            })
        })
    )
})

//Ativação dos service workers
this.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(NOME_CACHE);
    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
    )
})