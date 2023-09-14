import Button from "./Button";
import locationIcon from "../assets/icons/location.svg";
import { useState } from "react";

const SearchCard = ({ onclick, onChangeHandle, searchData, location }) => {
  const {name, country}=location

  // const [newName, setNewName]=useState("")
  // const [newCountry, setNewCountry]=useState("")


  // if (name && country !== undefined){
  //   setNewName(name)
  //   setNewCountry(country)
  //   console.log("search card name", name);
  // } else {
  //   console.log("value undefined");
  //   setNewName("")
  //   setNewCountry("")
  // }

  // console.log("not undefined",newName);

  return (
    <div className="flex flex-col gap-3">
      <section className="max-w-xs flex flex-row justify-between bg-none border border-slate-gray rounded-full p-1">
        <input
          type="text"
          placeholder="Enter a location"
          onChange={onChangeHandle}
          value={searchData}
          className="text-center outline-none p-1 flex-1 rounded-full text-slate-gray px-5"
        />
        <section className="rounded-full focus:outline-none">
          <Button label={"Search"} hover={`hover:bg-black`} onclick={onclick} />
        </section>
      </section>

      <section className="flex justify-start items-center px-4 gap-3">
        <img src={locationIcon} alt="" className="small-icon-size mt-1" />

        {/* <p>{data}</p> */}
       {(name && country)!== undefined? <p>{name +" "+","+" "+ country}</p>:<p>{""}</p>}
      </section>
    </div>
  );
};

export default SearchCard;
