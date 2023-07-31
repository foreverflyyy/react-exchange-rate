import React, {useState} from 'react';
import {Link} from "react-router-dom";
import MyInput from "../components/UI/MyInput";
import MySelect from "../components/UI/MySelect";
import {TypeRate} from "../models/enum/typeRate";

const options: string[] = [
    TypeRate.AUD,
    TypeRate.CAD,
    TypeRate.CHF,
    TypeRate.CNY,
    TypeRate.JPY,
    TypeRate.USD,
]

const ConverterPage = () => {

    const [currentRate, setCurrentRate] = useState<string>(TypeRate.USD);

    return (
        <div className={"h-full flex flex-col justify-center items-center"}>
            <div>
                <h2 className={"flex justify-center items-center"}>
                    ConverterPage
                </h2>
                <Link
                    to={"/rates"}
                    className={"text-xl text-blue-500"}
                >
                    Go to rates
                </Link>
            </div>
            <div className={"pt-10"}>
                <MyInput
                    placeholder={"Enter number"}
                />
                <MySelect
                    title={"Валюта"}
                    options={options}
                    currentOption={currentRate}
                    changeOption={(value: string) => setCurrentRate(value)}
                />
            </div>
        </div>
    );
};

export default ConverterPage;