import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutService } from '../../services/authService';

function Menu() {
  const dispatch = useDispatch();

  return(
    <Navbar bg="dark" variant="dark" className="mb-4 p-2">
      <Container>
        <Navbar.Brand as={Link} to='/'>Courses</Navbar.Brand>
        <Nav className="justify-content-end"> 
          <Nav.Link 
            as={Button} 
            variant="secondary" 
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