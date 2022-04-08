import { Form, Button } from 'react-bootstrap';
import Modal from '../Modal';

function AddModal({ handleSubmit, course,  setCourse, modal }) {
  return(
    <Modal show={modal.showAddModal} title="adicionar novo curso">
      <Form onSubmit={(event) => handleSubmit(event)}>
        <Form.Group controlId='courseName' className='m-4'>
          <Form.Label>Nome: </Form.Label>
          <Form.Control
            type="text" 
            value={course.name}
            onChange={({ target }) => { 
              setCourse({...course, name: target.value})
            }}
            required
          />
        </Form.Group>

        <Form.Group controlId='courseName' className='m-4'>
          <Form.Label>Categoria: </Form.Label>
          <Form.Control
            type="text" 
            value={course.category}
            onChange={({ target }) => { 
              setCourse({...course, category: target.value})
            }}
            required
            />
        </Form.Group>

        <Form.Group controlId='courseName' className='m-4'>
          <Form.Label>Link: </Form.Label>
          <Form.Control
            type="text" 
            value={course.link}
            onChange={({ target }) => { 
              setCourse({...course, link: target.value})
            }}
            required
            />
        </Form.Group>
        <Button type="submit" className='m-4'>Salvar</Button>
      </Form>
    </Modal>
  )
}

export default AddModal;