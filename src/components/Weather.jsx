import Search from "./Search";
import MiddleSection from "./MiddleSection";
import DownSection from "./DownSection";

const Weather = () => {
  return (
    <div className="max-container relative">
      <section className="padding">
        <Search />
      </section>

      <section className="padding">
        <MiddleSection />
      </section>
 
      <section className="padding">
        <DownSection />
      </section>
    </div>
  );
};

export default Weather;
