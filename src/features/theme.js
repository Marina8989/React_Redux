import {createSlice} from '@reduxjs/toolkit';

const initialStateValue = "";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {value: initialStateValue},
    reducers: {
        colorChange: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {colorChange} = themeSlice.actions;
export default themeSlice.reducer;