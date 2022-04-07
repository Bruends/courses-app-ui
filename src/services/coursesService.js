import { fetchStart, fetchSuccess, fetchError } from '../store/FetchCoursesSlice';
import { logoutService } from './authService';
import { fetchConfig } from '../util/apiUtils';

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
        console.log(data);
        dispatch(fetchSuccess(data));
      }

    } catch (error) {
      console.error(error);
      dispatch(fetchError("erro ao listar cursos"));
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
        return;
      }
    } catch (error) {
      console.log(error);
      dispatch(fetchError("erro ao salvar curso"));
    }
  }
}