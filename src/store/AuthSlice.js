import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
  token: null,
  error: null,
  registered: false,
  loading: false,
  auth: false,
}

const AuthSlice = createSlice({
  name: 'Auth',
  initialState: defaultState,
  reducers: {
    authStart: () => ({
      ...defaultState,
      loading: true
    }),

    authToken: (state, action) => ({ 
      ...defaultState,
      token: action.payload,
      auth: true,      
    }),

    authError:  (state, action) => ({ 
      ...defaultState,
      error: action.payload, 
      loading: false,     
    }),

    authRegisterSuccess: (state, action) => ({ 
      ...defaultState,      
      registered: true,
      loading: false,
    }),

    authLogout: (state, action) => ({
      ...defaultState
    })
  }
});

export const { 
  authStart, 
  authToken, 
  authError, 
  authRegisterSuccess, 
  authLogout,
} = AuthSlice.actions;

export const authReducer = AuthSlice.reducer;