import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { redusers } from "./redusers/index";

const rootReducer = combineReducers(redusers);

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
