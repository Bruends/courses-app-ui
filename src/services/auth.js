import { authStart ,authToken , authError, authRegisterSuccess } from '../store/AuthSlice';
import { fetchConfig } from '../util/apiUtils';

export const loginService = (username, password) => {
  return async (dispatch) => {
    try {
      dispatch(authStart());
      // configs to fetch      
      const {url, options} = fetchConfig('auth/login', 'POST', {username, password}); 

      // api request
      const res  = await fetch(url, options);

      if(res.status === 401) {
        dispatch(authError("usuário ou senha incorretos!"));
        return;
      }
      
      if(res.status === 200) {
        // dispatch data
        const data = await res.json();
        console.table(data);
        dispatch(authToken(data));
        return;
      }

    } catch (error) {
      console.log(error.message);
      dispatch(authError("erro ao logar"));
    }
  }
}

export const registerService = (user) => {
  return async (dispatch) => {
    try {
      // configs to fetch      
      const {url, options} = fetchConfig('auth/register', 'POST', {...user});

      // api request
      const res  = await fetch(url, options);

      // try to login if success
      if(res === 201) {
        dispatch(authRegisterSuccess());
        return;
      }
    } catch (error) {
      console.log(error);
      dispatch(authError, "erro ao criar conta");
    }


  }
}
