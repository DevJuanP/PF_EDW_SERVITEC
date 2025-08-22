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
     
      <Footer />
    </>
  )
}

export default App
