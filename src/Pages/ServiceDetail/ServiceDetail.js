import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'


const ServiceDetail = () => {
    const [details, setDetail] =useState([]);

    useEffect(()=>{
        fetch('/food.JSON')
        .then(res=>res.json())
        .then(data=>setDetail(data));
    },[])

     
  
    const {serviceId} = useParams() 
    const items = details.find(s=>s.id === parseInt(serviceId));
    console.log();
    
    return (
        <div className='container mx-auto'>
            <h2 className='font-bold text-5xl my-5 g-4'>Welcome Detail : {items?.title}</h2>
            <div className='grid md:grid-cols-2 justify-items-center'>
                <div className='border-2 p-6 rounded-lg'>
                    <img className='w-72' src={items?.image} alt=''></img>
                </div>
                <div className='border-4 p-5 font-medium p-16'>
                    <p>{items?.Description}</p>
                    <h1 className=''>Wanna know the recepie?</h1>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetail;