import Search from "./Search";
import MiddleSection from "./MiddleSection";
import DownSection from "./DownSection";
import DataRow from "./DataRow";

const Weather = () => {
  return (
    <div className="max-w-3xl relative m-auto flex flex-1 justify-center flex-col">
      <section className="padding-x padding-b pt-10 bg-red-100 flex flex-1 justify-center">
        <Search />
      </section>

      <section className="padding bg-green-100 flex flex-1 justify-center">
        <MiddleSection />
      </section>

      <section className="flex flex-1 justify-center">
        <DataRow />
      </section>
 
      <section className="padding bg-cyan-100 flex flex-1 justify-center">
        <DownSection />
      </section>
    </div>
  );
};

export default Weather;
