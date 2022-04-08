import {Container, Row, Col} from 'react-bootstrap';
import Menu from '../components/Menu/Menu'
import CourseCard from '../components/CourseCard';

const courses = [
  {name: 'CS-50x', link:'aa', category: 'tech'},
  {name: 'Musica (youtube)', link:'aa', category: 'tech'},
  {name: 'course', link:'aa', category: 'Cozinha'},
  {name: 'course', link:'aa', category: 'Música'},
  {name: 'course', link:'aa', category: 'outro'},
]

function Landing() {
  return (
    <>
      <Menu />
      <Container>
        <Row>
          {courses.map((c, i) => (
              <Col key={i} lg={4}>
                <CourseCard key={i} course={c} />
              </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Landing;