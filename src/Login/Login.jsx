import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginService } from '../services/authService';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    return (
        <form onSubmit={(event) => { event.preventDefault(); }}>
            <input 
                type="text" 
                value={username} 
                onChange={({ target }) => { setUsername(target.value)} }
            />
            <input 
                type="password" 
                value={password} 
                onChange={({ target }) => { setPassword(target.value)} }
            />
            <button 
                type="submit" 
                onClick={() => { dispatch(loginService(username, password))} }
            >
                Login
            </button>
            <Link to='/' >Go Back</Link>
        </form>
    )
}

export default LoginPage;