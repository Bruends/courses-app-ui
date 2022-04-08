import { Link } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import Menu from '../components/Menu/Menu'
import CourseCard from '../components/CourseCard';

function Courses({ courses, logout }) {
  return (
    <>
      <Menu />
      <Link to="/courses/new">Novo</Link>
      <button onClick={logout}>out</button>
      <Container>
        <Row>
          {courses && courses.map((c, i) => (
            <Col key={i} lg={4}>
              <CourseCard key={i} course={c} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
      
    
  );
}

export default Courses;