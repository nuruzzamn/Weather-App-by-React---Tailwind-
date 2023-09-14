import SearchCard from "./SearchCard";
import { useState, useEffect } from "react";

const Search = () => {
  const [searchData, setSearchData] = useState("");

  const [fetchData, setFetchData] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const api =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    searchData +
    "&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric";

  const onChangeHandle = (e) => {
    setSearchData(e.target.value);
  };

  const apiDataHandle = () => {
    if (searchData) {
      fetch(api)
        .then((res) => {
          if (!res.ok) {
            throw "Finding error!! Enter a valid location";
          } else {
            return res.json();
          }
        })
        .then((data) => {
          setFetchData(data);
        })
        .catch((error) => {
          setErrorMessage(error);
        });
    } else {
      console.log("enter a location name");
    }
  };

  const searchClickHandle = () => {
    setSearchData("");

    apiDataHandle();
  };

  fetchData && console.log("fetch data", fetchData);
  errorMessage && console.log(errorMessage);

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
