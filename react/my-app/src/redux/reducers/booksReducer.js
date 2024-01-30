import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    listBooks: [],
    selectedBook: {}
}

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        getBooks: (state, action) => {
            state.listBooks = (action.payload);

        },
        addBook: (state, action) => {
            state.listBooks.push(action.payload);
        },
        editBook: (state, action) => {
            const currentBookIndex = state.findIndex(b => b.bookId === action.payload.bookId);
            state[currentBookIndex] = action.payload.book;
        },
        updateSelectedBook: (state, action) => {
            state.selectedBook = action.payload
        },
    },
})

export const { getBooks, addBook, editBook, updateSelectedBook } = bookSlice.actions

export default bookSlice.reducer