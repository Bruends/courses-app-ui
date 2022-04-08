import { Card, ProgressBar, Stack, Button } from 'react-bootstrap';

function CourseCard({ course, remove }) {
  return (
    <Card className="mb-4 rounded border border-secondary">
      <Card.Body>
        <Stack gap={4} direction='horizontal'>
          <div>
            <Card.Title>{ course.name }</Card.Title>
          </div>
          <div className="ms-auto">
            <Card.Text>
              <small className='bg-secondary text-white p-1 px-2 rounded'>
                { course.category }
              </small>
            </Card.Text>          
            <Card.Link href={course.link} target="_blank">
              Continuar curso
            </Card.Link>
          </div>
        </Stack>
        <ProgressBar now={60.5} variant="primary" className="mt-4" />
        <Stack direction='horizontal' gap={2} className="mt-4">
          <Button size="sm" className="ms-auto" variant="warning text-white">Editar</Button>
          <Button size="sm" onClick={() => remove(course.id)} variant="danger text-white">Deletar</Button>
        </Stack>
      </Card.Body>
    </Card>
  )
}

export default CourseCard;