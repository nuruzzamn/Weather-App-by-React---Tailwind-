import { useState } from "react";
import Search from "./Search";
import MiddleSection from "./MiddleSection";
import DownSection from "./DownSection";
import DataRow from "./DataRow";

const Weather = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState(null);

  const onFetchDataChanged = (data) => {
    // console.log('fetch data - weather', data)
    setData(data);
  };

  const onErrorMessageChanged = (data) => {
    // console.log('error - weather', data)
    setError(error);
  };

  (data !==undefined)? console.log("weather  bbgb", data):console.log("undefined data");

  
  const name = data.name;
  const country = data.sys?.country;
  const sunrise = data.sys?.sunrise;
  const sunset = data.sys?.sunset;
  const wind = data.wind?.speed;
  let des = "";
  // const des=""
  const temp = data.main?.temp;
  const tempMax = data.main?.temp_max;
  const tempMin = data.main?.temp_min;

  console.log("data check",data);

  (data === null)? des="" : des=data?.weather?.[0]?.description

  // console.log("des", des);


  return (
    <div className="max-w-3xl relative m-auto flex flex-1 justify-center flex-col">
      <section className="padding-x padding-b pt-10 flex flex-1 justify-center">
        <Search
          onFetchDataChanged={onFetchDataChanged}
          onErrorMessageChanged={onErrorMessageChanged}
          location={{ name, country }}
        />
      </section>

      <section className="padding-b flex flex-1 justify-center">
        
      {(data !==undefined)?<MiddleSection middleData={{ temp, name, des}}/>:<MiddleSection middleData={""}/>}

      </section>

      <section className="flex flex-1 justify-center">
        <DataRow />
      </section>

      <section className="sm:padding padding-y flex flex-1 justify-center">
        <DownSection />
      </section>
    </div>
  );
};

export default Weather;
