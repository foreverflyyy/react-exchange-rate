import {TypeRate} from "./enum/typeRate";

export interface Response {
    success: boolean,
    timestamp: number,
    base: string,
    date: string,
    rates: TypeRate,
    error?: {
        code: number,
        info: string
    }
}