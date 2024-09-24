'use client';
import { useEffect } from "react";
import { slideIn, fadeIn } from "@/app/Animations/common";
import Image from "next/image";
const Index = () => {
  useEffect(() => {
    slideIn()
    fadeIn()
  }, [])
  return (
    <section className="py-[5.5rem] sm:pt-[17rem] sm:pb-[12rem] px-[1.5rem] sm:px-[10rem] relative">
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
          src="/service_!.svg"
          className="absolute w-[4rem]  sm:w-[12rem] sm:right-[-6rem] sm:top-[10rem] top-[3rem] right-0"
          alt="Rabbitmq services"
          data-animation-id='fadeIn'
        />
        <img
          src="/service_!.svg"
          className="absolute w-[4rem] sm:w-[12rem] sm:left-[0] left-[-1rem] sm:top-[18rem] top-[10rem]"
          alt="Rabbitmq services"
          data-animation-id='fadeIn'
        />
        <img
          src="/arrow_5.svg"
          className="absolute sm:block hidden right-[0] top-[0] w-[34rem]"
          alt="Comprehensive SLA-Based Support"
          data-animation-id='fadeIn'
        />
        <img
          src="/arrow_6.svg"
          className="absolute sm:block hidden left-[10rem] bottom-[0] w-[28rem]"
          alt="24/7 support for Rabbitmq"
          data-animation-id='fadeIn'
        />
        <img
          src="/arrow5.svg"
          className="absolute sm:hidden right-[1rem] top-[8rem]"
          alt="24/7 support for Rabbitmq"
          data-animation-id='fadeIn'
        />
        <img
          src="/arrow_6_sm.svg"
          className="absolute sm:hidden left-[0] top-[3rem]"
          alt="24/7 support for Rabbitmq"
          data-animation-id='fadeIn'
        />
        <div className="" data-animation-id='slideIn'>
          <h1 className="header font-[700] text-center w-[30rem]  sm:w-[100rem]">
            24/7 World-Wide <span className="text-[#8FD5CC]">Comprehensive</span>{" "}
            <span className="font-[400]">SLA-Based Support</span> for{" "}
            <span className="text-[#8FD5CC]">RabbitMQ</span>
          </h1>
          <p className="text-center mt-[.5rem] w-[32rem] sm:w-full">
            Empowering Uninterrupted Operations with AceMQ Support
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
