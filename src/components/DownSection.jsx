import DailyInfo from "./DailyInfo";
import { dailyInfo } from "../constant";
import { useState } from "react";

const DownSection = ({timeInfo}) => {
 
  return (
    <div>
      <section className="sm:p-10 p-2 bg-white rounded-2xl border-slate-gray shadow-lg">
        <section className="">
          {/* {dailyInfo &&
            dailyInfo.map((info, index) => {
              return <DailyInfo key={index} {...info} value={sunriseTime}/>;
            })} */}

            {dailyInfo && <DailyInfo timeInfo={timeInfo}/>}
        </section>
      </section>
    </div>
  );
};

export default DownSection;
