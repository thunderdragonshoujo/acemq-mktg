'use client'
import Image from "next/image";
import { useEffect } from "react";
import { fadeIn, slideIn } from "@/app/Animations/common";
const Index = () => {
  useEffect(() => {
    slideIn()
  }, [])
  return (
    <section className="py-[5.5rem] sm:pt-[20rem] pt-[12rem] sm:pb-[12rem] px-[1.5rem] sm:px-[10rem] relative">
      <Image
        src="/MQservice_hero_bg_sm.webp"
        className="absolute inset-0 sm:hidden top-0 w-[100%] h-[100%] multiply"
        width={790}
        height={387}
        alt="wheel"
      />
      <Image
        src="/MQservice_hero_bg.webp"
        className="absolute sm:block hidden inset-0 top-0 w-[100%] h-[100%] multiply"
        width={1920}
        height={940}
        alt="wheel"
      />
      <div className="items-center relative" data-animation-id='slideIn'>
        <h1 className="header mx-auto sm:w-[60rem]  text-center">
          Your Trusted <span className="font-[400]">Message</span>{" "}
          <span className="text-[#8FD5CC]">Queuing Services</span> Partner
        </h1>
        <p className="text-center mt-[.5rem] w-[32rem] sm:w-full">
          Expertise, Support, and Value for Your Messaging & Queuing
          Implementation
        </p>
      </div>
    </section>
  );
};

export default Index;
