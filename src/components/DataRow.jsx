import React from 'react'
import humidity from "../assets/icons/humidity.svg"
import mm from "../assets/icons/mm.svg"
import wind from "../assets/icons/wind.svg"
import temp from "../assets/icons/temp.svg"


const DataRow = () => {
  return (
    <div className='flex flex-row justify-center items-center gap-5 sm:gap-16'>

        <section className='flex justify-center items-center gap-1 sm:gap-2'>
            <img src={humidity} alt="" className='small-icon-size' />
            <p>82 %</p>
        </section>

        <section className='flex justify-center items-center gap-1 sm:gap-2'>
            <img src={mm} alt="" className='small-icon-size' />
            <p>82 %</p>
        </section>

        <section className='flex justify-center items-center gap-1 sm:gap-2'>
            <img src={wind} alt="" className='small-icon-size' />
            <p>82 %</p>
        </section>

        <section className='flex justify-center items-center gap-1 sm:gap-2'>
            <img src={temp} alt="" className='small-icon-size' />
            <p>82 %</p>
        </section>
    </div>
  )
}

export default DataRow