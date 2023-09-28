import { useState, useMemo } from "react";
import Search from "./Search";
import MiddleSection from "./MiddleSection";
import DownSection from "./DownSection";
import DataRow from "./DataRow";

// Function to format Unix timestamp to "hh:mm AM/PM" format
const formatTimestampToTime = (timestamp) => {
  if (timestamp !== undefined) {
    // Convert to JavaScript Date object
    const date = new Date(timestamp * 1000);

    // Get hours and minutes
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Determine AM/PM
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour format
    const hours12 = hours % 12 || 12;

    // Format the time as "hh:mm AM/PM"
    return `${hours12}:${minutes.toString().padStart(2, "0")} ${ampm}`;
  } else {
    return "";
  }
};

const Weather = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState(null);

  const onFetchDataChanged = (data) => {
    setData(data);
  };

  const onErrorMessageChanged = (data) => {
    setError(data);
  };

  // console.log("error",error);

  // data !== undefined
  //   ? console.log("weather  bbgb", data)
  //   : console.log("undefined data");

  const name = data.name;
  const country = data.sys?.country;
  const sunrise = data.sys?.sunrise;
  const sunset = data.sys?.sunset;
  const dataWind = data.wind?.speed;
  let des = "";
  const dataClouds = data.clouds?.all;
  const dataHumidity = data.main?.humidity;
  const dataTempFeeelsLike = data.main?.feels_like;
  const dataTemp = data.main?.temp;
  const dataTempMax = data.main?.temp_max;
  const dataTempMin = data.main?.temp_min;
  data === null ? (des = "") : (des = data?.weather?.[0]?.main);

  // Use the formatTimestampToTime function to format sunrise and sunset
  const sunriseTime = useMemo(() => formatTimestampToTime(sunrise), [sunrise]);
  const sunsetTime = useMemo(() => formatTimestampToTime(sunset), [sunset]);

  return (
    <div className="max-w-3xl relative m-auto flex flex-1 justify-center flex-col">
      <section className="padding-x padding-b pt-10 flex flex-1 justify-center mt-10 lg:mt-0">
        <Search
          onFetchDataChanged={onFetchDataChanged}
          onErrorMessageChanged={onErrorMessageChanged}
          location={{ name, country }}
        />
      </section>

      <section className="padding-b flex flex-1 justify-center">
        {data !== undefined ? (
          <MiddleSection middleData={{ dataTemp, name, des }} />
        ) : (
          <MiddleSection middleData={""} />
        )}
      </section>

      <section className="flex flex-1 justify-center">
        <DataRow
          dataRow={{
            dataHumidity,
            dataClouds,
            dataWind,
            dataTemp,
            dataTempFeeelsLike,
          }}
        />
      </section>

      <section className="sm:padding padding-y flex flex-1 justify-center">
        <DownSection
          timeInfo={{ sunriseTime, sunsetTime, dataTempMax, dataTempMin }}
        />
      </section>
    </div>
  );
};

export default Weather;
