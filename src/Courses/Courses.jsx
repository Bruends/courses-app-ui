import {Container, Row, Col, Button, Stack} from 'react-bootstrap';
import Menu from '../components/Menu/Menu'
import CourseCard from '../components/CourseCard';
import DeleteModal from '../components/DeleteModal';
import AddModal from '../components/AddModal';
import EditModal from '../components/EditModal';

function Courses({ courses, closeAllModals, openDel, openAdd, openEdt }) {
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
              <CourseCard key={i} remove={openDel} edit={openEdt} close={closeAllModals} course={c} />
            </Col>
          ))}
        </Row>
      </Container>
      {/* modals */}
      <DeleteModal />
      <AddModal />
      <EditModal />      
    </main>
  );
}

export default Courses;