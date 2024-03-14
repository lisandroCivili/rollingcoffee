import { Routes, Route } from "react-router-dom";
import Administrador from "../pages/Administrador";
import FormularioProducto from "../pages/producto/FormularioProducto";


const RutasAdmin = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Administrador/>}/>
            <Route exact path="/crear" element={<FormularioProducto editando={false} titulo='Nuevo producto'/>}/>
            <Route exact path="/editar/:id" element={<FormularioProducto editando={true} titulo='Editar producto'/>}/>
        </Routes>
    );
};

export default RutasAdmin;