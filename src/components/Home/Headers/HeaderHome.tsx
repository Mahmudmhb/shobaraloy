import React from 'react';
import LogoAndInput from './LogoAndInput';

const HeaderHome = () => {
    return (
        <div className='flex justify-between w-5/6 mx-auto h-16 items-center text-sm'>
            <div>
                <LogoAndInput/>
            </div>
            <div className='flex gap-3'>
            <button className=" border px-4 py-1  rounded-3xl">Today`s Newsfeed</button>
            <button>Help</button>
            <button>Login / Register</button>

            </div>
        </div>
    );
};

export default HeaderHome;