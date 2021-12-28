import {createSlice} from '@reduxjs/toolkit';

const initilStateValue = {name: "", age: 0, email: ""}

export const userSlice = createSlice({
    name: "user",
    initialState: {value: initilStateValue },
    reducers: {
        login: (state, action) => {
          state.value = action.payload
        },
        logout: (state, action) => {
            state.value = initilStateValue
        }
    }
})

export const {login, logout} = userSlice.actions

export default userSlice.reducer