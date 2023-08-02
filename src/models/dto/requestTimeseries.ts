import {TypeRate} from "../enum/typeRate";
import {DifferentTime} from "../differentTime";

export default interface RequestTimeseries extends DifferentTime{
    base: TypeRate,
    symbol: TypeRate
}