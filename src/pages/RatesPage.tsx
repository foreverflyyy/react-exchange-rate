import React from "react";
import {Link} from "react-router-dom";

const RatesPage = () => {

   return (
       <>
           <div className={"container mx-auto flex flex-col"}>
               RatesPage
           </div>
           <Link
               to={"/"}
               className={"text-xl text-blue-500"}
           >
               Go to Converter
           </Link>
       </>
   );
};

export default RatesPage;