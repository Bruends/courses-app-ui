import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveCourse } from '../services/coursesService';

const defaultCourse = {
  name: "",
  link: "",
  category: "",
  total_lessons: 0,
}

function SaveCourse() {
  const [course, setCourse] = useState(defaultCourse);
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.authReducer);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(saveCourse(course, token));
  }

  return(
    <form onSubmit={(event) => handleSubmit(event)}>
      <input
        type="text" 
        value={course.name}
        onChange={({ target }) => setCourse({...course, name: target.value})}
      />

      <input
        type="text" 
        value={course.link}
        onChange={({ target }) => setCourse({...course, link: target.value})}
      />

      <input
        type="text" 
        value={course.category}
        onChange={({ target }) => setCourse({...course, category: target.value})}
      />
      
      <input
        type="number" 
        value={course.total_lessons}
        onChange={({ target }) => setCourse({...course, total_lessons: target.value})}
        min="1"
        max="999"
        step="1"
      />

      <button type="submit">Salvar</button>
    </form>
  )
}

export default SaveCourse;