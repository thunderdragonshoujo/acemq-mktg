'use client';
import { useEffect } from "react";
import { fadeIn, slideIn } from "@/app/Animations/common";
import Image from "next/image";
const Index = () => {
    useEffect(() => {
        slideIn()
        fadeIn()
    }, [])


    return (
        <section className="flex z-[10] flex-col px-[3rem] sm:px-[10rem] pt-[7rem] sm:pt-[23rem] relative pb-[6rem] sm:pb-[15rem] overflow-hidden">
            <div className="">
                <img src="/rabbitMq_hero_bg.png" className="absolute w-[100vw] sm:hidden h-[42rem] top-[-6rem] inset-0 z-[-1]" alt="background" />
                <img src="/hero_rabbit_bg.png" className="absolute w-[100vw] hidden sm:block inset-0 z-[-2] " alt="background" />
                <img src="/hero_rabbit_lg.png" className="absolute  w-[100vw] hidden sm:block inset-0 z-[-1] blend2 " alt="background" />
                <Image className="absolute right-[.6rem] top-[6.5rem] w-[7rem] h-[13rem] rotate-[-5deg] sm:hidden" width={71} height={139} src='/rabbitMQ_hero-R.png' alt="icon" />
                <Image data-animation-id='fadeIn' className="absolute sm:block  hidden right-[10rem] top-[15rem] w-[20rem] h-[45rem] rotate-[-5deg]" width={260} height={576} src='/hero_icon_bg_2.png' alt="icon" />
                {/* <Image className="absolute right-[3rem] bottom-[8rem] border w-[7rem] h-[8rem] rotate-[-5deg] sm:hidden" width={71} height={139} src='/hero_icon.svg' alt="icon" /> */}
                <Image data-animation-id='fadeIn' className="absolute hidden sm:block bottom-[25rem] left-[22rem] h-[10rem]" width={155} height={122} src='/convex.svg' alt="icon" />
                {/* <Image className="absolute left-[3rem] border bottom-[16rem] w-[7rem] h-[8rem] rotate-[-5deg] sm:hidden" width={71} height={139} src='/hero_icon_sm_2.svg' alt="icon" /> */}
                <Image data-animation-id='fadeIn' className="absolute left-[1rem] sm:left-[11rem] sm:bottom-[19rem] bottom-[8rem] w-[7rem] sm:w-[15rem] sm:h-[12rem] h-[8rem] " width={71} height={139} src='/hero_icon_sm_3.svg' alt="icon" />
                
                <div className="flex flex-col" data-animation-id='slideIn'>
                    <h1 className="text-center self-center sm:text-[7.5rem] sm:leading-[8rem] sm:w-[80rem] font-[700] text-[3rem] w-[26rem] leading-[4rem]"><span className="text-accent-100">Elevate</span> Your <span className="font-[400]">RabbitMQ Experience</span>  with  <span className="text-[#0D1117] inline-block py-[.5rem] px-[2rem] bg-accent-100 rounded-[3rem]">AceMQ</span></h1>

                    <Image className="self-center mt-[1.6rem] sm:hidden" width={212} height={53} src='/border4k.png' alt="border" />
                    <Image className="self-center sm:block hidden w-[60rem] mt-[3rem]" width={212} height={53} src='/dashed-text.png' alt="border" />
                </div>
            </div>
        </section>
    );
}

export default Index;