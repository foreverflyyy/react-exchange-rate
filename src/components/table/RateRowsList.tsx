import React, {useMemo} from 'react';
import RateRow from "./RateRow";
import {Rate, RateResponse} from "../../models/rate";
import {useSortedRates} from "../../hooks/useSortedRates";
import {TypeSort} from "../../models/enum/typeSort";

interface Props {
    rates: RateResponse[],
    currentTypeSort: TypeSort,
}

const RateRowsList = ({rates, currentTypeSort}: Props) => {

    const needRates = useMemo(() => {
        const keys = Object.keys(rates);
        const values = Object.values(rates);

        return keys?.map((_, i) => {
            return {
                name: keys[i],
                value: Math.ceil(Number(values[i]) * 100) / 100,
            } as Rate
        })
    }, [rates, currentTypeSort]);

    const sortedRates = useSortedRates(needRates, currentTypeSort);

    return (
        <>
            {sortedRates?.map((rate) => {
                return <RateRow
                    key={rate.name}
                    rate={rate}
                />
            })}
        </>
    );
};

export default RateRowsList;