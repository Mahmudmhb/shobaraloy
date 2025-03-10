import React from 'react';

const LogoAndInput = () => {
    return (
        <div>
             <div className="flex gap-3 items-center">
            <h1>logo</h1>
            <h1 className=' hidden md:flex'>Shobaraloy</h1>
            <div className='hidden md:flex'>
                <label className="input rounded-3xl flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                    <input type="text" className="grow w-96 " placeholder="Search....." />

                </label>
            </div>
        </div>
        </div>
    );
};

export default LogoAndInput;