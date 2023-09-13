const Button = ({ label, hover}) => {
    return (
      <div className="rounded-full">
        <button
          className={` ${hover} 
        bg-coral-red text-white font-semibold border-coral-red
          flex justify-center items-center gap-2 px-3 py-2 border font-montserrat text-sm leading-none  rounded-full `}
        > {label} </button>
      </div>
    );
  };
  
  export default Button;
  