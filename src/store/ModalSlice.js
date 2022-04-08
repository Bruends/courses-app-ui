import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  showAddModal: false,
  showEdtModal: false,
  showDelModal: false,
  edtId: null,
  delId: null,
}

const ModalSlice = createSlice({
  name: 'Modal',
  initialState: defaultState,
  reducers: {
    openAddModal: (state, action) => ({
      ...defaultState,
      showAddModal: true,      
    }),
    openEditModal: (state, action) => ({
      ...defaultState,
      showEdtModal: true,
      edtId: action.payload
    }),
    openDelModal: (state, action) => ({
      ...defaultState,
      showDelModal: true,
      delId: action.payload
    }),
    closeModals: (state, action) => ({
      ...defaultState,
    }),
  }
});

export const { openAddModal, openDelModal, openEditModal, closeModals } = ModalSlice.actions;
export const modalReducer = ModalSlice.reducer;