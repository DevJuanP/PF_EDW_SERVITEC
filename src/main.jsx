import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Sevicios from './pages/servicios/Servicios.jsx'
import Productos from './pages/productos/Productos.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Home/>} />
          <Route path="/servicios" element={<Sevicios/>} />
          <Route path="/productos/:categoria" element={<Productos/>} />
        </Route>
      </Routes>    
    </BrowserRouter>
  </StrictMode>,
)
