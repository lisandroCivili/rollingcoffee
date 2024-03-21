import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { useEffect, useState } from "react";
import { leerProductos } from "../../helpers/queries";


const Inicio = () => {

  const [productos, setProductos] = useState([]);

  useEffect(()=>{
    obtenerProductos(); 
  }, [])

  const obtenerProductos = async()=>{
    const respuesta = await leerProductos();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setProductos(datos);
    }else{

    }
  }


  return (
    <section className="mainSection">
      <img
        className="banner"
        src="https://images.pexels.com/photos/13591748/pexels-photo-13591748.jpeg"
        alt="fondo cafe"
      />
      <Container className="mt-5">
        <h1 className="display-4">Nuestros Productos</h1>
        <hr />
    
          <Row>
            {
              productos.map((producto)=><CardProducto key={producto._id} producto={producto}/>)
            }
          </Row>
       
      </Container>
    </section>
  );
};

export default Inicio;
