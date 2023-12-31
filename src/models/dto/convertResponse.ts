import {TypeRate} from "../enum/typeRate";

export interface ConvertResponse {
    success: boolean,
    query: {
        from: TypeRate,
        to: TypeRate,
        amount: number
    },
    info: {
        timestamp: number,
        rate: number
    },
    date: string,
    result: number
}