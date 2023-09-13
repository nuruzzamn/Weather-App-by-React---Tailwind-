import SearchCard from "./SearchCard";
import { useState, useEffect } from "react";
import useFetch from "../hook/useFetch";

const Search = () => {
  const [searchData, setSearchData] = useState("");
  const [newData, setNewData] = useState("");

  const api =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    searchData +
    "&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric";

  const onChangeHandle = (e) => {
    setSearchData(e.target.value);
  };

  const searchClickHandle = () => {
    setSearchData("");
    setNewData(searchData);

    if(searchData){
      fetch(api)
      .then((res) => {

        console.log(res)

        if (!res.ok) {
          throw ('Finding error');
        } else {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    }

  };

  return (
    <div>
      <SearchCard
        onclick={searchClickHandle}
        onChangeHandle={onChangeHandle}
        searchData={searchData}
      />
    </div>
  );
};

export default Search;
