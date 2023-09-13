import skySun from "../assets/icons/sky-sun.png"
const MiddleSection = () => {
  return (
    <div className="">
      <section className="max-w-xs flex flex-row flex-1 justify-between">
        <section className="basis-4/6">
            <img src={skySun} alt="sky-sun" className="sm:w-56 sm:h-56 w-36 h-36"/>
        </section>

        <section className="basis-2/6 font-montserrat text-slate-700 pl-3 mt-4 ">
            <h1 className="text-lg">text</h1>
            <p className="text-4xl sm:text-8xl mt-2">30</p>
            <h2 className="text-xs sm:text-lg font-bold">tungi</h2>
        </section>

      </section>
    </div>
  );
};

export default MiddleSection;
