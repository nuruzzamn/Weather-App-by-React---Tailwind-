import DailyInfo from "./DailyInfo";
import { dailyInfo } from "../constant";

const DownSection = () => {
  return (
    <div>
      <section className="sm:p-10 p-2 bg-white rounded-2xl border-slate-gray shadow-lg">
        <section className="flex flex-1 bg-white gap-5 sm:gap-16 justify-evenly">
          {dailyInfo &&
            dailyInfo.map((info, index) => {
              return <DailyInfo key={index} {...info} />;
            })}
        </section>
      </section>
    </div>
  );
};

export default DownSection;
