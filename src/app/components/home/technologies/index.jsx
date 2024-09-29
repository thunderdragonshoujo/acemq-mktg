'use client';
import milestone, { slideIn } from "@/app/Animations/common";
import { useEffect } from "react";
import Image from "next/image";
import MaxContainer from '../../common/maxContainer';
import { useState } from "react";


const Index = () => {
    useEffect(() => {
        milestone()
        slideIn()
    })

    const technologies = [
        {
            icon: '/tech_0.png',
            text: 'Rabbit MQ',
            style: 'h-fit',
        },
        {
            icon: '/tech_4.svg',
            text: 'Kafka',
            style: 'mt-[15rem]',
        },
      
        {
            icon: '/redis.png',
            text: 'Redis',
            style: 'h-fit',
        },
        {
            icon: '/tech_2.svg',
            text: 'Google PubSub',
            style: 'mt-[15rem]',
        },
        {
            icon: '/tech_3.svg',
            text: 'Apache Pulsar',
            style: 'mt-[15rem]',
        },
        {
            icon: '/tech_1.svg',
            text: 'AWS SQS',
            style: 'mt-auto mb-[15rem]',
        },

        {
            icon: '/tech_5.svg',
            text: 'IBM ActiveMQ',
            style: 'mt-auto',
        },
        {
            icon: '/tech_6.svg',
            text: 'AWS',
            style: 'mt-auto mb-[15rem]',
        },
        {
            icon: '/tech_7.svg',
            text: 'Others',
            style: 'mt-auto',
        },
    ]

    return (
        <section className="mt-[3rem] sm:flex sm:px-[10rem]  sm:mt-[1rem] px-[3rem]">
            <MaxContainer>
                <div className="absolute hidden sm:block mt-[3rem] overflow-hidden" data-animation-id='milestone'>
                    <img src="/mile_4.png" className="w-[3.9rem] sm:mt-[3rem]" alt="line" />
                </div>
                <div className="relative" data-animation-id='slideIn'>
                    {/* <img src="/faceL.png" className="filter absolute opacity-[.5]  blend top-[0rem] hidden sm:block z-[-1] right-0 w-[20rem]" alt="" />
                    <img src="/BrainB.webp" className="opacity-[.5] mix-blend-lighten absolute top-[17rem] z-[-1] left-0 w-[20rem] hidden sm:block" alt="" /> */}
                    <div className="flex">
                        <div className="sm:ml-[7rem] w-full sm:mt-[4rem]">
                            <h4 className="text-center text-[3rem] font-[700] mb-[1rem] sm:text-left sm:text-[4.5rem]">Technologies</h4>
                            {/* <Image src='/technologies.png' alt="tech icons" className="w-[100%] hidden sm:block sm:w-[90rem]" width={1346} height={652} /> */}
                            <div className="sm:flex h-[60rem] justify-between w-[100%] hidden">
                                {technologies.map(tech => <Technology key={tech.text} tech={tech} />)}
                            </div>
                            <Image
                                src='/brands_sm.png'
                                alt="tech icons"
                                className="w-[100%] sm:hidden"
                                width={358}
                                height={409}
                            />
                        </div>
                    </div>
                </div>
            </MaxContainer>
        </section>
    );
}

export default Index;


const Technology = ({ tech }) => {
    const [isHovered, setIshovered] = useState(false)
    return (
        <div className={`${tech.style} `}>
            <img
                src={tech.icon}
                width={150}
                onMouseEnter={() => setIshovered(true)}
                onMouseLeave={() => setIshovered(false)}
                height={150}
                className={`cursor-pointer w-[10rem] h-[10rem] service_card_shadow rounded-[2rem] hover:translate-y-[10px] transition-all duration-700`}
                alt="tech icon"
            />
            <p className={`text-center mt-[2rem] max-w-[7.5rem] mx-auto font-[700] transition-all duration-500 ${isHovered ? 'opacity-1' : 'opacity-0'}`}>{tech.text}</p>
        </div>
    )
}
