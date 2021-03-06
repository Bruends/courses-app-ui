import { Link } from 'react-router-dom';
import { Form, Button, Stack } from 'react-bootstrap';

function LoginPage({ handleSubmit, user, setUser }){
  
  return (
    <Form       
      className="auth-form bg-light mx-auto p-5 mt-5 rounded" 
      onSubmit={(event) => { handleSubmit(event) }}
    >
      <h1 className="my-4"> Login </h1>
      <Form.Group className="m-2" controlId="loginUsername">
        <Form.Label>Usename: </Form.Label>
        <Form.Control 
          type="Text" 
          value={ user.username } 
          onChange={({ target }) => { 
            setUser({ ...user, username: target.value });
          }}
          required
        />
      </Form.Group>
      
      <Form.Group className="m-2" controlId="loginPassword">
        <Form.Label>Senha: </Form.Label>
        <Form.Control 
          type="password" 
          value={user.password} 
          onChange={({ target }) => { 
            setUser({ ...user, password: target.value});
          }}
          required
        />
      </Form.Group>
      
      <Stack className="m-2 mt-4" direction="horizontal" gap={3}>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Link to='/register' >Não tem uma conta ?</Link>
      </Stack>
    </Form>
  )
}

export default LoginPage;