import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const header = () => {
  return (
    <>
       <header>
      <div className="header-top">
        <div className="img-container">
          <Link to="/">
            <img src="https://raw.githubusercontent.com/DevJuanP/proyecto_CIBERTEC/refs/heads/main/img/logo.webp" alt="logo" />
          </Link>
          <a href="../index.html">
          </a>
        </div>
      </div>

      <nav className="header-bottom">
        <div className="menu-container">
          <ul className="menu">
            <li className="main-items">
              CATÁLOGO
              <ul className="submenu">
                <li className="Laptops">Laptops
                  <ul className="Laptops-submenu sub-submenu">
                    <li className="third-item"><a href="./pages/productos/laptops_gamer.html">Laptops Gamer</a></li>
                    <li className="third-item"><a href="./pages/productos/laptos_otras.html">Otros</a></li>
                  </ul>
                </li>
                <li className="armadas">PC Armadas
                  <ul className="armadas-submenu sub-submenu">
                    <li className="third-item"><a href="./pages/productos/combos_gamer.html">Combos Gamer</a></li>
                    <li className="third-item"><a href="./pages/productos/pc_profecional.html">PC Profesional</a></li>
                    <li className="third-item"><a href="./pages/productos/pc_oficina.html">PC Oficina</a></li>
                  </ul>
                </li>
                <li className="componentes">Componentes
                  <ul className="componentes-submenu sub-submenu">
                    <li className="third-item"><a href="./pages/productos/monitores.html">Monitores</a></li>
                    <li className="third-item"><a href="./pages/productos/cases.html">Cases</a></li>
                    <li className="third-item"><a href="./pages/productos/placas_madre.html">Placas madre</a></li>
                    <li className="third-item"><a href="./pages/productos/ram.html">Ram</a></li>
                    <li className="third-item"><a href="./pages/productos/cpus.html">CPU</a></li>
                    <li className="third-item"><a href="./pages/productos/memorias.html">Memorias HDD-SSD</a></li>
                    <li className="third-item"><a href="./pages/productos/otros_comp.html">Otros</a></li>
                  </ul>
                </li>
              </ul>
            </li>

            <h2>•</h2>
            <li className="main-items">
              <Link to="/servicios">NUESTROS SERVICIOS</Link>
            </li>

            <h2>•</h2>

            <li className="main-items">
              <Link to="/locales">NUESTROS LOCALES</Link>
            </li>

            <h2>•</h2>

            <li className="main-items">
              <Link to="/pago">MODALIDAD DE PAGO</Link>
            </li>

            <h2>•</h2>

            <li className="main-items">
              <Link to="/delivery">DELÍVERY</Link>
            </li>

            <h2>•</h2>

            <li className="main-items">
              <Link to="/negocio">MODELO DE NEOCIO</Link>
            </li>

          </ul>
      
        </div>
      </nav>
    </header>
    </>
  )
}

export default header