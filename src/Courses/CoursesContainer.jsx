import { useDispatch, useSelector } from 'react-redux';
import { getTokenInStorage } from '../util/localStorage';
import { useEffect, useState } from 'react';
import { getCoursesService } from '../services/coursesService';
import { openDelModal, closeModals, openAddModal, openEditModal } from '../store/ModalSlice';
import Courses from './Courses';

function CoursesContainer() {
  const [showNew, setShowNew] = useState(false);  
  const { coursesReducer, modalReducer } = useSelector(state => state);
  const token = getTokenInStorage();
  const dispatch = useDispatch();  

  useEffect(() => {
    dispatch(getCoursesService(token));
  }, []);

  function deleteModal(id) {
    dispatch(openDelModal(id));
  }

  function addModal() {
    dispatch(openAddModal());
  }

  function editModal(id){
    dispatch(openEditModal(id));
  }

  function closeAllModals() {
    dispatch(closeModals(openAddModal()));
  }

  return (
    <Courses 
      courses={coursesReducer.courses}
      modal={modalReducer}
      openAdd={addModal}
      openEdt={editModal}
      openDel={deleteModal}
      closeAllModals={closeAllModals}
    />
  );
}

export default CoursesContainer;