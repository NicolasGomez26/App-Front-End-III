import React, { useState } from 'react'
import styles from '../Pages/Shop.module.css'

const shopStyles = {
  backgroundColor: 'purple', 
  padding: '20px', 
  marginBottom: 10, 
  borderRadius: 20
}

const Card = ({producto, setCart}) => {

  const [stock, setStock] = useState(0)

  return (
    <div className={styles.card} style={shopStyles}>
        <img src={producto.imagen} alt="" className={styles.imagen} />
        <h2 className={styles.titulo}>{producto.id} - {producto.nombre}</h2>
        <h3 className={styles.precio}>{producto.precio}</h3>
        <section>
          <h4>
            <button onClick={() => setStock(stock + 1)}>+</button>
            {stock}
            <button disabled={stock === 0} onClick={() => setStock(stock - 1 )}>-</button>
          </h4>
        </section>
        <button onClick={() => setCart((prev) => {
          return [...prev, {...producto, stock}]
        })}> Agregar al carrito 🛒</button>
    </div>
  )
}

export default Card