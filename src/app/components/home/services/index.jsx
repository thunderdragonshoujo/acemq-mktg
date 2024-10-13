'use client';
import Image from "next/image";
import milestone, { slideIn } from "../../../Animations/common";
import split from "../../../Animations/text";
import { useEffect } from "react";
import MaxContainer from '../../common/maxContainer'
const Index = () => {
    useEffect(() => {
        milestone()
        slideIn()
    }, [])
    const cards = [
        {
            image: '/assesment.svg',
            name: <h3 className="text-[1.8rem] sm:w-[32rem]  sm:text-[3.5rem] mb-[1rem] font-[700]"><span className="font-[400]">Assessments</span> & <span className="text-[#8FD5CC]">Advisory</span> Roles</h3>,
            text: 'We assess your environment on client connectivity, application code, best practices, and current design/development concepts including agile and continuous integration.',
        },
        {
            image: '/consulting.svg',
            name: <h3 className="text-[1.8rem] sm:w-[32rem]  sm:text-[3.5rem] mb-[1rem] font-[700]"><span className="text-[#8FD5CC]">Consulting</span> & <span className="font-[400]">Troubleshooting</span></h3>,
            text: 'Immediate access to Senior MQ Expertise. We have MQ experts on hand to troubleshoot production issues or to consult you on your environment.',
        },
        {
            image: '/support.svg',
            name: <h3 className="text-[1.8rem] sm:w-[32rem]  sm:text-[3.5rem] mb-[1rem] font-[700] text-[#8FD5CC]">Support</h3>,
            text: 'Customized Operation and Support Models including Service Level Agreements (SLAs), and dedicated Support Specialists.',
        },
        {
            image: '/training.svg',
            name: <h3 className="text-[1.8rem] sm:w-[32rem] sm:text-[3.5rem] mb-[1rem] font-[700]"><span className="text-[#8FD5CC]">Training</span> & <span className="font-[400]">Mentorship</span></h3>,
            text: 'We provide training, coaching, and advisory on all Messaging and Queuing toolsets. Our goal is to enable your team.',
        },
    ]

    const cardsLG = [
        {
            image: '/consulting.svg',
            name: <h3 className="text-[1.8rem] sm:w-[32rem]  sm:text-[3.5rem] mb-[1rem] font-[700]"><span className="text-[#8FD5CC]">Consulting</span> & <span className="font-[400]">Troubleshooting</span></h3>,
            text: 'Immediate access to Senior MQ Expertise. We have MQ experts on hand to troubleshoot production issues or to consult you on your environment.',
        },
        {
            image: '/support.svg',
            name: <h3 className="text-[1.8rem] sm:w-[32rem]  sm:text-[3.5rem] mb-[1rem] font-[700] text-[#8FD5CC]">Support</h3>,
            text: 'Personal Protective Equipment (PPE): Includes helmets, gloves, boots, safety goggles, and high-visibility vests for workers.Scaffolding and Guardrails: For worker safety during construction at height Dust Control Systems: Water sprayers or dust extractors to manage dust created during excavation or concrete cutting.',
        },
        {
            image: '/training.svg',
            name: <h3 className="text-[1.8rem] sm:w-[32rem] sm:text-[3.5rem] mb-[1rem] font-[700]"><span className="text-[#8FD5CC]">Training</span> & <span className="font-[400]">Mentorship</span></h3>,
            text: 'We provide training, coaching, and advisory on all Messaging and Queuing toolsets. Our goal is to enable your team.',
        },
    ]
    return (
        <section className="px-[3rem] relative mb-[3rem] sm:px-[10rem] sm:mt-[8rem]">
            <div className="hidden h-[0] overflow-hidden absolute sm:block mt-[14.5rem]" data-animation-id='milestone'>
                <img src="/mille_2.svg" className="w-[4.65rem]" alt="arrow" />
            </div>
            <div className="sm:flex">
                <div className="sm:flex sm:ml-[7rem] sm:mt-[6rem] sm:justify-between sm:w-[100%]">
                    <div className="" data-animation-id='slideIn'>
                        <h2 className="text-center text-[3.2rem] sm:text-[7.3rem] sm:mt-[5rem] mb-[1rem] sm:text-left font-[700]"><span className="text-[#8FD5CC] font-[400]">MQ</span> Services</h2>
                        <p className="hidden sm:block w-[40rem]">We offer a range of services to address all your messaging and queuing requirements.Our team of seasoned professionals excels in delivering top-notch solutions to enhance the reliability, scalability, and performance of your MQ systems” </p>
                    </div>
                    <div className="sm:block hidden">
                        <Cards card={{ image: '/assesment.svg', name: <h3 className="text-[1.8rem] sm:w-[32rem]  sm:text-[3.5rem] mb-[1rem] font-[700]"><span className="font-[400]">Assessments</span> & <span className="text-[#8FD5CC]">Advisory</span> Roles</h3>, text: 'Assessments of existing and planned environments based on tool best practices and years of industry expertise. We assess your environment on client connectivity, application code, best practices, and current design/development concepts including agile and continuous integration.' }} width={'sm:w-[40rem]'} containerStyle={'sm:pr-[10rem]'} />
                    </div>
                </div>
            </div>

            <div className="sm:ml-[7rem] sm:flex hidden mt-[2.3rem] sm:mt-[3.2rem] justify-between">
                {cardsLG.map((card, index) => <Cards card={card} key={index} containerStyle={'sm:w-[32%]'} width={'sm:w-[95%]'} />)}
            </div>

            <div className="flex flex-col mb-[2.5rem] gap-y-[1.2rem] sm:hidden">
                {cards.map((card, index) => (<Cards card={card} key={index} />))}
            </div>
        </section>
    );
}

export default Index;


const Cards = ({ card, width, containerStyle }) => (
    <div className={`flex ${containerStyle} sm:flex-col items-start border sm:py-[3rem] sm:px-[3rem] gap-x-[1.2rem] px-[1.2rem] rounded-[1.5rem] border-[#444444] bg-[#11151A] py-[1.5rem]`}>
        <img src={card.image} className="sm:w-[8rem] hidden sm:block mb-[1.5rem]" alt="card icon" />
        <div className="">
            {card.name}
            <p className={`${width} text-[1.4rem]`}>{card.text}</p>
        </div>
    </div>
)