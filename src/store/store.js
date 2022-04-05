import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './LoginSlice';

const store = configureStore({reducer});

export default store;
