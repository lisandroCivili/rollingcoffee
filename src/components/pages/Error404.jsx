import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import error from '../../assets/error404.png'
const Error404 = () => {
    return (
        <section className="mainSection text-center">
        <img src={error} alt="error 404" />
        <div>
        <Button variant='success' as={Link} to='/'>Volver al inicio</Button>

        </div>
    </section>
    );
};

export default Error404;