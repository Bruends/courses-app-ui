import { Link } from 'react-router-dom';
import {Container, Row, Col, Button, Stack} from 'react-bootstrap';
import Menu from '../components/Menu/Menu'
import CourseCard from '../components/CourseCard';
import DeleteModal from '../components/DeleteModal';
import AddModal from '../components/AddModal';

function Courses({ courses, modal, closeAllModals, openDel, openAdd }) {
  return (
    <main>
      <Menu />    
      <Container>
        <Stack direction='horizontal' gap={3}>
          <h1 className='p-2'>
            Cursos:
          </h1>
          <Button className="ms-auto" variant='success' onClick={openAdd}>Novo Curso</Button>
        </Stack>
      </Container>  
      <Container>
        <Row>
          {courses && courses.map((c, i) => (
            <Col key={i} lg={4}>
              <CourseCard key={i} remove={openDel} close={closeAllModals} course={c} />
            </Col>
          ))}
        </Row>
      </Container>
      {/* modals */}
      <DeleteModal />
      <AddModal />
      
    </main>
  );
}

export default Courses;