import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Response} from "../../models/response";
import {Converter} from "../../models/converter";

// по хорошему убрать в переменную окружения в .env
const ACCESS_KEY = "GUz7CdCROMduhDYkZzTAuIRRMYVytR9B";

export const ratesApi = createApi({
    reducerPath: "ratesApi",
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.apilayer.com/exchangerates_data/convert"
    }),
    endpoints: (builder) => ({
        getTransferRate: builder.query<number, Converter>({
            query: (converter: Converter) => {

                if(converter.numberFrom === "" || converter.numberTo === "0")
                    throw new Error("");

                return {
                    url: "",
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
        })
    })
})

export const {
    useGetTransferRateQuery,
} = ratesApi;