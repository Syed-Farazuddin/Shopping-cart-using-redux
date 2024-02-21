// Creating a store

import { configureStore, createReducer } from "@reduxjs/toolkit";
import CartReducer from "./slices/cart-slice";

const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

export default store;
