import React from 'react'
import { useState } from 'react'

const Card = ({producto, comprar}) => {
    const [total, setTotal] = useState(0)
    
return (
    <>
        <h1>{producto.nombre}</h1>
        <img src={producto.imagen} alt="producto" />
        <h3>{producto.precio}</h3>
        <button onClick={() => {comprar(); setTotal(total + 1)}}>Añadir al carrito</button>
        <p>Stock en el carrito : {total}</p>
    </>
)}

export default Card