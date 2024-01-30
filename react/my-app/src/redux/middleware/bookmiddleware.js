import axios from 'axios';

import { getBooks, addBook } from '../reducers/booksReducer';

export const gettBooksMidd = ({ dispatch, getState }) => next => action => {
  if (action.type === 'GET_BOOKS') {
    axios.get("http://localhost:8585/api/books/getAllBooksDto")
      .then((response) => {
        console.log('response.data', response.data);
        dispatch(getBooks(response.data));
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      })
  }

  return next(action);
};

export const addBookMidd = ({ dispatch, getState }) => (next) => (action) => {
  if (action.type === 'ADD_BOOK') {
    const { updateBook, image } = action.payload;
    const formData = new FormData();
    formData.append('image', image);
    formData.append('book', new Blob([JSON.stringify(updateBook)], { type: 'application/json' }));
    console.log('image1', image)
    console.log('updateBook1', updateBook)
    console.log('formdata1', formData)
    axios
      .post('http://localhost:8585/api/books/uploadBook', formData)
      .then((response) => {
        console.log('response.data', response.data);
        dispatch(addBook(response.data));
      })
      .catch((error) => {
        console.log('error of uploading the book', error);
      });
  }
  return next(action);
};

