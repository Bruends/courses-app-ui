import { useDispatch, useSelector } from 'react-redux';
import { getTokenInStorage } from '../util/localStorage';
import { useEffect, useState } from 'react';
import { getCoursesService } from '../services/coursesService';
import { openDelModal, closeModals, openAddModal, openEditModal } from '../store/ModalSlice';
import Courses from './Courses';

function CoursesContainer() {
  const [search, setSearch] = useState('');  
  const { coursesReducer, modalReducer } = useSelector(state => state);
  const token = getTokenInStorage();
  const dispatch = useDispatch();
  let courses;
  // getiing courses from api to store
  useEffect(() => {
    dispatch(getCoursesService(token));
  }, []);

  // filter results by search
  if(search && coursesReducer.courses) {   
    const searchLower = search.toLocaleLowerCase(); 
     courses = coursesReducer.courses.filter((c) => {
      if(c.name.includes(search) || c.category.includes(search))
        return c;
    })
  } else {
     courses = coursesReducer.courses;
  }

  // === modal functions
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
  // ===
  return (
    <Courses 
      courses={courses}
      modal={modalReducer}
      openAdd={addModal}
      openEdt={editModal}
      openDel={deleteModal}
      closeAllModals={closeAllModals}
      search={search}
      setSearch={setSearch}
    />
  );
}

export default CoursesContainer;