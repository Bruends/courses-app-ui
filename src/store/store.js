import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './AuthSlice';
import { coursesReducer } from './FetchCoursesSlice';

const reducer = combineReducers({
  authReducer,
  coursesReducer,  
});

const store = configureStore({reducer});

export default store;
