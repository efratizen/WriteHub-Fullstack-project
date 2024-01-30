import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    selectedOffer: {},
}

export const offerSlice = createSlice({
    name: 'offer',
    initialState,
    reducers: {
        updateOffer: (state, action) => {
            state.selectedOffer = action.payload
        },
    },
})

export const { updateOffer } = offerSlice.actions

export default offerSlice.reducer
