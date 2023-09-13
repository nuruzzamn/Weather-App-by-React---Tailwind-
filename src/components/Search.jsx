import SearchCard from "./SearchCard";
import { useState, useEffect } from "react";

const Search = () => {
  const [searchData, setSearchData] = useState("");
  const [apiData, setApiData] = useState("");

  const api = "https://api.openweathermap.org/data/2.5/weather?q="+searchData+"&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric"

  const onChangeHandle = (e) => {
    setSearchData(e.target.value);
  };

  const searchClickHandle = () => {
    setSearchData("")
    console.log(api);
  };


  return (
    <div>
      <SearchCard onclick={searchClickHandle} onChangeHandle={onChangeHandle} searchData={searchData} />
    </div>
  );
};

export default Search;
