import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerService } from '../services/authService';
import Register from './Register';

const defaultUser = {
    name: "",
    username: "",
    email: "",
    password: "",
}

function RegisterContainer(){
  const [user, setUser] = useState(defaultUser);
  const dispatch = useDispatch();
  
  function handleSubmit(event) {
      event.preventDefault();
      dispatch(registerService(user));
  }

  return <Register handleSubmit={handleSubmit} user={user} setUser={setUser} />
}

export default RegisterContainer;