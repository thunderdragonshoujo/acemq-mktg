'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import milestone, { slideIn } from "@/app/Animations/common";
import MaxContainer from '../../common/maxContainer'
import split from "@/app/Animations/text";
const Index = () => {
    useEffect(() => {
        milestone()
        split()
        slideIn()
    }, [])
    return (
        <section className="pt-[6.3rem] relative px-[2.5rem] sm:px-[10rem] pb-[2rem] sm:pb-[8rem]">
            <Image src='/hero_bg_sm.png' width={520} className="absolute z-[-3] sm:hidden inset-0 " height={669} alt="background image" />
            <Image src='/hero_flare_bottom_sm.png' width={520} className="absolute z-[-2]  sm:hidden inset-0 " height={669} alt="background image" />
            <Image src='/hero_flare_side_sm.png' width={520} className="absolute z-[-1] sm:hidden inset-0 " height={669} alt="background image" />
            <Image src='/hero_bg_lg.png' width={1920} className="absolute  w-[100vw] h-[100%] hidden  sm:block z-[-1] inset-0 " height={1000} alt="background image" />
            <Image src='/hero_flare_bottom_lg.png' width={1920} className="absolute w-[100vw] h-[100%] hidden  sm:block z-[-2] inset-0 " height={1000} alt="background image" />
            <Image src='/hero_flare_side_lg.png' width={1920} className="absolute  w-[100vw] h-[100%] hidden  sm:block z-[-1] inset-0 " height={1000} alt="background image" />

            <MaxContainer>
                <div className="relative flex gap-[4rem]">
                    <div className="h-[0] overflow-hidden absolute hidden sm:block" data-animation-id='milestone'>
                        <img src="/mille_1.png" className="mt-[2rem] w-[4rem]" alt="mile stone" />
                    </div>

                    <div className="relative sm:w-fit sm:ml-[7rem]" data-animation-id='slideIn'>
                        <h1 className="font-[300] text-[5.3rem] sm:text-[9rem] sm:w-[58rem] leading-[5.5rem] sm:leading-[9rem]">Message <span className="font-[700] text-accent-100">Queuing</span></h1>
                        <h2 className="text-[2rem] sm:text-[4rem] sm:leading-[9rem] leading-[6.2rem] font-[700]">Technology <span className="font-[400]">Experts</span></h2>
                        <p className="mb-[2rem] sm:hidden sm:mb-0">AceMQ is a firm built on delivering excellence on all Message Queuing and Streaming Solutions. We have expertise in Queueing tools and Streaming tools, their Architecture, and how they integrate in various environments.</p>
                        <p className="sm:hidden">Let us assist you with your planned deployment or assess your current environment.</p>

                        <p className="sm:block hidden sm:w-[58rem]">AceMQ is a firm built on delivering excellence on all Messaging Queuing Solutions. We have exclude tools and streaming Tools, in Streaming, Architecture, and how they integrate in various environments. Let us assist you with your Message brokers deployment or assess your current environment.</p>

                        <Link href='/#contact'>
                            <button className="border border-accent-100 mt-[2.8rem] relative">Contact Us</button>
                        </Link>
                    </div>
                    <Image width={1146} height={204} src='/PEQC.svg' className="absolute hidden sm:block right-[10rem] h-[18rem] w-[85rem] bottom-[-17rem]" alt="P.E.Q.C" />
                </div>
            </MaxContainer>
        </section>
    );
}

export default Index;
