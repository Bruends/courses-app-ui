import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerService } from '../services/authService';

const defaultUser = {
    name: "",
    username: "",
    email: "",
    password: "",
}

function handleRegister(event, user, dispatch) {
    event.preventDefault();
    dispatch(registerService(user));
}

function RegisterPage(){
    const [user, setUser] = useState(defaultUser);
    const dispatch = useDispatch();

    return (
        <form onSubmit={(event) => { handleRegister(event, user, dispatch) }}>
            <input 
                type="text" 
                value={user.name} 
                onChange={({ target }) => { 
                    setUser({...user, name: target.value}) 
                }}
            />
            <input 
                type="text" 
                value={user.username} 
                onChange={({ target }) => { 
                    setUser({...user, username: target.value}) 
                }}
                minLength="3"
            />
            <input 
                type="email" 
                value={user.email} 
                onChange={({ target }) => { 
                    setUser({...user, email: target.value})
                }}
                required
            />
            <input 
                type="password"
                value={user.password} 
                onChange={({ target }) => { 
                    setUser({...user, password: target.value}) 
                }}
                minLength="8"
                required
            />
            <button type="submit"> Register </button>
        </form>
    )
}

export default RegisterPage;