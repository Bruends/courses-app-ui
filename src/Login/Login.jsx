import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginService } from '../services/authService';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage(){
  const [user, setUser] = useState({username: "", password: ""});  
  const dispatch = useDispatch();
  const state = useSelector(state => state.authReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if(state.auth)
      navigate('/courses', { replace: true });
  }, [state]);

  function handleSubmit(event){
    event.preventDefault();
    dispatch(loginService(user));
  }

  return (
    <form onSubmit={(event) => { handleSubmit(event) }}>
      <input 
        type="text" 
        value={ user.username } 
        onChange={({ target }) => { 
          setUser({ ...user, username: target.value });
        }}
      />
      
      <input 
        type="password" 
        value={user.password} 
        onChange={({ target }) => { 
          setUser({ ...user, password: target.value});
        }}
      />
      
      <button type="submit">
        Login
      </button>
        <Link to='/' >Go Back</Link>
    </form>
    )
}

export default LoginPage;