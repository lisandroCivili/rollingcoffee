import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import "./App.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Error404 from "./components/pages/Error404";
import Administrador from "./components/pages/Administrador";
import Inicio from "./components/pages/Inicio";
import FormularioProducto from "./components/pages/producto/FormularioProducto";
import DetalleProducto from "./components/pages/DetalleProducto";
import Login from "./components/pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return <BrowserRouter>
         <Menu/>
            <Routes>
              <Route exact path="/" element={<Inicio/>}/>
              <Route exact path="/detalleproducto/:id" element={<DetalleProducto/>}/>
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/administrador" element={<Administrador/>}/>
              <Route exact path="/administrador/crear" element={<FormularioProducto editando={false} titulo='Nuevo producto'/>}/>
              <Route exact path="/administrador/editar/:id" element={<FormularioProducto editando={true} titulo='Editar producto'/>}/>
              <Route exact path="*" element={<Error404/>}/>
            </Routes>
         <Footer/> 
         </BrowserRouter>
}

export default App;
