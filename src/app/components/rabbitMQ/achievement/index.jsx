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
            <div className="sm:mt-[4rem] sm:hidden border sm:w-full border-[#FF6600] rounded-[2rem] py-[2rem] sm:py-[4rem] px-[.5rem] flex-col items-center">
                <h3 className="font-[700] mb-[1rem] text-center text-[3rem] leading-[3.2rem] sm:text-[5.7rem] sm:w-[80rem]">
                    <span className="text-[#FF6600]"> RabbitMQ Premier</span> Global Services <span className="text-[#FF6600]">Partner.</span>
                </h3>
                <p className="text-center font-[500] sm:w-[75%]">
                    Recognized by RabbitMQ as a Go-To services partner, AceMQ maintains a global footprint, but with our headquarters in North America, we are widely recognized as the</p>

                <p className="text-center">
                    <Link href='https://www.rabbitmq.com/commercial-offerings' className="px-[.7rem] font-[600] py-[.2rem] bg-[#FF6600] rounded-[.3rem]">Premier North American</Link>
                </p>
                <p className="text-center">
                    <Link href='https://www.rabbitmq.com/commercial-offerings' className="px-[.7rem] font-[600] py-[.2rem] bg-[#FF6600] rounded-[.3rem]">RabbitMQ Partner.</Link>
                </p>
            </div>
            <div data-animation-id='slideIn' className="hidden sm:flex font-[500] items-center self-center justify-between sm:max-w-[120rem] gap-[8rem]">
                <Image
                    src={'/world.png'}
                    width={500}
                    height={500}
                    alt="glob"
                    className="w-[45rem] rounded-full"
                />
                <p className="w-[52rem] leading-[3rem]">
                    RabbitMQ Premier Global Services Partner. Recognized by RabbitMQ as a Go-To services partner, AceMQ maintains a global footprint, but with our headquarters in North America, we are widely recognized as the <Link href='https://www.rabbitmq.com/commercial-offerings' className="px-[.5rem] py-[.8rem] bg-[#FF6600] rounded-[.3rem]">Premier North American RabbitMQ Partner.</Link>
                </p>
            </div>
        </section>
    );
}

export default Index;