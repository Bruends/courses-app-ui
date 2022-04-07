import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as authReducer } from './AuthSlice';
import { reducer as coursesReducer } from './FetchCoursesSlice';

const reducer = combineReducers({authReducer, coursesReducer})

const store = configureStore({reducer});

export default store;
