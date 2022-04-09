import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editCourse } from '../../services/coursesService';
import { closeModals } from "../../store/ModalSlice";
import EditModal from "./EditModal";

const defaultCourse = {
  id: 0,
  name: "",
  link: "",
  category: "",
  total_lessons: 0,
}

function EditModalContainer() {
  const [course, setCourse] = useState(defaultCourse);
  const dispatch = useDispatch();
  const { modalReducer: modalState, authReducer, coursesReducer } = useSelector(state => state);
  const { courses } = coursesReducer;
  const { edtId } = modalState;
  const { token } = authReducer;

  useEffect(() => {    
    let courseToEdit
    if (courses && edtId) {
      courseToEdit = courses.filter((c) => c.id === edtId )[0];
    }
    if (courseToEdit) {
      console.log(courseToEdit);
      setCourse({...courseToEdit});
    }
  }, [courses, modalState]);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(editCourse(course, token));
    setCourse({...defaultCourse});
    dispatch(closeModals());
  }

  return <EditModal handleSubmit={handleSubmit} setCourse={setCourse} course={course} modal={modalState} />
  
}

export default EditModalContainer;