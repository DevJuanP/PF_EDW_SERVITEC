import React from 'react'
import './home.css'
const Home = () => {
  return (
    <div>
       <div className="banner">
        <img src="img/bigBANNER.png" alt="Banner principal" />
      </div>

      <hr className="divider" />

      {/* Caja 1 */}
      <div className="containerBanner">
        <img src="img/LAPTOPBANNER.png" alt="Laptop Banner" />
        <div className="textoBanner">
          <p>
            <strong>
              Esta laptop cuenta con un potente procesador Intel Core i7 de 12ª
              generación, 16GB de RAM y un SSD de 512GB para un rendimiento
              rápido y eficiente.
            </strong>
          </p>
          <button className="comprar">COMPRAR</button>
        </div>
      </div>

      {/* Caja 2 */}
      <div className="containerBanner reverse">
        <img src="img/PCBANNER.png" alt="PC Banner" />
        <div className="textoBanner">
          <p>
            <strong>
              Esta laptop cuenta con un potente procesador Intel Core i7 de 12ª
              generación, 16GB de RAM y un SSD de 512GB para un rendimiento
              rápido y eficiente.
            </strong>
          </p>
          <button className="comprar">COMPRAR</button>
        </div>
      </div>

      {/* Caja 3 */}
      <div className="containerBanner">
        <img
          src="img/DESCRIPCION DE SERVICIO BANNER.png"
          alt="Servicio Técnico"
        />
        <div className="textoBanner">
          <p>
            <strong>
              Servitec ofrece servicio técnico especializado en PC, laptops y
              componentes, incluyendo mantenimiento, reparación y optimización
              de equipos. Brindamos limpieza interna, cambio de pasta térmica,
              actualización de hardware, instalación de software, eliminación de
              virus y recuperación de datos. ¡Confía en expertos y optimiza tu
              tecnología con Servitec! 🚀💻
            </strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home