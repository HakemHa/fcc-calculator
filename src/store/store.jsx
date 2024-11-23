import { configureStore } from "@reduxjs/toolkit";
import calcReducer from "./slice";

const store = configureStore({
    reducer: { get: calcReducer },
});

export default store;