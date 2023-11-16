import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    { id: '0', name: 'Emma Lebowski' },
    { id: '1', name: 'Gabriel Young' },
    { id: '2', name: 'Will Smith' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer