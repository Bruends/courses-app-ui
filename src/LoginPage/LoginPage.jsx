import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginService } from '../services/auth';

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
        </form>
    )
}

export default LoginPage;