'use client';
import { useEffect } from "react";
import Image from "next/image";
import { fadeIn, slideIn } from "@/app/Animations/common";
import MaxContainer from '../../common/maxContainer'
const Index = () => {

  useEffect(() => {
    fadeIn()
    slideIn()
  })

  return (
    <div className="py-[5.5rem] sm:pt-[17rem] sm:pb-[12rem] px-[1.5rem] sm:px-[10rem] relative">
      <Image
        src="/wheel_mobile.webp"
        className="absolute inset-0 sm:hidden top-0 w-[100%] h-[100%] multiply"
        width={790}
        height={387}
        alt="wheel"
      />
      <Image
        src="/wheel_sm.webp"
        className="absolute sm:block hidden inset-0 top-0 w-[100%] h-[100%] multiply"
        width={1920}
        height={940}
        alt="wheel"
      />
      <div className="flex flex-col items-center relative">
        <img
          src="/arrow_1.svg"
          className="absolute sm:hidden left-[1rem] top-[3rem]"
          alt="arrow"
          data-animation-id="fadeIn"
        />
        <img
          src="/arrow_1_sm.svg"
          className="absolute sm:block hidden left-[15.5rem] w-[30rem] top-[1rem]"
          alt="arrow"
          data-animation-id="fadeIn"
        />
        <img
          src="/shield.svg"
          className="absolute left-[0] sm:left-[11rem] top-[9rem] sm:top-[8rem] w-[3.5rem] sm:w-[10rem]"
          alt="arrow"
          data-animation-id="fadeIn"
        />
        <img
          src="/arrow_2.svg"
          className="absolute sm:hidden left-[1rem] top-[13rem]"
          alt="arrow"
          data-animation-id="fadeIn"
        />
        <img
          src="/arrow_2_sm.svg"
          className="absolute sm:block hidden h-[8rem] left-[1rem] sm:left-[10rem] top-[13rem] sm:top-[18rem]"
          alt="arrow"
          data-animation-id="fadeIn"
        />
        <img
          src="/notification.svg"
          className="absolute left-[0] sm:left-[5rem] bottom-[0] sm:w-[10rem] w-[3.5rem]"
          alt="arrow"
          data-animation-id="fadeIn"
        />
        <img
          src="/arrow_3.svg"
          className="absolute right-[1rem] top-[3rem] sm:hidden"
          alt="arrow"
          data-animation-id="fadeIn"
        />
        <img
          src="/arrow_3_sm.svg"
          className="absolute right-[6rem] top-[1rem] sm:block hidden w-[40rem]"
          alt="arrow"
          data-animation-id="fadeIn"
        />
        <img
          src="/ace.svg"
          className="absolute right-[0] top-[8rem] w-[3.5rem] sm:w-[10rem]"
          alt="arrow"
          data-animation-id="fadeIn"
        />
        <div className="flex flex-col  items-center" data-animation-id="slideIn">
          <h1 className="header px-[3rem] py-[.5rem] bg-[#8FD5CC] text-[#0D1117] rounded-[4rem]">
            FIPSMQ
          </h1>
          <h1 className="header text-center w-[27rem] sm:w-[73rem]">
            FIPS-<span className="font-[400]">Compliant</span>{" "}
            <span className="sm:text-[#8FD5CC]">Message Broker</span>
          </h1>
          <div className="border w-[25rem] sm:w-[48rem] rounded-[.7rem] border-[#3FA4FF] p-[1rem] mt-[.5rem]">
            <p className="text-center">
              Empowering Secure and Scalable Messaging with FIPSMQ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
