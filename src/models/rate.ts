import {TypeRate} from "./enum/typeRate";

export interface Rate {
    name: TypeRate,
    value: number
}

export interface RateResponse {
    TypeRate: number
}