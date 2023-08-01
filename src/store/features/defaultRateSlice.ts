import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {TypeRate} from "../../models/enum/typeRate";
import {RootState} from "../store";

interface DefaultRate {
    defaultRate: TypeRate
}

const initialState: DefaultRate = {
    defaultRate: TypeRate.USD
}

const defaultRateSlice = createSlice({
    name: 'rateSlice',
    initialState,
    reducers: {
        setDefaultRate(state, action: PayloadAction<TypeRate>) {
            state.defaultRate = action.payload;
        }
    }
})

export default defaultRateSlice.reducer

export const {
    setDefaultRate,
} = defaultRateSlice.actions;

export const selectDefaultRate = (state: RootState) => state.defaultRate;