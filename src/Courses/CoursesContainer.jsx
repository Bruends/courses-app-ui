import { useDispatch, useSelector } from 'react-redux';
import { logoutService } from '../services/authService';
import { getTokenInStorage } from '../util/localStorage';
import { useEffect } from 'react';
import { getCoursesService } from '../services/coursesService';
import Courses from './Courses';

function CoursesContainer() {
  const { coursesReducer: state } = useSelector(state => state);
  const token = getTokenInStorage();
  const dispatch = useDispatch();  

  useEffect(() => {
    dispatch(getCoursesService(token));
  }, [])

  function logout() {
    dispatch(logoutService());
  }

  return (
    <Courses logout={logout} courses={state.courses}/>
  );
}

export default CoursesContainer;