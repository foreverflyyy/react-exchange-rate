import {TypeRate} from "./enum/typeRate";

export interface RequestGetRates {
    baseRate: TypeRate,
    symbols: string
}