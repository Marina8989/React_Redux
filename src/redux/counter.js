import {createSlice} from '@reduxjs/toolkit';

const initialStateValue = 0;

const counterSlice = createSlice({
    name: "count",
    initialState: { count: initialStateValue },
    reducers: {
        decrease: (state, action) => {
          state.count -= 1;
        },
        increase: (state, action) => {
             state.count += 1;
        },
        increseBy33: (state, action) => {
            state.count += action.payload
        }
    }

})

export const {decrease, increase, increseBy33} = counterSlice.actions;

export default counterSlice.reducer