import React from "react";
import skySun from "../assets/icons/sky-sun.png"
const MiddleSection = () => {
  return (
    <div className="">
      <section className="max-w-xs flex flex-row justify-between">
        <section className="basis-6/12">
            <img src={skySun} alt="sky-sun" width={250} height={250}/>
        </section>

        <section className="basis-6/12 font-montserrat text-slate-700 pl-3 mt-2">
            <h1 className="text-lg">text</h1>
            <p className="text-8xl mt-2">30</p>
            <h2 className="text-lg font-bold">tungi</h2>
        </section>

      </section>
    </div>
  );
};

export default MiddleSection;
