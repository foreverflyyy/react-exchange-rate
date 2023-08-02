import {useMemo} from 'react'
import {TypeSort} from "../models/enum/typeSort";
import {Rate} from "../models/rate";

export const useSortedRates = (rates: Rate[], sort: TypeSort) => {
    return useMemo(() => {
        switch(sort) {
            case TypeSort.NAME: {
                return [...rates].sort(({name: a}, {name: b}) =>
                    a.localeCompare(b));
            }
            case TypeSort.VALUE: {
                return [...rates].sort(({value: a}, {value: b}) => a - b);
            }
            default: {
                return [...rates];
            }
        }
    }, [rates, sort]);
}