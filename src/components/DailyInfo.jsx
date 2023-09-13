
const DailyInfo = ({ imgURL, name, value }) => {
  return (
    <div>
      <section className="flex flex-col bg-white justify-center items-center">
        <img
          src={imgURL}
          alt=""
          className="object-contain w-12 h-12 sm:w-16 sm:h-16 rounded-xl mb-2"
        />
        <p className="bg-white font-montserrat text-xs text-slate-700 ">{name}</p>
        <p className="bg-white font-montserrat text-xs text-slate-700 ">{value}</p>
      </section>
    </div>
  );
};

export default DailyInfo;
