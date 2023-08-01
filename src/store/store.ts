import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {ratesApi} from "./services/ratesApi";
import rateSlice from "./features/rateSlice";

const rootReducers = combineReducers({
    rate: rateSlice,
    [ratesApi.reducerPath]: ratesApi.reducer
});

export const store = configureStore({
    reducer: rootReducers,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({}).concat([ratesApi.middleware])
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;