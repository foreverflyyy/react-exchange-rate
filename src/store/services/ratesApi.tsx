import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Route} from "../../models/route";
import {Response} from "../../models/response";

// по хорошему убрать в переменную окружения в .env
const ACCESS_KEY = "c8c61e4fa9463f48be1811d476deaaa1";

export const ratesApi = createApi({
    reducerPath: "ratesApi",
    refetchOnFocus: true,
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.exchangeratesapi.io/v1/latest"
    }),
    endpoints: (builder) => ({
        getRates: builder.query<Response, null>({
            query: () => {
                return {
                    url: "posts",
                    params: {
                        _limit: "",
                        _page: ""
                    }
                }
            }
        }),
        getRate: builder.query<Route[], {limit: number, page: number}>({
            query: ({limit, page}) => {
                return {
                    url: "posts",
                    params: {
                        _limit: limit,
                        _page: page
                    }
                }
            }
        }),
    })
})

export const {
    useGetRatesQuery,
} = ratesApi;