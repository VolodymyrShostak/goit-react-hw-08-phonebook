import { createReducer } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, setFilter } from './operation';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

export const phonebook= createReducer (initialState, {

  [fetchContacts.pending]: state => {
    state.contacts.isLoading = true;
     state.contacts.error = "";
  },
  [fetchContacts.fulfilled]: (state, action) => {
    state.contacts.isLoading = false;
    state.contacts.items = action.payload;
  },
  [fetchContacts.rejected]: (state, action) => {
    state.contacts.isLoading = false;
    state.contacts.error = action.payload;
  },
  [addContact.pending]: state => {
    state.contacts.isLoading = true;
    state.contacts.error = '';
  },
  [addContact.fulfilled]: (state, action) => {
    state.contacts.items = [...state.contacts.items, action.payload];
    state.contacts.isLoading = false;
  },
  [addContact.rejected]: (state, action) => {
    state.contacts.error = action.payload;
    state.contacts.isLoading = false;
  },
  [deleteContact.pending]: state => {
    state.contacts.isLoading = true;
    state.contacts.error = '';
  },
  [deleteContact.fulfilled]: (state, action) => {
    state.contacts.items = state.contacts.items.filter(
      contact => contact.id !== action.payload.id
    );
    state.contacts.isLoading = false;
  },
  [deleteContact.rejected]: (state, action) => {
    state.contacts.error = action.payload;
    state.contacts.isLoading = false;
  },
  [setFilter]: (state, action) => {
    state.filter = action.payload;
  },
});
