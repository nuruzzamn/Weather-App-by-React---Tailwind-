import React from "react";
import Button from "./Button";

const Search = () => {
  return (
    <div>
      <section className="max-w-xs flex flex-row justify-between border border-slate-gray rounded-full p-1">
        <input
          type="text"
          placeholder="Enter a location"
          className="text-center outline-none p-1 flex-1 rounded-full text-slate-gray px-5"
        />
        <section className="">
          <Button label={"Search"} hover={`hover:bg-black`} />
        </section>
      </section>
    </div>
  );
};

export default Search;
