import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getByCategory, getTitleCategory } from '../../servicios/productos';
import { useEffect, useState } from 'react';
import Producto from '../../componentes/Producto/Producto.jsx';


const Productos = () => {

  const [productos, setProductos] = useState([])
  const { categoria } = useParams();
  console.log("param: ",categoria);
  
  useEffect(() => {
    getProducts().then(data => {
      console.log(data);
      let p = getByCategory(categoria, data)
      setProductos(p);
    })
    return () => {
      console.log("desmontando componente...");
    }
  }, [])

  return (
    <>
      <h1>{getTitleCategory(categoria)}</h1>
      { productos.length === 0
      ? <h2>No products found</h2> 
      : productos.map((p, i) => (
        <Fragment key={i}>
          <Producto  producto={p}/>
          {i != productos.length-1 && <hr/>}
        </Fragment>
      ))}
    </>

  )
}

export default Productos