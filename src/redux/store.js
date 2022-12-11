import { configureStore } from '@reduxjs/toolkit';
import { phonebook } from './mainReduser';

const store = configureStore({
  reducer: { phonebook },
});

export default store;
