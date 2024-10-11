'use client'
import Image from "next/image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { slideIn } from "@/app/Animations/common";
import { useEffect } from "react";
const Index = () => {
    useEffect(() => {
        slideIn()
    }, [])
    const responsive = {
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1
        }
    }
    const partners = [
        {
            image: '/rabbit.png',
            width: 'w-[18rem] h-[3rem]'
        },
        {
            image: '/broadcom.png',
            width: 'w-[18rem] h-[3rem]'
        },
        {
            image: '/aws.png',
            width: 'w-[9rem] h-[6rem]'
        },
        {
            image: '/redis_text_trans.png',
            width: 'w-[15rem] h-[5rem]'
        },
    ]

    return (
        <section className="px-[3rem] pb-[5rem] sm:px-[10rem] mt-[8rem]">
            <div className="sm:bg-black rounded-[2rem] bg-[#080A0C] p-[1rem] sm:flex sm:pr-[5rem] sm:justify-between" data-animation-id='slideIn'>
                <h4 className="font-[700] text-[2.3rem] sm:text-[3rem] sm:w-[48rem] text-center sm:text-start sm:p-[5rem]">Strategically Aligned with <span className="text-[#FF6600]">Industry Leaders</span></h4>

                <div className="sm:flex hidden items-center gap-[2rem]">
                    {partners.map((item, i) => <Image src={item.image} key={i} className={`${item.width}`} width={150} height={200} alt="partner icon" />)}
                </div>
                <div className="mt-[3rem] sm:hidden">
                    <Carousel showDots={true} autoPlay={true} autoPlaySpeed={1000} infinite={true} removeArrowOnDeviceType={["tablet", "mobile", 'desktop']} responsive={responsive}>
                    {partners.map((item, i) => <Image src={item.image} key={i} className={`${item.width}`} width={150} height={200} alt='partner icon' />)}
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

export default Index;