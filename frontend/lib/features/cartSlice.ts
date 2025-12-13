import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "CartSlice",
    initialState: {
        count: 0,
        items: []
    },
    reducers: {
        addItem: (state) => 
        {
            state.count++;
        },
        deleteItem: (state) =>
        {
            state.count--;
        }
    }

})

export const {addItem, deleteItem} = CartSlice.actions
export default CartSlice.reducer;