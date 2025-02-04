import Image from 'next/image';
import React from 'react';
import { CiLight } from 'react-icons/ci';
import { SiQuantconnect } from 'react-icons/si';

const Impact = () => {
    return (
        <div className='w-5/6 mx-auto space-y-10'>
            <div className='sm:space-y-5 md:grid grid-cols-2 justify-evenly gap-6 items-center'>
                <div className='flex flex-col '>


                    <div>
                        <CiLight className="text-7xl text-[#26ACE2]" />
                    </div>
                    <div>
                        <h1 className='text-4xl font-semibold text-[#3e3f5e] '>Measure Your scientific <br />impact</h1>
                        <p className='text-sm font-thin mt-3 text-[#7d7e9e]'>Get in depth stats on who&apos;s been reading your work and keep track of your citations.</p>
                    </div>
                </div>
                <div className='border-2 border-dotted rounded-3xl border-[#26ACE2]'>
                    <div className='m-4 flex justify-center'>
                        <Image src='https://wpkixx.com/html/socimo/images/resources/research-avatar.jpg' width={500} height={350}  alt='' />
                    </div>
                </div>
            </div>
            <div className='space-y-5 md:grid grid-cols-2 justify-evenly gap-6 items-center'>

                <div className='border-2 border-dotted rounded-3xl border-[#26ACE2] '>
                    <div className='m-4 flex justify-center'>
                        <Image src='https://wpkixx.com/html/socimo/images/resources/research-avatar2.jpg' width={500} height={350} alt='' />
                    </div>
                </div>
                <div className='flex flex-col space-y-5'>


                    <div>
                    <SiQuantconnect className="text-7xl text-[#26ACE2]" />
                    </div>
                    <div>
                        <h1 className='text-4xl font-semibold text-[#3e3f5e] '>Connect with Your <br />scientific Community</h1>
                        
                    </div>
                        <div className='flex flex-wrap gap-3'>
                        <div className="group inline-block">
                            <button className="bg-[#088dcd] px-5 py-2 text-sm rounded-3xl 
                                group-hover:bg-[#13153e] group-hover:translate-y-1 
                                transition duration-400">
                                Physics
                            </button>
                           
                        </div>
                        <div className="group inline-block">
                            <button className="bg-[#088dcd] px-5 py-2 text-sm rounded-3xl 
                                group-hover:bg-[#13153e] group-hover:translate-y-1 
                                transition duration-400">
                                Engineering
                            </button>
                           
                        </div>
                        <div className="group inline-block">
                            <button className="bg-[#088dcd] px-5 py-2 text-sm rounded-3xl 
                                group-hover:bg-[#13153e] group-hover:translate-y-1 
                                transition duration-400">
                                Technology
                            </button>
                           
                        </div>
                        <div className="group inline-block">
                            <button className="bg-[#088dcd] px-5 py-2 text-sm rounded-3xl 
                                group-hover:bg-[#13153e] group-hover:translate-y-1 
                                transition duration-400">
                                Biology
                            </button>
                           
                        </div>
                        <div className="group inline-block">
                            <button className="bg-[#088dcd] px-5 py-2 text-sm rounded-3xl 
                                group-hover:bg-[#13153e] group-hover:translate-y-1 
                                transition duration-400">
                                Computer Science
                            </button>
                           
                        </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Impact;