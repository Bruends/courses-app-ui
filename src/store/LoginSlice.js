import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'Login',
  initialState: { token: null, error: null, loading: false },
  reducers: {
    loginSuccess: (state, action) => ({ 
      token: action.payload, 
      error: null,
      loading: false,
    }),

    loginError:  (state, action) => ({ 
      error: action.payload,
      token: null,
      loading: false  
    }),
  }
});

export const {loginSuccess, loginError} = loginSlice.actions;

export const reducer = loginSlice.reducer;