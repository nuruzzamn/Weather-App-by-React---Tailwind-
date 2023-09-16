import React from 'react'
import humidity from "../assets/icons/humidity.svg"
import mm from "../assets/icons/mm.svg"
import wind from "../assets/icons/wind.svg"
import temp from "../assets/icons/temp.svg"


const DataRow = ({dataRow}) => {
    const {dataHumidity, dataClouds, dataWind, dataTemp}=dataRow

    console.log("data row", dataHumidity);
  return (
    <div className='flex flex-row justify-center items-center gap-5 sm:gap-16 font-montserrat text-slate-gray'>

        <section className='flex justify-center items-center gap-1'>
            <img src={humidity} alt="" className='small-icon-size' />
            <p className='font-bold'>{dataHumidity===undefined ? "00":dataHumidity}<span className='text-[12px]'>%</span></p>
        </section>

        <section className='flex justify-center items-center gap-1'>
            <img src={mm} alt="" className='small-icon-size' />
            <p className='font-bold'>{dataClouds===undefined ? "00":dataClouds}<span className='text-[12px]'>mm</span></p>
        </section>

        <section className='flex justify-center items-center gap-1'>
            <img src={wind} alt="" className='small-icon-size' />
            <p className='font-bold'>{dataWind===undefined ? "00":dataWind}<span className='text-[12px]'>km</span></p>

            {/* <p>{dataWind}%</p> */}
        </section>

        <section className='flex justify-center items-center gap-1'>
            <img src={temp} alt="" className='small-icon-size' />
            <section className='flex '>
            <p className='font-bold'>{dataTemp===undefined ? "00":Math.round(dataTemp)}</p>
            </section>
            <p className='text-[12px] mt-[-8px] font-bold'>0</p>
        </section>
    </div>
  )
}

export default DataRow