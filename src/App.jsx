import { useState } from 'react'
import { getProducts } from './servicios/productos'

import './App.css'

import Header from './componentes/header/Header.jsx'
import Footer from './componentes/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

function App() {

  const [count, setCount] = useState(0)
  const [productos, setProductos] = useState([])

  const buttonHandler = async() => {
    try {
      let p = await getProducts();
      setProductos(p);
      console.log(productos);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
  return (
    <>
      <Header />
      <main>
        <Outlet/>
      </main>
     <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <hr />
      <button onClick={() => buttonHandler()}>get products</button>
      <ul>
        { productos.length === 0
        ? <li>No products found</li> 
        : productos.map((p) => (
          <li key={p.id}>{p.name} - {p.price}</li>
        ))}
      </ul>
      <Footer />
    </>
  )
}

export default App
