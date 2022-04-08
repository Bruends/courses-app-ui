import { Form, Button } from 'react-bootstrap';

function NewCourse({ handleSubmit, course,  setCourse }) {
  return(
    <Form onSubmit={(event) => handleSubmit(event)}>
      <Form.Group controlId='courseName'>
        <Form.Label>Name: </Form.Label>
        <Form.Control
          type="text" 
          value={course.name}
          onChange={({ target }) => { 
            setCourse({...course, name: target.value})
          }}
        />
      </Form.Group>

      <Form.Group controlId='courseName'>
        <Form.Label>Category: </Form.Label>
        <Form.Control
          type="text" 
          value={course.category}
          onChange={({ target }) => { 
            setCourse({...course, category: target.value})
          }}
          />
      </Form.Group>

      <Form.Group controlId='courseName'>
        <Form.Label>Link: </Form.Label>
        <Form.Control
          type="text" 
          value={course.link}
          onChange={({ target }) => { 
            setCourse({...course, link: target.value})
          }}
          />
      </Form.Group>
      <Button type="submit">Salvar</Button>
    </Form>
  )
}

export default NewCourse;