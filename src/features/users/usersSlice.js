import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getUser = createAsyncThunk(
    "users/getUser",
    async (dispatch, getState) => {
        return await fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json())
    }
)

const usersSlice = createSlice({
    name: "user",
    initialState: {
       users: [],
       status: null
    },
    extraReducers: {
        [getUser.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getUser.fulfilled]: (state, action) => {
            state.status = 'success',
            state.users = action.payload
        },
        [getUser.rejected]: (state, action) => {
            state.status = 'failed';
        }
    }
})

export default usersSlice.reducer