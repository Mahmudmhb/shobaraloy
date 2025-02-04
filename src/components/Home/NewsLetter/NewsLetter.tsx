import Image from 'next/image';
import React from 'react';
import { IoIosPaperPlane } from 'react-icons/io';

const NewsLetter = () => (
  <div className='w-11/12 mx-auto shadow-2xl rounded'>
    <div className='w-5/6 mx-auto md:flex items-center py-10 justify-between '>
    <div className="md:flex gap-5">
      <Image
        alt='news letters' width={150} height={100}

        src="https://wpkixx.com/html/socimo/images/news-icon.png" />
      <div className="flex flex-col gap-1 items-start justify-center">
        <h4 className="text-2xl font-semibold text-[#26ACE2]">Our Newsletter</h4>
        <h5 className="text-4xl text-black ">Subscribe Now</h5>
      </div>
    </div>
    <div>
      <div className=' '>
        <label className="border-2 rounded-3xl md:flex text-center items-center  bg-[#f5f5f5] ">
          <input
            type="text"
            className="md:w-96 border-none  pl-3 py-3 rounded-3xl bg-[#f5f5f5] text-black  focus:outline-none "
            placeholder="Email@com" />

          <IoIosPaperPlane className=" text-white  rounded-[40%]   bg-[#26ACE2] text-5xl p-2  " />

        </label>
      </div>
    </div>
  </div>
  </div>
);

export default NewsLetter;