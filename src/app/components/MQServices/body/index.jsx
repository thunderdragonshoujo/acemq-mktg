'use client'
import Image from "next/image";
import PlaceTextBesideImage from '../../common/placeTextBesideImage'
import { useEffect, useState } from "react";
import { slideIn, fadeIn } from "@/app/Animations/common";
const Index = () => {
    useEffect(() => {
        slideIn()
        fadeIn()
    }, [])
    return (
        <section className="px-[3rem] sm:px-[10rem]">
            <Info />
            <Technologies style={'hidden sm:flex'} />
            <Services />
            <SevicesItems />
            <Values />
            <Assesment />
            <Support />
        </section>
    );
}

export default Index;

const Info = () => {
    return (
        <div data-animation-id='slideIn' className="py-[4rem] sm:pt-[10rem] sm:flex sm:flex-col sm:items-center">
            <p className="text-center mb-[2rem] sm:w-[100rem]">At <span className="bg-[#8FD5CC] px-[1rem] py-[.5rem] rounded-[1.5rem] text-[#0D1117] font-[700]">AceMQ</span> we have developed a comprehensive practice around message brokers. Our engineers possess extensive experience working closely with message broker products, including RabbitMQ. Their in-depth knowledge and architectural understanding of Message Brokers allow us to seamlessly integrate it into your unique technology stack. As an internationally accredited partner of many of the top Message Brokers, we are the go-to choice for all your message broker service needs.</p>
            <Image src='/MQservice_codesnippet.png' height={480} className="hidden b w-[100rem] sm:block" width={1552} alt="code" />
        </div>
    )
}

const Services = () => {
    return (
        <div className="sm:flex sm:flex-row-reverse sm:gap-[10rem] sm:justify-between sm:mb-[10rem] mb-[5rem]" data-animation-id='slideIn'>
            <div className="sm:w-[48rem] sm:mt-[4rem]">
                <h2 className="sub-header hidden sm:block text-center sm:text-left"><span className="font-[400] sm:px-[2rem] px-[2rem]
                py-[1rem] sm:py-[1rem] bg-[#8FD5CC] text-[#232323] sm:rounded-[1.2rem] rounded-[1.9rem]">Our</span><br></br>Services</h2>
                <p className="hidden sm:block sm:w-[43rem] mt-[1rem]">Our consultants have encountered and successfully resolved a wide range of challenges related to message brokers. With years of experience in supporting message broker products and environments, our engineers are well-prepared to tackle any issue you may face.</p>
            </div>
            <div className="sm:hidden mx-auto w-fit">
                <h2 className="bg-[#8FD5CC] text-[#232323] mx-auto rounded-[2rem] text-[4rem] w-fit px-[2rem] py-[.3rem]">Our</h2>
                <h2 className="text-[4.5rem] font-[700]">Services</h2>
            </div>

            <Image src='/flow.webp' className="mt-[2rem] hidden sm:block sm:w-[70rem] self-start" width={700} height={400} alt="flow chat" />
            <Image src='/messaging_products.png' className="mt-[2rem] sm:hidden sm:w-[70rem] self-start" width={700} height={400} alt="flow chat" />
        </div>
    )
}

const SevicesItems = () => {
    return (
        <div className="" data-animation-id='slideIn'>
            <div className="flex justify-between  mb-[3rem]">
                <Image width={640} className="w-[60rem] sm:w-[50rem] hidden sm:block" height={440} src='/MQ_service_1.svg' alt="service" />
                <Image width={640} className="sm:hidden block" height={440} src='/MQ_services_sm.png' alt="service" />

                <Image width={730} className="hidden sm:block w-[50rem]" height={350} src='/MQ_service_1_flowchart.svg' alt="service" />
            </div>
            <div className="flex justify-between flex-row-reverse">
                <Image width={640} className="sm:hidden block" height={440} src='/support_services.png' alt="service" />
                <Image width={640} height={440} className="sm:block hidden w-[50rem] sm:mt-[10rem]" src='/MQ_service_2.svg' alt="service" />
                <div className="flex-1 flex items-end justify-center">
                    <Image width={300} className="hidden sm:block" height={300} src='/MQ_service_2_flowchart.svg' alt="service" />
                </div>
            </div>
        </div>
    )
}

const Technologies = ({ style }) => {
    const technologies = [
        {
            src: "/tech_1.svg",
            align: "self-center",
            text: 'AWS SQS'
        },
        {
            src: "/tech_2.svg",
            align: "self-end",
            text: 'Google PubSub'
        },
        {
            src: "/redis.png",
            align: "self-start",
            text: 'Redis',
        },
        {
            src: "/tech_3.svg",
            align: "self-center",
            text: 'Apache Pulsar'
        },
        {
            src: "/tech_4.svg",
            align: "self-start",
            text: 'Kafka'
        },
        {
            src: "/tech_5.svg",
            align: "self-end",
            text: 'Apache ActiveMQ'
        },
        {
            src: "/tech_6.svg",
            align: "self-center",
            text: 'AWS SQS'
        },
        {
            src: "/azure_service_bus.png",
            align: "self-end",
            text: 'Azure Service Bus'
        },
        {
            src: "/ibm_mq.png",
            align: "self-start",
            text: 'IBM MQ'
        },
        {
            src: "/active_mq.png",
            align: "self-center",
            text: 'ActiveMQ'
        },
        {
            src: "/tech_7.svg",
            align: "self-end",
            text: 'Others'
        },
    ];
    return (
        <div className={`flex flex-col sm:mt-[5rem] my-[3rem] ${style} items-center sm:mb-[8rem]`} data-animation-id='slideIn'>
            <h2 className="sm:text-[5.3rem] text-[3rem] font-[700] text-center mb-[2rem]">
                Our
                <span className="text-[#FF6600]"> Technologies</span>
            </h2>
            <Image
                src="/tech_sm.png"
                width={300}
                className="sm:hidden"
                height={216}
                alt="technologies"
            />

            <div className="hidden sm:flex w-[100%] justify-between mt-[4rem] mb-[3rem] h-[20rem]">
                {technologies.map((icon, index) => (
                    <Technology
                        key={index}
                        tech={icon}
                    />))}
            </div>
        </div>
    );
};

const Values = () => {
    return (
        <div className="sm:mt-[10rem] mt-[5rem] flex flex-col items-center" data-animation-id='slideIn'>
            <h1 className="sm:text-[6rem] text-[3rem] text-center sm:mb-[4rem] mb-[2rem] sm:w-[55rem] font-[700] sm:self-center">Our <span className="text-[#8FD5CC]">Differentiator</span> & <span className="font-[400]">Value</span></h1>
            <Image width={1150} height={700} src='/values.svg' className="w-[100rem] hidden sm:block" alt="values" />
            <Image width={371} height={203} src='/troubleshooting_sm.png' className="sm:hidden" alt="values" />
        </div>
    )
}


const Assesment = () => {
    return (
        <div className="flex flex-col items-center sm:mt-[10rem] mt-[5rem]" data-animation-id='slideIn'>
            <Image src="/MQ_assesment.svg" width={1000} height={900} className="w-[120rem]  hidden sm:block" alt="tree" />
            <h4 className="text-[3.5rem] sm:text-[4.5rem] font-[700] sm:hidden text-center w-[25rem]"><span className="font-[400]">Consulting</span> & Assessment</h4>
            <Image src="/MQ_assessment_sm.svg" width={340} height={620} className="w-[35rem]  sm:hidden" alt="tree" />
        </div>
    )
}

const Technology = ({ tech }) => {
    const [isHovered, setIshovered] = useState(false)
    return (
        <div className={`${tech.align} relative`}>
            <img
                src={tech.src}
                width={150}
                onMouseEnter={() => setIshovered(true)}
                onMouseLeave={() => setIshovered(false)}
                height={150}
                className={`cursor-pointer w-[9rem] h-[9rem] service_card_shadow rounded-[2rem] hover:translate-y-[10px] transition-all duration-700`}
                alt="tech icon"
            />
            <p className={`text-center mt-[2rem] absolute w-[100%] max-w-[8rem] mx-auto font-[700] transition-all duration-500 ${isHovered ? 'opacity-1' : 'opacity-0'}`}>{tech.text}</p>
        </div>
    )
}


const Support = () => {
    return (
        <div className="mt-[5rem]" data-animation-id='slideIn'>
            <PlaceTextBesideImage header={<h4 className="sm:text-[5.5rem] text-[3rem] font-[700] text-center"><span className="text-[#8FD5CC]">Support</span> & Services</h4>} firstParagraph={'Managed Service:  Fully managed message broker environment and services, providing peace of mind and freeing up your team\'s resources.'} secondParagraph={'Comprehensive Support:  This includes to operations and oversight including dedicated resources and service level agreements (SLAs)'} imageWidth={'hidden sm:block w-[55rem]'} thirdParagraph={'Comprehensive support:  Tailored solutions addressing your environment and business demands, covering troubleshooting, deployments, operations, and sustainment. This includes dedicated resources and service level agreements (SLAs).'} image={'/MQ_service_board.png'} subHeader={' Our support offerings include:'} />
        </div>
    )
}