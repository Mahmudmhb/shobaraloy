import React from 'react';
import Carousel from './Carousel';

const Testimonials = () => (
    <div>
        <div className='text-center mb-10'>
            <h1 className='text-3xl text-black'>What our   <span className='text-[#26ACE2]'>Students</span>  Have Today!</h1>
            <h1 className='text-black'>Our Recent News about the events.</h1>
        </div>
        <Carousel/>
        
    </div>
);

export default Testimonials;