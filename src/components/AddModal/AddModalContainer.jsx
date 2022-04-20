import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveCourse } from '../../services/coursesService';
import {closeModals} from "../../store/ModalSlice";
import AddCourse from "./AddModal";

const defaultCourse = {
  name: "",
  link: "",
  category: "",  
}

function AddModalContainer() {
  const [course, setCourse] = useState(defaultCourse);
  const dispatch = useDispatch();
  const { modalReducer: modalState, authReducer } = useSelector(state => state);
  const {token} = authReducer;

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(saveCourse(course, token));
    setCourse({...defaultCourse});
    dispatch(closeModals());
  }

  return <AddCourse handleSubmit={handleSubmit} setCourse={setCourse} course={course} modal={modalState} />
  
}

export default AddModalContainer;