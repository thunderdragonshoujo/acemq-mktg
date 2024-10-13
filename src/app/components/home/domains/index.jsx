'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import milestone, { slideIn } from "../../../Animations/common";
import MaxContainer from '../../common/maxContainer'

const Index = () => {
    useEffect(() => {
        milestone()
        slideIn()
    }, [])

    const domains = [
        {
            image: '/_one.svg',
            number: '1',
            name: 'Advanced Architectures',
            title: '(AceEA)',
            role: 'Our team of experts excels in designing and implementing advanced technology enterprise architectures, ensuring your systems are not just up to date, but ahead of the curve.'
        },
        {
            image: '/_two.svg',
            number: '2',
            name: 'Messaging Queuing',
            title: '(AceMQ)',
            role: 'Seamless communication is the backbone of any successful enterprise. Ace8 specializes in crafting robust messaging queuing solutions to optimize your data flow and enhance collaboration.'
        },
        {
            image: '/_three.svg',
            number: '3',
            name: 'DevSecOps',
            title: '(AceEA)',
            role: 'Security is at the core of everything we do. With our DevSecOps practices, we seamlessly integrate security into the development process, providing you with a robust and secure foundation.'
        },
        {
            image: '/_four.svg',
            number: '4',
            name: 'Cloud-Native',
            title: '(AceCloud)',
            role: 'Ace8 pioneers Cloud-Native solutions, leveraging the power of the cloud to enhance scalability, flexibility, and efficiency. Transform your business operations with our expert cloud services.'
        },
        {
            image: '/_five.svg',
            number: '5',
            name: 'Extreme Automation',
            title: 'AceAutomate',
            role: 'Efficiency is key. Ace8 excels in Extreme Automation, optimizing your workflows and processes, allowing your business to operate at maximum productivity.'
        },
        {
            image: '/_six.svg',
            number: '6',
            name: 'Data Management and Solutions',
            title: '(AceData)',
            role: 'Unlock the full potential of your data with Ace8\'s comprehensive Data Management and Solutions. From storage to analytics, we ensure your data is a valuable asset, not a challenge.'
        },
        {
            image: '/_seven.svg',
            number: '7',
            name: 'Support and Incident Management',
            title: '(AceFortify)',
            role: 'Our dedicated support and incident management services guarantee that your systems remain operational, minimizing downtime and ensuring a seamless experience for your users.'
        },
        {
            image: '/_eight.svg',
            number: '8',
            name: 'Microservices/ Code/Development',
            title: '(AceMS)',
            role: 'Agility with our Microservices/Code/Development expertise. Ace8 empowers you to build and scale applications with ease, fostering innovation and rapid development cycles.'
        },
    ]
    return (
        <>
            <DomiansMobile domains={domains} />
            <DomainsDesktop domains={domains} />
        </>
    );
}

export default Index;

const DomiansMobile = ({ domains }) => (
    <section className="sm:hidden mt-[5rem]">
        <div className="px-[3rem] sm:px-[10rem] flex flex-col">
            <div className="">
                <h3 className="font-[700] text-[3rem] mt-[1.2rem]">Ace8’s</h3>
                <div className="w-[12rem] h-[4rem] rounded-[.8rem] opacity-[.8] grid place-content-center bg-[#FF6600]">
                    <p className="text-[2rem]">Full Stack</p>
                </div>
                <h3 className="text-[3rem] font-[700] mb-[1.7rem]">Capabilities</h3>
                <p className="">
                    AceMQ is a subsidiary of a larger, highly specialized full-stack
                    services company, <span className="p-[.4rem] rounded-[.3rem] border-[#FF6600] border">Ace8,</span> therefore we understand how your Message
                    Queing tool fits into your environment as a whole.
                </p>
            </div>
            <div className="flex flex-col mt-[3rem]">
                {domains.map((domain, index) => (
                    <DomainMobile domain={domain} id={index} key={index} />
                ))}
            </div>
            <button className="bg-[#FF6600] self-center mt-[4rem]">
                Ace8’s Services
            </button>
            <Banner />
        </div>
    </section>
);

const DomainsDesktop = ({ domains }) => (
    <section className="hidden sm:flex relative px-[3rem] sm:mt-[5.2rem] sm:px-[10rem] gap-x-[4rem]">
        <div className="">
            <div className="absolute hidden sm:block overflow-hidden" data-animation-id='milestone'>
                <img src="/mille_3.svg" alt="arrow" className="mt-[4.7rem] sm:w-[4.12rem]" />
            </div>
            <div className="">
                <div className="flex flex-col sm:ml-[7rem]" >
                    <div className="" data-animation-id='slideIn'>
                        <h3 className="font-[700] text-[2rem] mt-[1.2rem]">Ace8’s</h3>
                        <div className="w-[12rem] h-[4rem] rounded-[.8rem] opacity-[.8] grid place-content-center bg-[#FF6600]">
                            <p className="text-[2rem]">Full Stack</p>
                        </div>
                        <h3 className="text-[3rem] font-[700] my-[.5rem]">Capabilities</h3>
                        <p className="">AceMQ is a subsidiary of a larger, highly specialized full-stack services company,  Ace8,  therefore we understand how your Message Queing tool fits into your environment as a whole and thus we can advise and support you beyond the scope of your tool of choice.</p>
                    </div>

                    <div className="h-[93rem] grid place-content-center relative" data-animation-id='slideIn'>
                        <Image src='/center_logo.png' className="w-[45rem]" width={550} alt="logo" height={178} />
                        {domains.map((domain, index) => <DomainDesktop domain={domain} key={index} id={index} />)}
                    </div>
                    <Link href={'https://www.ace8.io/'} className="mx-auto hover:scale-[.9] transition-all duration-500">
                        <button data-animation-id='slideIn' className="px-[2.5rem] hover:scale-[1.1] transition-all duration-500 border border-[#FF6600] self-center mt-[4rem]">Ace8’s Services</button>
                    </Link>
                    <Banner />
                </div>
            </div>
        </div>
    </section>
)

const DomainMobile = ({ domain, id }) => (
    <div className={`w-[230px] flex flex-col ${id % 2 ? 'self-end' : 'self-start'}`} data-animation-id='slideIn'>
        <div className={`flex items-end gap-[1.5rem] ${id % 2 ? 'self-end' : 'self-start'} w-fit`}>
            <Image 
                src={domain.image} 
                width={115} 
                height={90} 
                className={`${id % 2 ? 'self-end' : 'self-start'} w-[5rem] mb-[.5rem]`} 
                alt="icon" />
                <h3 className="text-[4rem] font-[700] text-[#FF6600] opacity-[.3]">
                    {domain.number}
                </h3>
        </div>
        <p className={`text-[1.4rem] font-[700] ${id % 2 ? 'text-right' : 'text-left'}`}>{domain.name}</p>
        <p className={`text-[1.6rem] font-[700] text-[#FF6600] ${id % 2 ? 'text-right' : 'text-left'}`}>{domain.title}</p>
    </div>
)

const DomainDesktop = ({ domain, id }) => {
    const returnAbsoluteValue = (index) => {
        switch (index) {
            case 0:
                return "top-[10rem] left-[0]";
            case 1:
                return "top-[0] left-[30rem]";
            case 2:
                return "top-[0] right-[30rem]";
            case 3:
                return "top-[10rem] right-[0]";
            case 4:
                return "top-[47rem] left-[0]";
            case 5:
                return "top-[57rem] left-[30rem]";
            case 6:
                return "top-[57rem] right-[30rem]";
            case 7:
                return "top-[47rem] right-[0]";
            default:
                break;
        }
    };
    return (
        <div
            className={`w-[25rem] flex flex-col absolute ${returnAbsoluteValue(
                id
            )} mt-[3rem]`}
        >
            <div className="flex gap-x-[1rem] mb-[2rem] items-center">
                <Image
                    src={domain.image}
                    width={115}
                    height={90}
                    className="w-[7rem]"
                    alt="icon"
                />
                <h3 className="text-[6rem] font-[700] text-[#FF6600] opacity-[.4]">
                    {domain.number}
                </h3>
            </div>
            <p className={`text-[1.8rem] w-[23rem] font-[700]`}>{domain.name}</p>
            <p className="text-[#FF6600] text-[1.8rem] font-[700]">{domain.title}</p>
            <p className="mt-[.8rem] text-[1.4rem]">{domain.role}</p>
        </div>
    );
};

const Banner = () => (
    <div className="mt-[5rem]">
        <div className="border border-[#FF6600] p-[1rem] sm:p-[3rem] rounded-[.8rem]  sm:flex sm:justify-between sm:mt-[9rem]" data-animation-id='slideIn'>
            <div className="flex flex-col sm:w-[58rem]">
                <h3 className="font-[400] capitalize text-[1.4rem] sm:text-[2.2rem] text-center sm:mb-[.5rem] sm:text-left mb-[1.3rem]"><span className="font-[700] text-[#FF6600]">RabbitMQ</span> Enterprise <span className="font-[700]">support</span></h3>
                <h3 className="text-center text-[2.7rem] sm:text-[3.5rem] sm:leading-[4rem]  font-[700] sm:text-left">How we <span className="font-[400]">Saved Millions</span> in <span className="text-[#FF6600]">Downtime</span> for a <span className="text-[#FF6600]">Global</span> <span className="font-[400]">Retail Giant</span></h3>
                <p className="hidden sm:block">Learn how AceMQ’s RabbitMQ Enterprise support saved a global Retail Giant millions of dollars in downtime, while saving them thousands in hiring costs.</p>

                <Link href='/support' className="mx-auto sm:mx-0">
                    <button className="border border-[#FF6600] self-center mt-[2rem]">Learn More</button>
                </Link>
            </div>
            <Image
                src="/room.webp"
                className="w-[40rem] hidden sm:block"
                width={491}
                height={384}
                alt="store"
            />
        </div>

    </div>
);
