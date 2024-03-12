import { Container, Card, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { obtenerProducto} from "../../helpers/queries";

const DetalleProducto = () => {

  const {id} = useParams()

  const [productos, setProductos] = useState({});

  useEffect(()=>{
    obtenerDetalleProducto()
  })

  const obtenerDetalleProducto = async ()=>{
    const respuesta = await obtenerProducto(id)
    if (respuesta.status === 200) {
      const datos = await respuesta.json()
      setProductos(datos)
    }else{
      console.log("NO se obtuvieron datos.")
    }
  }

  return (
    <Container className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src={productos.imagen}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="primary-font">{productos.nombreProducto}</Card.Title>
              <hr />
              <Card.Text>
              {productos.descripcion_amplia}
              <br/>
              <br/>
              <span className="primary-font fw-semibold ">Categoria:</span>{productos.categoria}
              <br className='mb-3'/>
              <span className="primary-font fw-semibold ">Precio: ${productos.precio}</span></Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
