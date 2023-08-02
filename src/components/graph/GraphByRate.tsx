import React, {useMemo, useState} from 'react';
import {Rate} from "../../models/rate";
import MyButton from "../UI/MyButton";
import {useGetInfoDynamicRateQuery} from "../../store/services/ratesApi";
import {DifferentTime} from "../../models/differentTime";
import {useSelector} from "react-redux";
import {selectDefaultRate} from "../../store/features/defaultRateSlice";
import MyLoading from "../UI/MyLoading";
import InfoGraph from "./InfoGraph";

interface Props {
    rate: Rate,
    setShowModal: (val: boolean) => void,
}

const GraphByRate = ({setShowModal, rate}: Props) => {

    const [differentInDate, setDifferentInDate] = useState<DifferentTime>({
        startDate: "2023-07-01",
        endDate: new Date().toISOString().split('T')[0]
    });

    const {defaultRate} = useSelector(selectDefaultRate)

    const {
        data: infoRate,
        isLoading,
        error
    } = useGetInfoDynamicRateQuery({
        base: defaultRate,
        startDate: differentInDate.startDate,
        endDate: differentInDate.endDate,
        symbol: rate.name
    })

    return (
        <div className={"w-full flex flex-col px-5"}>
            <div className={"w-full flex justify-between items-center"}>
                <div  className={"flex items-center space-x-2"}>
                    <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM13.75 10C13.75 10.4142 14.0858 10.75 14.5 10.75H15.1893L13.1768 12.7626C13.0791 12.8602 12.9209 12.8602 12.8232 12.7626L11.2374 11.1768C10.554 10.4934 9.44598 10.4934 8.76256 11.1768L6.46967 13.4697C6.17678 13.7626 6.17678 14.2374 6.46967 14.5303C6.76256 14.8232 7.23744 14.8232 7.53033 14.5303L9.82322 12.2374C9.92085 12.1398 10.0791 12.1398 10.1768 12.2374L11.7626 13.8232C12.446 14.5066 13.554 14.5066 14.2374 13.8232L16.25 11.8107V12.5C16.25 12.9142 16.5858 13.25 17 13.25C17.4142 13.25 17.75 12.9142 17.75 12.5V10C17.75 9.58579 17.4142 9.25 17 9.25H14.5C14.0858 9.25 13.75 9.58579 13.75 10Z" fill="#1C274C"/>
                    </svg>
                    <h4 className="text-lg font-medium text-gray-800">
                        Graph {rate.name}
                    </h4>
                </div>
                <MyButton onClick={() => setShowModal(false)}>X</MyButton>
            </div>
            <div className="my-2 text-center">
                {isLoading
                    ? <MyLoading/>
                    : infoRate
                        ? <InfoGraph rates={infoRate}/>
                        : <div className={"text-xl font-bold"}>Not info</div>
                }
            </div>
        </div>
    );
};

export default GraphByRate;