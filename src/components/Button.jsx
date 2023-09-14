const Button = ({ label, hover, onclick}) => {
    return (
      <div className="rounded-full ">
        <button
          className={` ${hover} 
        bg-coral-red text-white font-semibold border-coral-red
          flex justify-center focus:outline-none items-center gap-2 px-3 py-2 border font-montserrat text-sm leading-none rounded-full `} onClick={onclick}
        > {label} </button>
      </div>
    );
  };
  
  export default Button;
  