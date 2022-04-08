import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
  courses: null,
  loading: false,
  success: null,
  error: null,
}

const FetchCourses = createSlice({
  name: 'FetchCourses',
  initialState: defaultState,
  reducers: {
    fetchStart: (state) => ({
      ...defaultState, 
      loading: true,
    }),

    fetchSuccess: (state, action) => ({
      ...defaultState,
      courses: action.payload || state.courses,
      loading: false,
      success: true
    }),

    fetchError: (state, action) => ({
      ...defaultState,
      error: action.payload,
      loading: false,      
    }),
  }

});

export const {fetchStart, fetchSuccess, fetchError} = FetchCourses.actions;

export const coursesReducer = FetchCourses.reducer;