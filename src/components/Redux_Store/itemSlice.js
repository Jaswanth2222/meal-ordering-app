import { createSlice } from "@reduxjs/toolkit";
const itemSlice = createSlice({
    name: 'meal',
    initialState: {
        item: '',
    },
    reducers: {
        addItem: (state, action) => {
            state.item = action.payload
        }
    }
});

export const { addItem } = itemSlice.actions;
export default itemSlice.reducer;