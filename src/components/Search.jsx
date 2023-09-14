import SearchCard from "./SearchCard";
import Weather from "./Weather";
import { useState, useEffect } from "react";

const Search = ({ onFetchDataChanged, onErrorMessageChanged, data }) => {
  const [searchData, setSearchData] = useState("");

  const [inputData, setInputData] = useState(null);

  // const [fetchData, setFetchData] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");

  const api =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    inputData +
    "&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric";

  useEffect(() => {
    setInputData(searchData);
  }, [searchData]);

  inputData && console.log("search", inputData);

  // (fetchData && onFetchDataChanged(fetchData));
  // (errorMessage && onErrorMessageChanged(errorMessage));

  const onChangeHandle = (e) => {
    setSearchData(e.target.value);
  };

  const apiDataHandle = () => {
    if (inputData) {
      fetch(api)
        .then((res) => {
          if (!res.ok) {
            throw "Finding error!! Enter a valid location";
          } else {
            return res.json();
          }
        })
        .then((data) => {
          // setFetchData(data);
          onFetchDataChanged(data);
        })
        .catch((error) => {
          // setErrorMessage(error);
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

  // fetchData && console.log("fetch data", fetchData);
  // errorMessage && console.log(errorMessage);

  return (
    <div>
      <SearchCard
        onclick={searchClickHandle}
        onChangeHandle={onChangeHandle}
        searchData={searchData}
        // fetchDataProps={()=>{}}
        // errorMessage={errorMessage}
        data={data}
      />
    </div>
  );
};

export default Search;
