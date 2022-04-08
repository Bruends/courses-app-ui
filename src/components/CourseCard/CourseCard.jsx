import { Card, ProgressBar, Stack, Button } from 'react-bootstrap';

function CourseCard({ course }) {
  return (
    <Card className="mb-4 rounded bg-dark text-white">
      <Card.Body>
        <Stack gap={4} direction='horizontal'>
          <div>
            <Card.Title>{ course.name }</Card.Title>
          </div>
          <div className="ms-auto">
            <Card.Text>
              <small className='bg-warning p-1 px-2 rounded'>
                { course.category }
              </small>
            </Card.Text>          
            <Card.Link href={course.link} target="_blank">
              Continuar curso
            </Card.Link>
          </div>
        </Stack>
        <ProgressBar now={60.5} variant="danger" className="mt-4" />
      </Card.Body>
    </Card>
  )
}

export default CourseCard;