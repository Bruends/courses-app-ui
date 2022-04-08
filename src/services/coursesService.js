import { fetchStart, fetchSuccess, fetchError } from '../store/FetchCoursesSlice';
import { logoutService } from './authService';
import { fetchConfig } from '../util/apiUtils';
import { toast } from 'react-toastify';

export const getCoursesService = (token) => {
  return async (dispatch) => {
    try {
      dispatch(fetchStart());
    
      // fetching courses
      const { url, options } = fetchConfig('courses', 'GET', null, token);
      const res = await fetch(url, options);     

      // if unauthorized, logout
      if(res.status === 401) {
        dispatch(logoutService());        
        return;
      }

      if(res.status === 200) {
        const data = await res.json();        
        dispatch(fetchSuccess(data));
      }

    } catch (error) {
      console.error(error);
      dispatch(fetchError("erro ao listar cursos"));
      toast.error("Erro, tente novamente mais tarde :(");
    }
  }
}

export const saveCourse = (course, token) => {
  return async (dispatch) => {
    try {
      dispatch(fetchStart());
    
      // fetching courses
      const { url, options } = fetchConfig('courses', 'POST', {...course}, token);
      const res = await fetch(url, options);     

      // if unauthorized, logout
      if(res.status === 401) {
        dispatch(logoutService());
        return;
      }

      if(res.status === 201) {
        dispatch(getCoursesService(token));
        toast.success('curso salvo com sucesso!');
        return;
      }
    } catch (error) {
      console.log(error);
      dispatch(fetchError("erro ao salvar curso"));
    }
  }
}