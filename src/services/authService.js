import { toast } from 'react-toastify';
import { authStart ,authToken , authError, authRegisterSuccess, authLogout } from '../store/AuthSlice';
import { fetchConfig } from '../util/apiUtils';
import { setTokenInStorage, removeToken } from '../util/localStorage';

export const loginService = (user) => {
  return async (dispatch) => {
    try {
      dispatch(authStart());
      // configs to fetch      
      const {url, options} = fetchConfig('auth/login', 'POST', {...user}); 

      // api request
      const res = await fetch(url, options);

      if(res.status === 401) {
        dispatch(authError("usuário ou senha incorretos!"));
        toast.error("usuário ou senha incorretos!");
        return;
      }
      
      if(res.status === 200) {
        // dispatch token
        const data = await res.json();
        dispatch(authToken(data.token));
        //save token
        setTokenInStorage(data.token);
        return;
      }

    } catch (error) {
      console.log(error.message);
      toast.error("erro ao logar");
      dispatch(authError("erro ao logar"));
    }
  }
}

export const logoutService = () => {
  return (dispatch) => {
    removeToken();
    dispatch(authLogout());
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
      if(res.status === 201) {
        dispatch(authRegisterSuccess());
        toast.success("usuário registrado com sucesso!");
        return;
      }

      // duplicate username or email errors
      if(res.status === 400) {
        const json = await res.json();
        console.log(json);

        if(json.msg) {
          toast.error(json.msg);
          dispatch(authError(json.msg));
          return;
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("erro ao criar usuário");
      dispatch(authError, "erro ao criar conta");
    }
  }
}
