const APIProductos = import.meta.env.VITE_API_PRODUCTO;

export const leerProductos = async ()=>{
    try {
        const respuesta = await fetch(APIProductos);
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

export const crearProducto = async(nuevoProducto)=>{

    try {
        const respuesta = fetch(APIProductos, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(nuevoProducto)
        })
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

export const borrarProducto = async(id)=>{
    try {
        const respuesta = fetch(APIProductos+'/'+id,{
            method: "DELETE"
        })
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

export const obtenerProducto = async(id)=>{
    try {
        const respuesta = await fetch(APIProductos+'/'+id)
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

export const editarProducto = async(nuevosDatosProducto, id)=>{
    try {
        const respuesta = await fetch(APIProductos+'/'+id,{
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(nuevosDatosProducto)
        })
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

//cuando tenga el backend se borra esta func.
const userAdmin = {
    email:"admin@lisandrocivili.com",
    password: "123Aa$123"
}

export const login = (usuario)=>{
    if (usuario.mail === userAdmin.email && usuario.pass === userAdmin.password) {
        sessionStorage.setItem('loginRC', JSON.stringify(usuario.email))
        return true
    }else{
        return false
    }
}