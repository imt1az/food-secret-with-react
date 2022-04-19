import React from 'react';
import thankyou from '../../../images/ThankYou.jpeg';

const Thankyou = () => {
    return (
        <div className='w-full container mx-auto'>
            <div className='aspect-w-16 aspect-h-9'>
            <img className='mx-auto' src={thankyou} alt=""></img>
            </div>
            
        </div>
    );
};

export default Thankyou;