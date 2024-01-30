import { createSlice } from '@reduxjs/toolkit';
const initialState={
    myUser:{
        "id": -1,
        "mail": "",
        "passward": "",
        "firstName": "",
        "lastName": "",
        "literaryName": "",
        "profile": "",
        "phoneNumber": "",
        "dateOfBirth": "",
        "status": 1,
        "isAuthor": 1
    }
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        updateUser:(state,action)=>{
            state.myUser=action.payload
        },
    },
})

export const { updateUser } = userSlice.actions

export default userSlice.reducer