import { useDispatch, useSelector } from 'react-redux';
import { getTokenInStorage } from '../util/localStorage';
import { useEffect, useState } from 'react';
import { getCoursesService } from '../services/coursesService';
import { openDelModal, closeModals, openAddModal } from '../store/ModalSlice';
import Courses from './Courses';

function CoursesContainer() {
  const [showNew, setShowNew] = useState(false);  
  const { coursesReducer, modalReducer } = useSelector(state => state);
  const token = getTokenInStorage();
  const dispatch = useDispatch();  

  useEffect(() => {
    dispatch(getCoursesService(token));
  }, [])

  function deleteModal(id) {
    dispatch(openDelModal(id, token));
  }

  function addModal() {
    dispatch(openAddModal());
  }

  function closeAllModals() {
    dispatch(closeModals(openAddModal()));
  }

  return (
    <Courses 
      courses={coursesReducer.courses}
      modal={modalReducer}
      openAdd={addModal}
      openDel={deleteModal}
      closeAllModals={closeAllModals}
    />
  );
}

export default CoursesContainer;