import SearchCard from "./SearchCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";

const Search = ({ onFetchDataChanged, onErrorMessageChanged, location }) => {
  const [searchData, setSearchData] = useState("");

  const api =
    // "https://api.openweathermap.org/data/2.5/weather?q="+searchData+"&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric";
    "http://api.openweathermap.org/data/2.5/weather?q="+searchData+"&APPID=62f6de3f7c0803216a3a13bbe4ea9914&units=metric";

  const onChangeHandle = (e) => {
    setSearchData(e.target.value);
  };

  const notify = () =>
    toast.error("Enter a valid Location!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        background: "transparent", // Change the inner side color to a transparent background
        color: "#000", // Change the text color to black
      },
    });

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

          // console.log("serach", data)
          onFetchDataChanged(data);
        })
        .catch((error) => {
          onErrorMessageChanged(error);
          notify();
        });
    } else {
      notify();
      // console.log("(Search) enter a location name");
    }
  };

  const searchClickHandle = () => {
    setSearchData("");

    apiDataHandle();
  };

  return (
    <div>
      <ToastContainer />

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
