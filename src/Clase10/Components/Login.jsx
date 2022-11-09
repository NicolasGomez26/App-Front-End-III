import React from 'react'
import { useState } from 'react'
import { validarNombre, validarPassword } from './validaciones'

const Login = () => {
    const [user, setUser] = useState({
        nombre:"",
        password:""
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (validarNombre(user.nombre) && validarPassword(user.password)) {
            alert("Ingresaste correctamente")
        }
        else{alert("No pudiste ingresar, algunos de los datos son incorrectos")}
    }
return (
    <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" onChange={(e) => setUser({...user, nombre:e.target.value})}/>
        <label>Password:</label>
        <input type="password" onChange={(e) => setUser({...user, password:e.target.value})} />
        <button>Ingresar</button>
    </form>
)
}

export default Login