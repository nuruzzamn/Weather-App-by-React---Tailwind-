import DailyInfo from "./DailyInfo";
import { dailyInfo } from "../constant";

const DownSection = ({ timeInfo }) => {
  return (
    <div>
      <section className="sm:p-10 p-2 bg-white rounded-2xl border-slate-gray shadow-lg">
        <section className="">
          {dailyInfo && <DailyInfo timeInfo={timeInfo} />}
        </section>
      </section>
    </div>
  );
};

export default DownSection;
