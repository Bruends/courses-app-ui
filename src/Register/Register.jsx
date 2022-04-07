import { Form, Button, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Register({user, setUser, handleSubmit}){
  return (
    <Form 
      className="auth-form mx-auto p-5 mt-5 border border-primary rounded" 
      onSubmit={(event) => { handleSubmit(event) }}
    >
      <h1 className="my-4"> Registrar:  </h1>
      <Form.Group className="m-2" controlId="registerName">
        <Form.Label>Nome: </Form.Label>
        <Form.Control 
          type="text" 
          value={user.name} 
          onChange={({ target }) => { 
            setUser({...user, name: target.value}) 
          }}
          required
        />
      </Form.Group>

      <Form.Group className="m-2" controlId="registerUsername">
        <Form.Label>Username: </Form.Label>
        <Form.Control 
          type="text" 
          value={user.username} 
          onChange={({ target }) => { 
            setUser({...user, username: target.value}) 
          }}
          required
        />
      </Form.Group>

      <Form.Group className="m-2" controlId="registerEmail">
        <Form.Label>Email: </Form.Label>
        <Form.Control 
          type="email" 
          value={user.email} 
          onChange={({ target }) => { 
            setUser({...user, email: target.value}) 
          }}
          required
        />
      </Form.Group>

      <Form.Group className="m-2" controlId="registerPassword">
        <Form.Label>senha: </Form.Label>
        <Form.Control 
          type="email" 
          value={user.password} 
          onChange={({ target }) => { 
            setUser({...user, password: target.value}) 
          }}
          required
        />
      </Form.Group>
      
      <Stack direction="horizontal" gap={3} className="mt-4">
        <Button variant="primary" type="submit"> Register </Button>
        <Link to='/login' >Já Possui uma conta ?</Link>
      </Stack>
    </Form>
  )
}

export default Register;