import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './AuthSlice';
import { coursesReducer } from './FetchCoursesSlice';
import { modalReducer } from './ModalSlice';

const reducer = combineReducers({
  authReducer,
  coursesReducer,  
  modalReducer,
});

const store = configureStore({reducer});

export default store;
