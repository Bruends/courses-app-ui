import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginService } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

function LoginContainer() {
  const [user, setUser] = useState({username: "", password: ""});  
  const dispatch = useDispatch();
  const state = useSelector(state => state.authReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if(state.token)
      navigate('/courses', { replace: true });
  }, [state]);

  function handleSubmit(event){
    event.preventDefault();
    dispatch(loginService(user));
  }

  return <Login handleSubmit={handleSubmit} user={user} setUser={setUser} />
}

export default LoginContainer;