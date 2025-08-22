import './App.css'

import Header from './componentes/header/Header.jsx'
import Footer from './componentes/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

function App() {


  
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
