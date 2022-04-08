import { Card } from 'react-bootstrap';

function CourseCard({ course }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{ course.name }</Card.Title>
        <Card.Text>{ course.category }</Card.Text>
        <Card.Link href={course.link} target="_blank">Ir ao curso</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default CourseCard;