import {RateResponse} from "../rate";

export default interface ResponseTimeseries {
    base: string,
    end_date: string,
    rates: ResponseInfoRate,
    start_date: string,
    success: boolean,
    timeseries: boolean
}

export interface ResponseInfoRate {
    [key: string]: RateResponse
}