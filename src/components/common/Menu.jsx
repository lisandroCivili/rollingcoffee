import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../../assets/coffee_Logo.png";
import { NavLink, Link, useNavigate } from "react-router-dom";

const Menu = ({ usuarioLogeado, setUsuarioLogeado }) => {
  const navegacion = useNavigate();
  const logout = () => {
    //quitar usuario de sessionStorage
    sessionStorage.removeItem("loginRC");
    //reseteo el state
    setUsuarioLogeado("");
    //redireccion a inicio
    navegacion("/");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo de RollingCoffee"
            className="img-fluid"
            width={150}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className="nav-link" to="/">
              Inicio
            </NavLink>
            <NavLink end className="nav-link" to="/registro">
              Registro
            </NavLink>

            {/* Logica para habilitar o deshabilitar botones */}
            
            {usuarioLogeado !== "" ? (
              <>
                <NavLink end className="nav-link" to="/administrador">
                  Administrador
                </NavLink>
                <Button variant="link" className="nav-link" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <NavLink end className="nav-link" to="/login">
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
