import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {ratesApi} from "./services/ratesApi";
import convertRateSlice from "./features/convertRateSlice";
import defaultRateSlice from "./features/defaultRateSlice";

const rootReducers = combineReducers({
    defaultRate: defaultRateSlice,
    convertRate: convertRateSlice,
    [ratesApi.reducerPath]: ratesApi.reducer
});

export const store = configureStore({
    reducer: rootReducers,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({}).concat([ratesApi.middleware])
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;