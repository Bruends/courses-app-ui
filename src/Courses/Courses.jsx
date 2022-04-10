import {Container, Row, Col, Button, Stack} from 'react-bootstrap';
import Menu from '../components/Menu/Menu'
import CourseCard from '../components/CourseCard';
import DeleteModal from '../components/DeleteModal';
import AddModal from '../components/AddModal';
import EditModal from '../components/EditModal';
import Loading from '../components/Loading';

function Courses({ courses, closeAllModals, openDel, openAdd, openEdt }) {
  return (
    <main>
      <Menu />   
       
      <Container className="course-container mt-4 bg-white p-4 rounded">
        <Container>
          <Stack direction='horizontal' gap={3} className="mb-4">
            <h1 className='p-2'>
              Cursos:
            </h1>
            <Button className="ms-auto" variant='success' onClick={openAdd}>Novo Curso</Button>
          </Stack>
        </Container>

        {/* Loading */}
        <Loading />
        {/* courses */}
        <Container>
          <Row>
            {courses && courses.map((c, i) => (
              <Col key={i} lg={4}>
                <CourseCard key={i} remove={openDel} edit={openEdt} close={closeAllModals} course={c} />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
      {/* modals */}
      <DeleteModal />
      <AddModal />
      <EditModal />      
    </main>
  );
}

export default Courses;