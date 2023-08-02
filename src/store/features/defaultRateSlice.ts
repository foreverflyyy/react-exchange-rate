import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {TypeRate} from "../../models/enum/typeRate";
import {RootState} from "../store";
import {ratesApi} from "../services/ratesApi";
import {RateResponse} from "../../models/rate";

interface DefaultRate {
    defaultRate: TypeRate,
    listRates: RateResponse[]
}

const initialState: DefaultRate = {
    defaultRate: TypeRate.USD,
    listRates: []
}

const defaultRateSlice = createSlice({
    name: 'rateSlice',
    initialState,
    reducers: {
        setDefaultRate(state, action: PayloadAction<TypeRate>) {
            state.defaultRate = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(ratesApi.endpoints?.getAllRatesByValue.matchFulfilled, (state, {payload}) => {
                state.listRates = payload;
            }
        )
    }
})

export default defaultRateSlice.reducer

export const {
    setDefaultRate,
} = defaultRateSlice.actions;

export const selectDefaultRate = (state: RootState) => state.defaultRate;