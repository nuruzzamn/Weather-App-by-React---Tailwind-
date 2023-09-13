import SearchCard from "./SearchCard";
import { useState } from "react";

const Search = () => {
  const [searchData, setSearchData] = useState("");

  const onChangeHandle = (e) => {
    setSearchData(e.target.value);
  };

  const searchHandle = () => {
    alert(searchData);
  };

  return (
    <div>
      <SearchCard onclick={searchHandle} onChangeHandle={onChangeHandle} />
    </div>
  );
};

export default Search;
