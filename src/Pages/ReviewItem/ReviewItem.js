import React from 'react';

const ReviewItem = ({product}) => {
    return (
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
        <div className="flex w-2/5"> 
          <div className="w-20">
            <img className="h-24" src={product.image} alt=""/>
          </div>
          <div className="flex flex-col justify-between ml-4 flex-grow">
            <span className="font-bold text-sm">{product.title}</span>
            
            
          </div>
        </div>
        <div className="flex justify-center w-1/5">
         

          <input className="mx-2 border text-center w-8" type="text" value={product.quantity}/>

          
        </div>
        <span className="text-center w-1/5 font-semibold text-sm">${product.price * product.quantity}</span>
        
      </div>
    );
};

export default ReviewItem;