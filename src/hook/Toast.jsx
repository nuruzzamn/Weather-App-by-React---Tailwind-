import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {

    const name = "zaman";

    const notify = () => 
    {toast.error('🦄 Wow so easy!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })};

        if(name ==="zama"){
            notify()
        } else{
            // notify()
            // name="sdd"
            console.log("else")
        }


  return (
    <div>
        {/* <button onClick={notify}>Notify!</button> */}

        <ToastContainer />
      </div>
  )
}

export default Toast