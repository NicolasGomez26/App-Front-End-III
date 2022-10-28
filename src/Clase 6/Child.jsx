import React from 'react'

const Child = ({texto}) => {
  return (
    <div>
        <h3>Este es el contenido del primer hijo</h3>
        <p>{texto}</p>
    </div>
  )
}

export default Child