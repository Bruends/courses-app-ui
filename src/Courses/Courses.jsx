import { useDispatch, useSelector } from 'react-redux';
import { logoutService } from '../services/authService';
import {getTokenInStorage} from '../util/localStorage';
import {useEffect} from 'react';
import {getCoursesService} from '../services/coursesService';

function Courses() {
  const { coursesReducer: state } = useSelector(state => state);
  const token = getTokenInStorage();
  const dispatch = useDispatch();

  console.log(state);

  useEffect(() => {
    dispatch(getCoursesService(token));
  }, [])

  function handleLogout() {
    dispatch(logoutService());
  }

  return (
    <div>
      {state.courses && <p>{state.courses[0].name}</p>}
      <button onClick={ handleLogout }>Logout</button>
    </div>
  );
}

export default Courses;