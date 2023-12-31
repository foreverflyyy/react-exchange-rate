import React, {useMemo, useState} from 'react';
import {TypeRate} from "../../models/enum/typeRate";
import {TypeSort} from "../../models/enum/typeSort";
import {options} from "../../data/options";
import {useGetAllRatesByValueQuery} from "../../store/services/ratesApi";
import MyLoading from "../UI/MyLoading";
import RateRowsList from "./RateRowsList";
import MyPagination from "../UI/MyPagination";

const column = [
    {nameColumn: "Rate", value: TypeSort.NAME},
    {nameColumn: "Current Value", value: TypeSort.VALUE}
]

const TableWithRates = ({defaultRate}: {defaultRate: TypeRate}) => {

    const [currentTypeSort, setCurrentTypeSort] = useState<TypeSort>(TypeSort.DEFAULT);
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(10);

    const lineRates = useMemo(() => {
        return options
            .filter(option => option !== defaultRate)
            .slice(currentPage * limit - limit, currentPage * limit)
            .join(",");
    }, [defaultRate, currentPage]);

    const {
        data: rates = [],
        isLoading,
        error
    } = useGetAllRatesByValueQuery({baseRate: defaultRate, symbols: lineRates});

    if(isLoading)
        return <MyLoading/>

    if(error)
        return <h2 className={"pt-3 text-xl text-red-500"}>Invalid request</h2>

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    {column?.map(column => (
                        <th
                            key={column.value}
                            onClick={() => setCurrentTypeSort(column.value)}
                            scope="col"
                            className="px-6 py-3">
                            <div className={"hover:text-white duration-300 cursor-pointer"}>{column.nameColumn}</div>
                        </th>
                    ))}
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Show graph</span>
                    </th>
                </tr>
                </thead>
                <tbody>
                    <RateRowsList
                        rates={rates}
                        currentTypeSort={currentTypeSort}
                    />
                </tbody>
            </table>

            <MyPagination
                numbers={[1, 2]}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default TableWithRates;

// https://apilayer.com/marketplace/exchangerates_data-api