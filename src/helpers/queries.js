const APIProductos = import.meta.env.VITE_API_PRODUCTO;

export const leerProductos = async ()=>{
    try {
        const respuesta = await fetch(APIProductos);
        return respuesta
    } catch (error) {
        console.log(error)
    }
}