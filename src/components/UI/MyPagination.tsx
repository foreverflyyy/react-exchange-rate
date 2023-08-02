import React from 'react';

const numbers = [1, 2]
const currentPage = 1;

interface Props {
    numbers: number[];
    currentPage: number;
    setCurrentPage: (num: number) => void;
}

const MyPagination = ({numbers, currentPage, setCurrentPage}: Props) => {

    const lineClassDefault = "cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white relative block " +
        "rounded bg-transparent px-5 py-3 text-lg text-neutral-500 transition-all duration-300 dark:text-neutral-400";
    const lineClassActive = "cursor-pointer bg-neutral-100 dark:bg-neutral-700 dark:text-white relative block rounded " +
        "px-5 py-3 text-lg text-white hover:text-neutral-500 transition-all duration-300 dark:hover:text-neutral-400";

    const handlerIncrement = () => {
        if(currentPage !== numbers[numbers.length - 1])
            setCurrentPage(currentPage + 1);
    }

    const handlerDecrement = () => {
        if(currentPage !== 1)
            setCurrentPage(currentPage - 1);
    }

    return (
        <nav aria-label="Page navigation example" className={"w-full flex justify-center py-5 pr-10"}>
            <ul className="list-style-none flex">
                <li
                    onClick={handlerDecrement}
                    className={`mr-3 ${lineClassDefault}`}
                >
                    Previous
                </li>

                {numbers.map((number) => (
                    <li
                        key={number}
                        className={`ml-1 ${currentPage === number ? lineClassActive : lineClassDefault}`}
                        onClick={() => setCurrentPage(number)}
                        aria-current="page"
                    >
                        {number}
                    </li>
                ))}

                <li
                    onClick={handlerIncrement}
                    className={`ml-3 ${lineClassDefault}`}
                >
                    Next
                </li>
            </ul>
        </nav>
    );
};

export default MyPagination;