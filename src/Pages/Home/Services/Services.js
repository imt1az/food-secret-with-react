import React, { useEffect, useState } from 'react';
import { addToDb } from '../../Utilities/fakeDb';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(()=>{
          fetch('food.JSON')
          .then(res => res.json())
          .then(data => setServices(data))
    },[])

    // Add To cart
  const handleAddToCart = (selectedProduct)=>{
  
    const exists = cart.find(product => product.id === selectedProduct.id);
    let newCart = [];
    if(!exists){
        
     selectedProduct.quantity = 1;
     newCart = [...cart,selectedProduct]
    }
    else{
        const rest = cart.filter(product => product.id !==selectedProduct.id);
        exists.quantity = exists.quantity + 1;
        newCart = [...rest,exists];
    }
    // console.log('New Cart : ',newCart );
    setCart(newCart);
    addToDb(selectedProduct.id);
    // console.log(' Cart : ',cart );
  }
    return (
        <div id='services'>
            <h1 className='text-3xl font-bold my-5 '>My Secrect Recepie</h1>
            <hr className='container mx-auto p-5 h-2'></hr>

            <div className='grid md:grid-cols-3 gap-4 container justify-items-center mx-auto '>
                {
                    services.map(service =>
                        <Service
                        key={service.id}
                        service = {service}
                        handleAddToCart = {handleAddToCart}
                        >

                        </Service>
                    )
                }
            </div>
            
        </div>
    );
};

export default Services;