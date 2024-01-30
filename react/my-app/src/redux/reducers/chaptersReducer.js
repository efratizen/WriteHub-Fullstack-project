import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    listChapters: [],
}

export const chapterSlice = createSlice({
    name: 'chapter',
    initialState,
    reducers: {
        getChapters: (state, action) => {
            state.listChapters = (action.payload);

        },


    },
})

export const { getChapters } = chapterSlice.actions

export default chapterSlice.reducer
