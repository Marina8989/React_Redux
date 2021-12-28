import {createSlice} from '@reduxjs/toolkit';

const initilStateValue = "";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {value: initilStateValue },
    reducers: {
        changeColor: (state, action) => {
          state.value = action.payload
        }
    }
})

export const {changeColor} = themeSlice.actions;

export default themeSlice.reducer;