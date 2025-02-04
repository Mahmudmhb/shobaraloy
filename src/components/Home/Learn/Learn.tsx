import React from 'react';
import { FaPeopleGroup, FaRegCirclePlay } from 'react-icons/fa6';
import { GiArchiveRegister } from 'react-icons/gi';
import { LuClock9 } from 'react-icons/lu';
import { MdOutlineAirplaneTicket, MdPublishedWithChanges } from 'react-icons/md';
import { TiInputChecked } from 'react-icons/ti';

const Learn = () => {
    return (<div className='w-11/12 mx-auto space-y-20'>
        <div className=' flex gap-4 '>
            <div className='flex gap-4 bg-[#f5f5f5] rounded-2xl shadow p-5'>
                <div>

                    <TiInputChecked
                        className="text-5xl text-white  rounded-[10%]   bg-[#26ACE2]  p-2" />
                </div>
                <div className=''>
                    <h1 className='text-xl font-semibold text-[#3e3f5e] '>Learn from industry experts</h1>
                    <p className='text-sm font-thin mt-3 text-[#7d7e9e]'>Share your research, collaborate with your peers, and get the support you need to advance your career</p>
                </div>
            </div>
            <div className='flex gap-4 bg-[#f5f5f5] rounded-2xl shadow p-5'>
                <div>

                    <FaRegCirclePlay
                        className="text-5xl text-white  rounded-[10%]   bg-[#26ACE2]  p-2" />
                </div>
                <div className=''>
                    <h1 className='text-xl font-semibold text-[#3e3f5e] '>Find video Course of any topic</h1>
                    <p className='text-sm font-thin mt-3 text-[#7d7e9e]'>Share your research, collaborate with your peers, and get the support you need to advance your career.</p>
                </div>
            </div>
            <div className='flex gap-3  bg-[#f5f5f5] rounded-2xl shadow p-5'>
                <div className=' '>

                    <LuClock9
                        className="text-5xl text-white  rounded-[10%]   bg-[#26ACE2]  p-2" />

                </div>
                <div className=''>
                    <h1 className='text-xl font-semibold text-[#3e3f5e] '>Go at your own pace</h1>
                    <p className='text-sm font-thin mt-3 text-[#7d7e9e]'>Share your research, collaborate with your peers, and get the support you need to advance your career.</p>
                </div>
            </div>
        </div>
        <div>
            <div className=' w-11/12 mx-auto flex justify-between gap-5'>
                <div className='flex flex-col  items-center justify-center   rounded-2xl shadow p-5 '>


                    <div className=''>

                        <MdOutlineAirplaneTicket
                            className="text-7xl text-white  rounded-[50%]   bg-[#26ACE2] p-2" />

                    </div>
                    <div className='text-center'>
                        <h1 className='text-xl font-semibold text-[#3e3f5e] '>599</h1>
                        <p className='text-sm font-thin mt-3 text-[#7d7e9e]'>Researchers</p>
                    </div>
                </div>
                <div className='flex flex-col  items-center justify-center    rounded-2xl shadow p-5 '>


                    <div className=''>

                        <GiArchiveRegister
                            className="text-7xl text-white  rounded-[50%]   bg-[#26ACE2] p-2" />

                    </div>
                    <div className='text-center'>
                        <h1 className='text-xl font-semibold text-[#3e3f5e] '>299</h1>
                        <p className='text-sm font-thin mt-3 text-[#7d7e9e]'>Registered user</p>
                    </div>
                </div>
                <div className='flex flex-col  items-center justify-center  rounded-2xl shadow p-5 '>


                    <div className=''>

                        <FaPeopleGroup
                            className="text-7xl text-white  rounded-[50%]   bg-[#26ACE2] p-2" />

                    </div>
                    <div className='text-center'>
                        <h1 className='text-xl font-semibold text-[#3e3f5e] '>600</h1>
                        <p className='text-sm font-thin mt-3 text-[#7d7e9e]'>Active People</p>
                    </div>
                </div>
                <div className='flex flex-col  items-center justify-center   rounded-2xl shadow p-5 '>


                    <div className=''>

                        <MdPublishedWithChanges
                            className="text-7xl text-white  rounded-[50%]   bg-[#26ACE2] p-2" />

                    </div>
                    <div className='text-center'>
                        <h1 className='text-xl font-semibold text-[#3e3f5e] '>12</h1>
                        <p className='text-sm font-thin mt-3 text-[#7d7e9e]'>Post Published</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
};

export default Learn;