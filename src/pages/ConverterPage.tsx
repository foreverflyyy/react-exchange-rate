import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../components/UI/MyButton";
import FormConverter from "../components/FormConverter";
import MyLoading from "../components/UI/MyLoading";
import {useSelector} from "react-redux";
import {selectValuesConverter} from "../store/features/rateSlice";
import {useGetTransferRateQuery} from "../store/services/ratesApi";

const ConverterPage = () => {

    const converterValues = useSelector(selectValuesConverter);

    const {
        data: result,
        isLoading,
        error
    } = useGetTransferRateQuery(
        converterValues,
        {skip: converterValues.numberFrom === "" || converterValues.numberFrom === "0"}
    );

    return (
        <div className={"h-full flex flex-col justify-center items-center"}>
            <div className={"absolute left-2 top-2"}>
                <MyButton>
                    <Link
                        to={"/rates"}
                    >
                        Go to rates
                    </Link>
                </MyButton>
            </div>
            <h2 className={"py-3 text-4xl text-gray-700 font-semibold"}>
                Converter
            </h2>
            <FormConverter/>
            {isLoading && <MyLoading/>}
            {error && <h2 className={"pt-3 text-xl text-red-500"}>Invalid number</h2>}
        </div>
    );
};

export default ConverterPage;

const ACCESS_KEY = "GUz7CdCROMduhDYkZzTAuIRRMYVytR9B";