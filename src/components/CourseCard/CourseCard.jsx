import { Card, Stack, Button } from 'react-bootstrap';

function CourseCard({ course, remove, edit }) {
  return (
    <Card className="mb-4 rounded border border-dark">
      <Card.Body>
        <Stack gap={1}>
          <div>
            <Card.Title className="text-center">{ course.name }</Card.Title>
          </div>
          <div className="mx-auto text-center">
            <Card.Text>
              <small className='text-muted rounded'>
                { course.category }
              </small>
            </Card.Text>          
            <Card.Link href={ course.link } target="_blank">
              Continuar curso
            </Card.Link>
          </div>
        </Stack>
        
        <Stack direction='horizontal' gap={2} className="mt-4">
          <Button size="sm" onClick={() => edit(course.id)} className="ms-auto" variant="warning text-white">Editar</Button>
          <Button size="sm" onClick={() => remove(course.id)} variant="danger text-white">Deletar</Button>
        </Stack>
      </Card.Body>
    </Card>
  )
}

export default CourseCard;