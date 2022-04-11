import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutService } from '../../services/authService';

function Menu() {
  const dispatch = useDispatch();

  return(
    <Navbar className="bg-dark text-white p-3">
      <Container>
        <Navbar.Brand as={Link} to='/' className="text-white">Courses</Navbar.Brand>
        <Nav className="justify-content-end"> 
          <Nav.Link 
            as={Button} 
            variant="danger text-white"
            size="sm" 
            onClick={() => dispatch(logoutService())} 
          >
            Logout
          </Nav.Link>          
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Menu;