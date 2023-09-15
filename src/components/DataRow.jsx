import React from 'react'
import humidity from "../assets/icons/humidity.svg"
import mm from "../assets/icons/mm.svg"
import wind from "../assets/icons/wind.svg"
import temp from "../assets/icons/temp.svg"


const DataRow = ({dataRow}) => {
    const {dataHumidity, dataClouds, dataWind, dataTemp}=dataRow
  return (
    <div className='flex flex-row justify-center items-center gap-5 sm:gap-16'>

        <section className='flex justify-center items-center gap-1 sm:gap-2'>
            <img src={humidity} alt="" className='small-icon-size' />
            <p>{dataHumidity} %</p>
        </section>

        <section className='flex justify-center items-center gap-1 sm:gap-2'>
            <img src={mm} alt="" className='small-icon-size' />
            <p>{dataClouds} %</p>
        </section>

        <section className='flex justify-center items-center gap-1 sm:gap-2'>
            <img src={wind} alt="" className='small-icon-size' />
            <p>{dataWind} %</p>
        </section>

        <section className='flex justify-center items-center gap-1 sm:gap-2'>
            <img src={temp} alt="" className='small-icon-size' />
            <p>{dataTemp} %</p>
        </section>
    </div>
  )
}

export default DataRow