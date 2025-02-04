import Blogs from '@/components/Blogs/Blogs';
import React from 'react';

const RecentEvent = async() => (
    <div>
        <div className='text-center mb-10'>
            <h1 className='text-3xl text-black'>Recent  <span className='text-[#26ACE2]'>Events</span></h1>
            <h1 className='text-black'>Our Recent News about the events.</h1>
        </div>
        <Blogs />
    </div>
);

export default RecentEvent;