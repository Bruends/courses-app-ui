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
    }),

    authRegisterSuccess: (state, action) => ({ 
      ...defaultState,      
      registered: true,
    }),
  }
});

export const { authStart, authToken, authError, authRegisterSuccess } = AuthSlice.actions;

export const reducer = AuthSlice.reducer;