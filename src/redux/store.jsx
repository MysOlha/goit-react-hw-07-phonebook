import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice';
import { filtersReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filtersReducer,
  },
});