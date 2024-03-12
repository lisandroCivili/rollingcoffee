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