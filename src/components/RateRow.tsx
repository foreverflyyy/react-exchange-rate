import React, {ReactNode, useState} from 'react';
import {Rate} from "../models/rate";

interface Props {
    rate: Rate,
    setShowModal: (val: boolean) => void,
}

const RateRow = ({rate, setShowModal}: Props) => {

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 duration-300">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {rate.name}
            </th>
            <td className="px-6 py-4">
                {rate.value}
            </td>
            <td className="px-6 py-4 text-right">
                <a
                    href="#"
                    onClick={() => setShowModal(true)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline duration-300"
                >
                    Show graph
                </a>
            </td>
        </tr>
    );
};

export default RateRow;