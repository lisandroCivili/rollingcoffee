import Swal from 'sweetalert2'
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearProducto, editarProducto, obtenerProducto } from '../../../helpers/queries';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const FormularioProducto = ({editando, titulo}) => {

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
    setValue
  } = useForm()

  const {id} = useParams();
  const navegacion = useNavigate()
  useEffect(()=>{
    if (editando) {
      cargarDatos()
    }
  },[])

  const cargarDatos = async()=>{
    const respuesta = await obtenerProducto(id)
    if (respuesta.status === 200) {
      const datos = await respuesta.json()
      setValue('nombreProducto', datos.nombreProducto)
      setValue('precio', datos.precio)
      setValue('imagen', datos.imagen)
      setValue('categoria', datos.categoria)
      setValue('descripcion_breve', datos.descripcion_breve)
      setValue('descripcion_amplia', datos.descripcion_amplia)
    }else{
      console.log("No se obtuvieron datos")
    }
  }
  
  // El parametro es un objeto que inventamos donde, si todo sale bien en el form, la libreria nos devuelve los datos ingresados
  const datosValidados = async(producto)=>{
    if (editando) {
      const respuesta = await editarProducto(producto, id)
      if (respuesta.status === 200) {
        Swal.fire({
          title: "Edicion confirmada",
          text: `El producto ${producto.nombreProducto} fue editado con exito.`,
          icon: "success"
        });
        navegacion('/administrador')
      }else{
        Swal.fire({
          title: "No se pudo editar.",
          text: "Por favor intentalo nuevamente en unos minutos.",
          icon: "error"
        });
      }
      }else{
        const respuesta = await crearProducto(producto);
        if (respuesta.status === 201) {
          Swal.fire({
            title: "Producto creado",
            text: `Se creo la receta de: ${producto.nombreProducto}`,
            icon: "success"
          });
          reset()
        }else{
          Swal.fire({
            title: "Ocurrio un error",
            text: "No se puedo crear la receta, intente nuevamente en unos minutos.",
            icon: "error"
          });
        }
      } 
    }



  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">{titulo}</h1>
      <hr />
      <Form className="my-4" onSubmit={handleSubmit(datosValidados)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            {...register("nombreProducto", {
              required: "El nombre del producto es obligatorio",
              minLength: {
                value: 2,
                message:
                  "El nombre del producto debe tener como minimo 2 caracteres.",
              },
              maxLength: {
                value: 25,
                message:
                  "El nombre del producto debe tener como maximo 25 caracteres.",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 1000"
            {...register("precio", {
              required: "El precio es obligatorio.",
              min: {
                value: 300,
                message: "El precio tiene que ser de $300 como minimo.",
              },
              max: {
                value: 5000,
                message: "El precio tiene que ser de $5000 como máximo.",
              },
            })}
          />
          <Form.Text className="text-danger">
          {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://images.pexels.com/photos/3090274/pexels-photo-3090274.jpeg"
            {...register("imagen",{
              required: "La url de al imagen es obligatoria.",
              pattern: {
                value: /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)$/,
                message: "Debe ingresar una URL válida, con una imagen en formato jpg, jpeg, gif o png."
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoría*</Form.Label>
          <Form.Select {...register('categoria',{
            required: "Debe seleccionar una categoria."
          })}>
            <option value="">Seleccione una opcion</option>
            <option value="Infusiones">Infusiones</option>
            <option value="Batidos">Batidos</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Una taza de café suave y aromático."
            as="textarea"
            {...register("descripcion_breve", {
              required: "La descripcion breve es obligatoria",
              minLength: {
                value: 15,
                message:
                  "La descripcion breve debe tener como minimo 3 caracteres.",
              },
              maxLength: {
                value: 50,
                message:
                  "La descripcion breve debe tener como maximo 30 caracteres.",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion_breve?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción Amplia*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: El café americano es una bebida caliente que consiste en un espresso diluido con agua caliente, lo que resulta en una taza de café suave y aromático. Es una opción popular para aquellos que prefieren un café menos intenso que el espresso tradicional. Perfecto para disfrutar en cualquier momento del día."
            as="textarea"
            {...register("descripcion_amplia", {
              required: "La descripcion amplia es obligatoria",
              minLength: {
                value: 15,
                message:
                  "La descripcion amplia debe tener como minimo 3 caracteres.",
              },
              maxLength: {
                value: 250,
                message:
                  "La descripcion amplia debe tener como maximo 30 caracteres.",
              },
            })}
          />
          <Form.Text className="text-danger">
          {errors.descripcion_amplia?.message}
          </Form.Text>
        </Form.Group>
        
        <Button type="submit" variant='success'>
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioProducto;
