import React from 'react';
import LogoAndInput from './LogoAndInput';
import Link from 'next/link';

const HeaderHome = () => {
    return (
        <div className='bg-black sticky top-0 z-10'>
            <div className='flex justify-between w-5/6 mx-auto h-16 items-center text-sm  '>
            <div>
                <LogoAndInput/>
            </div>
            <div className='flex gap-3'>
          <div className='md:flex gap-3 hidden'>
          <button className=" border px-4 py-1  rounded-3xl">Today`s Newsfeed</button>
          <button>Help</button>
          </div>
            <button></button>
            <Link href='/login'>Login / Register </Link>

            </div>
        </div>
        </div>
    );
};

export default HeaderHome;