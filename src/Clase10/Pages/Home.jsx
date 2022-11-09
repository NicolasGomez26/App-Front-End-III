import React from 'react'
import Card from '../Components/Card'
import Header from '../Components/Header'
import productos from '../productos.json'

const Home = ({comprar}) => {
    const texto = "Home"
return (
    <div>
        <Header titulo={texto} descripcion ="Esta es la descripcion"/>
        {productos.map((elemento) => <Card key={elemento.id} producto={elemento} comprar={comprar}/>)}
    </div>
)
}

export default Home