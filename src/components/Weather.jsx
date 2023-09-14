import { useState } from "react";
import Search from "./Search";
import MiddleSection from "./MiddleSection";
import DownSection from "./DownSection";
import DataRow from "./DataRow";

const Weather = () => {
  const [data, setData] = useState("")
  const [error, setError] = useState(null)

  const onFetchDataChanged=(data)=>{
    // console.log('fetch data - weather', data)
    setData(data)
  }

  const onErrorMessageChanged=(data)=>{
    // console.log('error - weather', data)
    setError(error)
  }

  console.log("weather",data,data.name)
  // if(data){
  //   setLocation(data.name)
  //   setCountry(data.sys)
  // }
  const name= data.main?.temp ?? " "

  return (
    <div className="max-w-3xl relative m-auto flex flex-1 justify-center flex-col">
      <section className="padding-x padding-b pt-10 flex flex-1 justify-center">
        <Search onFetchDataChanged={onFetchDataChanged} 
        onErrorMessageChanged={onErrorMessageChanged} 
        data={name}/>
      </section>

      <section className="padding-b flex flex-1 justify-center">
        <MiddleSection />
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
