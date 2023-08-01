import React from "react";
import {Link} from "react-router-dom";
import MyButton from "../components/UI/MyButton";
import TableWithRates from "../components/TableWithRates";
import MySelect from "../components/UI/MySelect";
import {useDispatch, useSelector} from "react-redux";
import {options} from "../data/options";
import {selectDefaultRate, setDefaultRate} from "../store/features/defaultRateSlice";
import {TypeRate} from "../models/enum/typeRate";

const RatesPage = () => {

    const {defaultRate} = useSelector(selectDefaultRate);
    const dispatch = useDispatch();

    return (
       <div className={"h-full flex flex-col justify-center items-center"}>
           <div className={"absolute left-2 top-2"}>
               <MyButton>
                   <Link
                       to={"/"}
                   >
                       Go to Converter
                   </Link>
               </MyButton>
           </div>
           <div className={"absolute right-2 top-2 flex flex-row items-center justify-start space-x-3 pl-2"}>
               <h2 className={"text-xl font-semibold"}>Default:</h2>
               <MySelect
                   title={"Default rate"}
                   options={options}
                   currentOption={defaultRate}
                   changeOption={(value: string) => dispatch(setDefaultRate(value as TypeRate))}
               />
           </div>
           <h2 className={"pt-16 pb-3 text-4xl text-gray-700 font-semibold"}>
               Table with Rates
           </h2>
           <TableWithRates/>
       </div>
    );
};

export default RatesPage;