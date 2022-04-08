import { Navbar, Container, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Menu() {
  return(
    <Navbar bg="dark" variant="dark" className="mb-4 p-2">
      <Container>
        <Navbar.Brand as={Link} to='/'>Courses</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
          <Nav.Link as={Link} to='courses'>Cursos</Nav.Link>
          <Nav.Link as={Link} to='courses/new'>Novo Curso</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Menu;