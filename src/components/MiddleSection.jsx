import skySun from "../assets/icons/sky-sun.png";
const MiddleSection = ({ middleData }) => {
  const { des, dataTemp, name } = middleData;

  return (
    <div className="">
      <section className="max-w-xs flex flex-row flex-1 justify-between">
        <section className="basis-4/6">
          <img
            src={skySun}
            alt="sky-sun"
            className="sm:w-56 sm:h-56 w-36 h-36"
          />
        </section>

        <section className="basis-2/6 font-montserrat text-slate-700 pl-3 mt-4 ">
          {dataTemp && (
            <section className="flex justify-start">
              <p className="z-10 bg-transparent">{des}</p>
              <section className="flex flex-row ml-[-40px] mt-4 bg-transparent">
                <p className="text-4xl sm:text-8xl mt-2">
                  {Math.round(dataTemp)}
                </p>

                <p className="lg:font-bold lg:text-3xl font-semibold text-xl mt-2 ml-1">
                  0
                </p>
              </section>
            </section>
          )}

          <h2 className="text-xs sm:text-lg font-bold">{name}</h2>
        </section>
      </section>
    </div>
  );
};

export default MiddleSection;
