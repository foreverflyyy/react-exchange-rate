import React from 'react';

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement>
{
    title: string;
    options: string[];
    currentOption: string;
    changeOption: (option: string) => void;
}

const MySelect = ({title, options, currentOption, changeOption}: Props) => {

    const classLine = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg " +
        "focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 " +
        "dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

    return (
        <select className={classLine}>
            <option disabled selected value={title}>{title}</option>
            {options?.map((option: string) =>
                <option id={option} value={option}>{option}</option>
            )}
        </select>
    );
};

export default MySelect;