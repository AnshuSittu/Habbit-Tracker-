import { configureStore } from "@reduxjs/toolkit";
import habiesReducer from "./habit-slice";

export const store = configureStore({
    reducer: {
        habits:habiesReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;