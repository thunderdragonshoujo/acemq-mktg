'use client';
import milestone, { fadeIn } from "@/app/Animations/common";
import { useEffect } from "react";
import Image from "next/image";
const Index = () => {
    useEffect(() => {
        milestone()
        fadeIn()
    })
    return (
        <section className="mt-[3rem] sm:flex sm:px-[10rem] px-[3rem] relative">
            <img src="/BrainB.webp" className="opacity-[.5] mix-blend-lighten absolute top-[17rem] z-[-1] left-0 w-[20rem] hidden sm:block" alt="" />
            <img src="/faceL.png" className="filter absolute opacity-[.5]  blend top-[0rem] hidden sm:block z-[-1] right-0 w-[20rem]" alt="" />
            <div className="absolute hidden sm:block mt-[3rem] overflow-hidden" data-animation-id='milestone'>
                <img src="/mille_4.webp" className="w-[4rem]" alt="line" />
            </div>
            <div className="" data-animation-id='fadeIn'>
                <div className="flex">
                    <div className="sm:ml-[7rem] sm:mt-[4rem]">
                        <h4 className="text-center text-[2.5rem] font-[700] mb-[1rem] sm:text-left sm:text-[4.5rem]">Technologies</h4>
                        <Image src='/technologies.png' alt="tech icons" className="w-[100%] hidden sm:block sm:w-[90rem]" width={1346} height={652} />
                        <Image src='/technologies_sm.png' alt="tech icons" className="w-[100%] sm:hidden" width={358} height={409} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Index;