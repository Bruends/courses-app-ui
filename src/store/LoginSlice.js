import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'Login',
  initialState: { data: null, error: null, loading: false },
  reducers: {
    loginSuccess: (state, action) => ({ 
      data: action.payload, 
      error: null,
      loading: false,
    }),

    loginError:  (state, action) => ({ 
      error: action.payload,
      data: null,
      loading: false
    }),
  }
});

export const { loginSuccess, loginError } = loginSlice.actions;

export const reducer = loginSlice.reducer;