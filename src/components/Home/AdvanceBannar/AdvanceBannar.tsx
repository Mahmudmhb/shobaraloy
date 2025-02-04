import Image from 'next/image';
import React from 'react';

const AdvanceBannar = () => {
    return (
         <div>
                   
                    <div
                        className="hero h-96 relative "
                        style={{
                            backgroundImage: "url(https://wpkixx.com/html/socimo/images/resources/paralex-bg.jpg)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                      
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[#13153e] opacity-80"></div>
        
                        {/* Content */}
                        <div className="hero-content text-white text-center relative z-50">
                            <div className="">
                               <div className='flex justify-center'>
                               <Image src="https://wpkixx.com/html/socimo/images/tv-icon.png" alt='advance ' width={100} height={100}/></div>                       
                                       <h1 className="mb-5 md:text-5xl font-bold">Advance your  <span className="text-[#088dcd] ">Research</span> </h1>
                                <p className="mb-5">
                                Join our community of scientists.
                                </p>
                                <div className="group inline-block">
                                    <button className="bg-[#088dcd] px-5 py-2 text-sm rounded-3xl 
                                        group-hover:bg-[#13153e] group-hover:translate-y-1 
                                        transition duration-400">
                                        Join Free Now
                                    </button>
                                </div>
        
                                
                            </div>
                        </div>
                    </div>
                       
                </div>
    );
};

export default AdvanceBannar;