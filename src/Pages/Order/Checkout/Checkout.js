import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
const Checkout = () => {
    const navigate = useNavigate();
    const [thanks,setThanks] = useState(false);
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log('Submited')
        if(!thanks){
           navigate(`/thankyou`) 
        }
    }

   
  return (
    <div className="bg-green-200 py-32 px-10 min-h-screen ">
      <div className="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto">
        <form onSubmit={handleSubmit} action="">
          <div className="flex items-center mb-5">
            <label
            
              className="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
            />
          </div>
          <div className="flex items-center mb-5">
            <label
          
              className="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
            >
              Email
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Email"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
            />
          </div>
          <div className="flex items-center mb-5">
            <label
            
              className="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
            >
              Phone
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Phone"
              className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
            />
          </div>

          <div className="flex items-center mb-10">
            <label
         
              className="inline-block w-20 mr-6 text-right
                                    font-bold text-gray-600"
            >
              Address
            </label>
            <input
              type="text"
              id="twitter"
              name="twitter"
              placeholder="Address"
              className="flex-1 py-2 border-b-2 border-gray-400  
                      text-gray-600
                      placeholder-gray-400"
            />
          </div>

          <div className="text-right">
            <button className="py-3 px-8 bg-green-400 text-white font-bold">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
