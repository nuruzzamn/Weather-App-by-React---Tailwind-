import SearchCard from "./SearchCard";

import { useState } from "react";

const Search = ({ onFetchDataChanged, onErrorMessageChanged, location }) => {
  const [searchData, setSearchData] = useState("");

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
          onFetchDataChanged(data);
        })
        .catch((error) => {
          onErrorMessageChanged(error);
        });
    } else {
      console.log("enter a location name");
    }
  };

  const searchClickHandle = () => {
    setSearchData("");

    apiDataHandle();
  };

  return (
    <div>
      <SearchCard
        onclick={searchClickHandle}
        onChangeHandle={onChangeHandle}
        searchData={searchData}
        location={location}
      />
    </div>
  );
};

export default Search;
