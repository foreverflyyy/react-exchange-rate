import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{

}

const MyInput = ({...props}: Props) => {
    return (
        <input
            {...props}
            className={"p-2 rounded-md border-2 border-blue-600 focus:outline-none focus:border-sky-500 focus:ring-sky-500"}
        />
    );
};

export default MyInput;