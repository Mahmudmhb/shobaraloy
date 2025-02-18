"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { RiEyeOffFill } from "react-icons/ri";
import { Input } from "@heroui/input";
import style from "../../../components/Style/login.module.css";
const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="grid grid-cols-2 items-center space-x-10">
        {/* Left Side - Image */}
        <div className="border-2 flex justify-center items-center w-[500px] h-[500px] bg-[#26ACE2] border-[#26ACE2] rounded-full p-2">
          <div className={style.imageAnimation}>
            <Image
              src="https://wpkixx.com/html/socimo/images/resources/login-1.png"
              alt="login"
              width={200}
              height={200}
              className="rounded-[32px]"
            />
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-96">
          <h1 className="text-xl mb-10 font-bold">
            Welcome back
            <span className="text-[#26ACE2] mt-3 uppercase text-4xl block">
              Shobaraloy
            </span>
          </h1>

          {/* Email Input */}
          <Input label="Email" type="email" variant="underlined" />

          {/* Password Input */}
          <Input
            endContent={
              <button
                aria-label="toggle password visibility"
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <RiEyeOffFill className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <BsFillEyeFill className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            label="Password"
            type={isVisible ? "text" : "password"}
            variant="underlined"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
