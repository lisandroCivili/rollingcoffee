import Swal from 'sweetalert2'
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarProducto, leerProductos } from "../../../helpers/queries";
const ItemProducto = ({producto, setProductos}) => {

  const eliminarProducto = ()=>{
    Swal.fire({
      title: "¿Seguro desea eliminar el producto?",
      text: "No se puede revertir esta operación.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar"
    }).then(async(result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarProducto(producto.id)
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Producto eleminado",
            text: `El producto ${producto.nombreProducto} fue eliminado.`,
            icon: "success"
          });
          const listaActualRespuesta = await leerProductos();
          if (listaActualRespuesta.status === 200) {
            const listaActual = await listaActualRespuesta.json();
            setProductos(listaActual);
          }
        }else{
          Swal.fire({
            title: "Ocurrio un error",
            text: `No se pudo eliminar el producto, intente nuevamente en unos minutos.`,
            icon: "error"
          });
        }
      }
    });
  }


  return (
    <tr>
      <td className="text-center">{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td className="text-end">${producto.precio}</td>
      <td className="text-center">
        <img
          src={producto.imagen}
          className="img-thumbnail"
          alt={producto.nombreProducto}
        ></img>
      </td>
      <td>{producto.categoria}</td>
      <td className="text-center">
        <Link className="me-lg-2 btn btn-warning" to={'/administrador/editar/'+producto.id}>
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={eliminarProducto}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
