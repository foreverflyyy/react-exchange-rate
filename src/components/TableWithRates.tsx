import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {selectDefaultRate} from "../store/features/defaultRateSlice";
import RateRow from "./RateRow";
import {Rate} from "../models/rate";
import {TypeRate} from "../models/enum/typeRate";
import MyModal from "./UI/MyModal";

const rows: Rate[] = [
    {
        name: TypeRate.USD,
        rate: 100
    },
    {
        name: TypeRate.EUR,
        rate: 200
    },
    {
        name: TypeRate.RUB,
        rate: 300
    },
    {
        name: TypeRate.AED,
        rate: 400
    },
]

const column = ["Rate", "Current Different"]

// https://apilayer.com/marketplace/exchangerates_data-api

const TableWithRates = () => {

    const [showModal, setShowModal] = useState(false);
    const {defaultRate} = useSelector(selectDefaultRate);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    {column?.map(column => (
                        <th key={column} scope="col" className="px-6 py-3">
                            {column}
                        </th>
                    ))}
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Show graph</span>
                    </th>
                </tr>
                </thead>
                <tbody>
                {rows?.map((row: any) =>
                    <RateRow key={row.name} rate={row} setShowModal={setShowModal}/>
                )}
                </tbody>
            </table>
            {showModal && (
                <MyModal
                    setShowModal={setShowModal}
                >
                    Modal
                </MyModal>
            )}
        </div>
    );
};

export default TableWithRates;