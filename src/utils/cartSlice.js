import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        itemQuantities: {},
    },
    reducers: {
        addItem: (state, action) => {
            const key = action.payload.id;
            if (Object.keys(state.itemQuantities).includes(key)) {
                state.itemQuantities[key] += 1;
            } else {
                state.itemQuantities[key] = 1;
                state.items.push(action.payload);
            }
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter((each) => each.id !== itemId);
            delete state.itemQuantities[itemId]; // Also remove from itemQuantities
        },
        updateQuantity: (state, action) => {
            const itemId = action.payload.id;
            const ope = action.payload.ope;
            if (ope === "+") {
                state.itemQuantities[itemId] += 1;
            } else {
                state.itemQuantities[itemId] > 1 &&
                    (state.itemQuantities[itemId] -= 1);
            }
        },

        clearCart: (state) => {
            state.items.length = 0;
        },
    },
});

export const { addItem, removeItem, clearCart, updateQuantity } =
    cartSlice.actions;
export default cartSlice.reducer;
