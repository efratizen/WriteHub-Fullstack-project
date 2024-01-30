import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './reducers/booksReducer';
import usersReducers from './reducers/usersReducers';
import offersReducer from './reducers/offersReducer';
import chaptersReducer from './reducers/chaptersReducer';
import { gettBooksMidd, addBookMidd } from './middleware/bookmiddleware'; // Make sure to import the middleware correctly
import { gettChaptersMidd } from './middleware/chaptermiddleware';
export const store = configureStore({
  reducer: {
    book: booksReducer,
    user: usersReducers,
    offer: offersReducer,
    chapter: chaptersReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(gettBooksMidd, addBookMidd, gettChaptersMidd), // Concatenate the middleware correctly
});
