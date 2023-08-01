import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {Converter} from "../../models/converter";
import {TypeRate} from "../../models/enum/typeRate";
import {RootState} from "../store";
import {ratesApi} from "../services/ratesApi";
import {Response} from "../../models/response";

const initialState: Converter = {
    numberFrom: "",
    numberTo: "",
    rateFrom: TypeRate.USD,
    rateTo: TypeRate.RUB,
}

const rateSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setNumberFrom(state, action: PayloadAction<string>) {
            state.numberFrom = action.payload;
        },
        setNumberTo(state, action: PayloadAction<string>) {
            state.numberTo = action.payload;
        },
        setRateFrom(state, action: PayloadAction<TypeRate>) {
            state.rateFrom = action.payload;
        },
        setRateTo(state, action: PayloadAction<TypeRate>) {
            state.rateTo = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(ratesApi.endpoints?.getTransferRate.matchFulfilled, (state, {payload}) => {
                state.numberTo = payload.toString();
            }
        )
    }
})


export default rateSlice.reducer

export const {
    setNumberFrom,
    setNumberTo,
    setRateFrom,
    setRateTo
} = rateSlice.actions;

export const selectValuesConverter = (state: RootState) => state.rate;