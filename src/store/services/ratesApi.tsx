import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Response} from "../../models/response";
import {Converter} from "../../models/converter";
import {RequestGetRates} from "../../models/requestGetRates";
import {RateResponse} from "../../models/rate";

// В реальном проекте необходимо убрать в переменную окружения .env
const ACCESS_KEY = "GUz7CdCROMduhDYkZzTAuIRRMYVytR9B";

export const ratesApi = createApi({
    reducerPath: "ratesApi",
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.apilayer.com/exchangerates_data"
    }),
    endpoints: (builder) => ({
        getTransferRate: builder.query<number, Converter>({
            query: (converter: Converter) => {

                if(converter.numberFrom === "" || converter.numberTo === "0")
                    throw new Error("");

                return {
                    url: "/convert",
                    params: {
                        from: converter.rateFrom,
                        to: converter.rateTo,
                        amount: converter.numberFrom
                    },
                    headers: {
                        "apikey": ACCESS_KEY
                    }
                }
            },
            transformResponse: (response: Response) => response.result,
            transformErrorResponse: (error: any) => error.data,
        }),
        getAllRatesByValue: builder.query<RateResponse[], RequestGetRates>({
            query: (values: RequestGetRates) => {
                return {
                    url: "/latest",
                    params: {
                        base: values.baseRate,
                        symbols: values.symbols
                    },
                    headers: {
                        "apikey": ACCESS_KEY
                    }
                }
            },
            transformResponse: (data: any) => data.rates,
            transformErrorResponse: (error: any) => error.data,
        })
    })
})

export const {
    useGetTransferRateQuery,
    useGetAllRatesByValueQuery
} = ratesApi;