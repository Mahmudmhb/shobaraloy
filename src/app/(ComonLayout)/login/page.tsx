"use client";
import { Input } from "@heroui/input";
import Image from "next/image";
import React, { useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { RiEyeOffFill } from "react-icons/ri";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex justify-center items-center h-screen ">
      <div>
        <h1>
          Welcome back{" "}
          <span className="text-[#26ACE2] uppercase text4xl ">
            <br />
            Shobaraloy
          </span>{" "}
        </h1>
      </div>
      <div>
        <Image
          src="https://wpkixx.com/html/socimo/images/resources/login-1.png
"
          alt="login"
          width={500}
          height={500}
        />
      </div>
      <div className="w-96">
        <Input label="Email" type="email" variant="underlined" />
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
  );
};
export default Login;
