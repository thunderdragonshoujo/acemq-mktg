'use client'
import { slideIn } from "@/app/Animations/common";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
const Index = () => {
    useEffect(() => {
        slideIn()
    }, [])
    return (
        <section className="px-[3rem] mt-[4rem] sm:mt-[10rem] sm:mb-[17rem] sm:flex sm:px-[10rem] flex-col">
            <img data-animation-id='slideIn' src="/acheivement_sm.svg" alt="info" className="sm:hidden" />
            <div data-animation-id='slideIn' className="hidden sm:flex font-[500] items-center self-center justify-between w-[100rem]">
                <Image
                    src={'/world.png'}
                    width={350}
                    height={350}
                    alt="glob"
                    className="w-[30rem] rounded-full border"
                />
                <p className="w-[52rem] leading-[3rem]">
                    RabbitMQ Premier Global Services Partner. Recognized by RabbitMQ as a Go-To services partner, AceMQ maintains a global footprint, but with our headquarters in North America, we are widely recognized as the <Link href='https://www.rabbitmq.com/commercial-offerings' className="px-[.5rem] py-[.8rem] bg-[#FF6600] rounded-[.3rem]">Premier North American RabbitMQ Partner.</Link>
                </p>
            </div>
        </section>
    );
}

export default Index;