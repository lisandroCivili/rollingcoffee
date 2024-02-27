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
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return <BrowserRouter>
         <Menu/>
            <Routes>
              <Route path="/" element={<Inicio/>}/>
              <Route path="/detalleproducto" element={<DetalleProducto/>}/>
              <Route path="/administrador" element={<Administrador/>}/>
              <Route path="/administrador/crear" element={<FormularioProducto/>}/>
              <Route path="*" element={<Error404/>}/>
            </Routes>
         <Footer/> 
         </BrowserRouter>
}

export default App;
