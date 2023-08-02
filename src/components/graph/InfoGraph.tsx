import React, {useMemo} from 'react';
import {ResponseInfoRate} from "../../models/dto/responseTimeseries";
import {TypeRate} from "../../models/enum/typeRate";

interface DynamicRate {
    data: string,
    value: number
}

interface Props {
    rates: ResponseInfoRate
}

const InfoGraph = ({rates}: Props) => {

    const rowsChanges = useMemo(() => {
        const keys = Object.keys(rates);

        return keys?.map((_, i) => {
            const valueNum = Object.entries(rates[_])[0][1];
            return {
                data: _,
                value: Math.ceil(valueNum * 10000) / 10000
            } as DynamicRate
        })
    }, []);

    return (
        <>
            <p className="text-xl pb-2 font-semibold leading-relaxed text-gray-500">
                Динамика изменение цены:
            </p>
            <ol className="border-l border-neutral-300 dark:border-neutral-500">
                {rowsChanges.map((row) => (
                    <li key={row.data}>
                        <div className="flex-start flex items-center pt-3">
                            <div
                                className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                            <p className="text-sm text-black dark:text-neutral-600">
                                {row.data} - {row.value}
                            </p>
                        </div>
                    </li>
                ))}
            </ol>
        </>
    );
};

export default InfoGraph;