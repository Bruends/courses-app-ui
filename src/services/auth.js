import { loginSuccess, loginError } from '../store/LoginSlice';
import { fetchConfig } from '../util/apiUtils';

export const loginService = (username, password) => {
  return async (dispatch) => {
    try {
      // configs to fetch
      const url = "http://localhost:3380/auth/login";
      const config = fetchConfig('POST', {username, password}); 

      // api request
      const res  = await fetch(url, config);
      const data = await res.json(); 

      // dispatch data
      dispatch(loginSuccess(data));
      
    } catch (error) {
      console.log(error.message);
      dispatch(loginError("erro ao logar"));
    }
  }
}
