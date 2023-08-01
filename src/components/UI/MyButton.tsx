import React, {ReactNode} from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode
}

const MyButton = ({children, ...props}: Props) => {
    return (
        <button
            {...props}
            className={"text-[18px] border-2 rounded-md py-2 px-4 border-blue-500 hover:bg-gray-700 hover:border-gray-700 hover:text-white duration-300"}
        >
            {children}
        </button>
    );
};

export default MyButton;