import React, {useEffect, useState} from 'react';
import MySelect from "./UI/MySelect";
import MyInput from "./UI/MyInput";
import useDebounce from "../hooks/useDebounce";
import {TypeRate} from "../models/enum/typeRate";
import {useDispatch, useSelector} from "react-redux";
import {selectValuesConverter, setNumberFrom, setNumberTo, setRateFrom, setRateTo} from "../store/features/rateSlice";

const options = Object.values(TypeRate);

const FormConverter = () => {

    const {
        numberFrom,
        numberTo,
        rateFrom,
        rateTo
    } = useSelector(selectValuesConverter);

    const [inputNumberFrom, setInputNumberFrom] = useState(numberFrom);
    const debounce = useDebounce(inputNumberFrom);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNumberFrom(debounce));

        if(debounce === "0" || debounce === "")
            dispatch(setNumberTo(debounce));
    }, [debounce]);

    return (
        <div className={"pt-5 flex items-center"}>
            <div>
                <MySelect
                    title={"From"}
                    options={options}
                    currentOption={rateFrom}
                    changeOption={(value: string) => dispatch(setRateFrom(value as TypeRate))}
                />
                <MyInput
                    value={inputNumberFrom}
                    type={"number"}
                    onChange={e => setInputNumberFrom(e.target.value)}
                    placeholder={"Enter from"}
                />
            </div>
            <img src={"https://i.ibb.co/Ptvdgpp/free-icon-equal-565686.png"} className={"ml-4 h-[50px] w-[50px]"}/>
            <div className={"pl-5"}>
                <MySelect
                    title={"To"}
                    options={options}
                    currentOption={rateTo}
                    changeOption={(value: string) => dispatch(setRateTo(value as TypeRate))}
                />
                <MyInput
                    disabled
                    type={"number"}
                    value={numberTo}
                    placeholder={"Result"}
                />
            </div>
        </div>
    );
};

export default FormConverter;