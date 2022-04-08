import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveCourse } from '../services/coursesService';
import NewCourse from "./NewCourse";

const defaultCourse = {
  name: "",
  link: "",
  category: "",
  total_lessons: 0,
}

function NewCourseContainer() {
  const [course, setCourse] = useState(defaultCourse);
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.authReducer);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(saveCourse(course, token));
  }

  return <NewCourse handleSubmit={handleSubmit} setCourse={setCourse} course={course} />
  
}

export default NewCourseContainer;