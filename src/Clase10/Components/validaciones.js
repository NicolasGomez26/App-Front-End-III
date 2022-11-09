export{validarNombre, validarPassword}

function validarNombre(nombre) {
    if (nombre.length > 3) {
        return true
    }
    return false
}

function validarPassword(password) {
    if (password.length >= 8 && password.length <= 25) {
        return true
    }
    return false
}
