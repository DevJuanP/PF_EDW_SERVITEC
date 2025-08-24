import './App.css'
import Header from './componentes/header/Header.jsx'
import Footer from './componentes/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import Servi from './componentes/bot/chatBot.jsx'

function App() {


  
  return (
    <>
      <Header />
      <main>
        <Outlet/>
      </main>
         <Servi />
      <Footer />
    
    </>
  )
}

export default App
