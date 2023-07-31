import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {ratesApi} from "./services/ratesApi";

const rootReducers = combineReducers({
    [ratesApi.reducerPath]: ratesApi.reducer
});

export const store = configureStore({
    reducer: rootReducers,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({}).concat([ratesApi.middleware])
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;