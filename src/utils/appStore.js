const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./cartSlice";
import bodyReducer from "./bodySlice";
import restaurantReducer from "./restaurantSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        body: bodyReducer,
        restaurant: restaurantReducer,
        // add many more reducers
    },
});

export default appStore;
