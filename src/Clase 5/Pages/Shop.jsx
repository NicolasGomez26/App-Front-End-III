import React from 'react'
import Header from '../Components/Header'
import productos from '../productos.json'
import styles from './Shop.module.css'

const shopStyles = {
  backgroundColor: 'purple', 
  padding: '20px', 
  marginBottom: 10, 
  borderRadius: 20
}

const Shop = () => {

  return (
    <>
        <Header titulo='Shop'/>
        {productos.map((producto) => (
          <div key={producto.id} className={styles.card} style={shopStyles}>
            <img src={producto.imagen} alt="" className={styles.imagen} />
            <h2 className={styles.titulo}>{producto.id} - {producto.nombre}</h2>
            <h3 className={styles.precio}>{producto.precio}</h3>
          </div>
        ))}
    </>
  )
}

export default Shop