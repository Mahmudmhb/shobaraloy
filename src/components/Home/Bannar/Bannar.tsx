
"use client"
import { Typewriter } from "react-simple-typewriter";

const Bannar = () => {
    return (
        <div>
           
            <div
                className="hero min-h-screen relative "
                style={{
                    backgroundImage: "url(https://wpkixx.com/html/socimo/images/resources/slider3.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
              
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#13153e] opacity-60"></div>

                {/* Content */}
                <div className="hero-content text-white text-center relative z-50">
                    <div className="">
                        <h1 className="mb-5 md:text-5xl font-bold">Discover Your <span className="text-[#088dcd] underline">Scientific</span> Knowledge</h1>
                        <p className="mb-5">
                            and stay connected with
                            <span className="text-[#088dcd] underline ml-3 font-bold text-2xl">
                                <Typewriter
                                    words={['Technology', 'Computers', 'Science', 'Mathmatics', 'Engineering']}
                                    loop={false}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={2000} />
                            </span>
                        </p>
                        <div className="group inline-block">
                            <button className="bg-[#088dcd] px-5 py-2 text-sm rounded-3xl 
                                group-hover:bg-[#13153e] group-hover:translate-y-1 
                                transition duration-400">
                                Join Free
                            </button>
                        </div>

                        
                    </div>
                </div>
            </div>
               
        </div>
    );
};

export default Bannar;
