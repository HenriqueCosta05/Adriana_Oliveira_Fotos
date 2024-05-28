import { BsCash, BsCashStack, BsCashCoin, BsCardImage, BsFillPersonCheckFill, BsFillPersonPlusFill } from 'react-icons/bs'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

function Home() {

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];


  return (
    <>
      <main className='w-full'>
        <div className='title font-bold m-4'>
          <h1>HOME PAGE</h1>
        </div>

        <div className='main-cards'>
          <div className='card text-center font-bold flex flex-col italic bg-success p-4 m-4'>
            <div className='card-inner'>
              <h3>RECEITAS DO MÊS</h3>
              <BsCash className='card_icon' />
            </div>
            <h1>R$ 2.500,00</h1> {/*{dados && dados.receitas}*/}
          </div>
          <div className='card text-center font-bold italic bg-error p-2 m-4'>
            <div className='card-inner '>
              <h3>DESPESAS DO MÊS</h3>
              <BsCashStack className='card_icon' />
            </div>
            <h1>R$ 500,00</h1> {/*{dados && dados.despesas}*/}
          </div>
          <div className='card text-center font-bold italic bg-warning p-4 m-4'>
            <div className='card-inner'>
              <h3>SALDO</h3>
              <BsCashCoin className='card_icon' />
            </div>
            <h1>R$ 2.000,00</h1> {/*{dados && dados.saldo}*/}
          </div>
          <div className='card text-center font-bold italic bg-primary p-4 m-4'>
            <div className='card-inner'>
              <h3>GALERIA DE FOTOS</h3>
              <BsCardImage className='card_icon' />
            </div>
            <h3>Galerias cadastradas</h3> {/*{dados && dados.galeria}*/}
            <h1>12</h1>
          </div>
          <div className='card text-center font-bold italic bg-primary p-4 m-4'>
            <div className='card-inner'>
              <h3>CLIENTES</h3>
              <BsFillPersonCheckFill className='card_icon' />
            </div>
            <h3>Clientes cadastrados</h3> {/*{dados && dados.clientes}*/}
            <h1>29</h1>
          </div>
          <div className='card text-center font-bold italic bg-primary p-4 m-4'>
            <div className='card-inner'>
              <h3>PROSPECÇÃO</h3>
              <BsFillPersonPlusFill className='card_icon' />{/*{dados && dados.prospecccao}*/}
            </div>
            <h3>Formulários Preenchidos</h3>
            <h1>37</h1>
          </div>

        </div>

        <div className='charts'>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>

          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>

        </div>
      </main>
    </>
  )
}

export default Home