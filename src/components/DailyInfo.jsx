import sunrise1 from "../assets/icons/sunrise1.svg"
import sunset from "../assets/icons/sunset.svg"
import tempMin from "../assets/icons/tempMin.svg"
import tempMax from "../assets/icons/tempMax.svg"

const DailyInfo = () => {
  return (
        
    <div className="flex flex-1 gap-5 sm:gap-16 justify-evenly">
          <section className='flex flex-col justify-center items-center'>
          <img src={sunrise1} alt="" className='object-contain w-12 h-12 sm:w-16 sm:h-16'/>
          <p>Sunrise</p>
          <p>06.00 am</p>
        </section>

        <section className='flex flex-col justify-center items-center'>
          <img src={sunset} alt="" className='object-contain w-12 h-12 sm:w-16 sm:h-16'/>
          <p>Sunset</p>
          <p>06.00 am</p>
        </section>

        <section className='flex flex-col justify-center items-center'>
          <img src={tempMin} alt="" className='object-contain w-12 h-12 sm:w-16 sm:h-16'/>
          <p>Min Temp</p>
          <p>38</p>
        </section>

        <section className='flex flex-col justify-center items-center'>
          <img src={tempMax} alt="" className='object-contain w-12 h-12 sm:w-16 sm:h-16'/>
          <p>Max Temp</p>
          <p>38</p>
        </section>
    </div>
  )
}

export default DailyInfo