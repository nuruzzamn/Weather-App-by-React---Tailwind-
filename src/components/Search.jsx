import React from "react";
import Button from "./Button";

const Search = () => {
  return (
    <div>
      <section className="max-w-xs flex justify-start items-center gap-5 p-2 border border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="Enter a location"
          className="text-center relative px-6 bg-white outline-none"
        />
        <section className=" items-center flex absolute ml-[215px]">
          <Button label={"Sign up"} hover={`hover:bg-black`} />
        </section>
      </section>
    </div>
  );
};

export default Search;
