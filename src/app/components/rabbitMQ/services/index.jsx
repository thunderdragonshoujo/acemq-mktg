'use client'
import { useState } from "react";

const Index = () => {
    const cards = [
        {
            header: 'Troubleshooting',
            paragraph: 'Our Consultants have seen it all. With years of RabbitMQ product and environment support our engineers our prepared to solve your RabbitMQ challenges.',
            collapse: true,
            collapsed: [
                {
                    header: 'Production Outages and Issues',
                    text: 'Problem Resolution and RCA to determine how to prevent reoccurring issues'
                },
                {
                    header: 'Performance Issues',
                    text: 'Comprehensive monitoring and testing to identify performance blockers'
                }
            ]
        },
        {
            header: 'Consulting &  Assessment',
            paragraph: 'Coming equip with extensive experience with a multitude of environments and RabbitMQ installations, our consultants can ensure that your environment is in good health and provide recommendations to reach a best practice state.',
            collapse: true,
            collapsed: [
                {
                    header: 'Performance Optimization',
                    text: 'Tune RabbitMQ to meet Client’s Requirements around Sizing, Security, Scale, Setup,Architecture, and Load balancing in accordance with RabbitMQ Best Practices'
                },
                {
                    header: 'Migrations and Upgrades',
                    text: 'Migrations on to RabbitMQ or off. Current Version Upgrades'
                },
                {
                    header: 'Mentorship and Knowledge Transfer',
                    text: 'Document all findings and recommendations and empower your team to reach future state and maintain and operate your environment'
                },
            ]
        },
        {
            header: 'Support Services',
            paragraph: 'Operation and Sustainment of your environment. We provide customized solutions to supply you with the support you need. Including Service Level Agreements, Response and Resolution Times, and dedicated support specialists.',
            collapse: true,
            collapsed: [
                {
                    header: 'Comprehensive Support',
                    text: 'A complete customized solution tailored to your environment and business demands. Includes troubleshooting, deployments, and operations and sustainment. Tied to dedicated resources and SLAs'
                },
                {
                    header: 'Commercial Support',
                    text: 'Support of RabbitMQ codebase including custom solutions as well as proprietary patches, fixes, and general support.'
                },
                {
                    header: 'Managed Service',
                    text: 'Managed solution of RabbitMQ environment and services'
                },
            ]
        },
        {
            header: 'Training & Mentorship',
            paragraph: 'We provide training, coaching, and advisory on all Messaging and Queuing toolsets. Our goal is to enable your team.',
            collapse: true,
            collapsed: [
                {
                    header: 'Mentorship and Enablement',
                    text: 'Knowledge sharing and hand-holding to empower members of your team to be comfortable and self-sufficient with RabbitMQ'
                },
                {
                    header: 'Classroom Lead Training',
                    text: 'RabbitMQ end-to-end training to enable your team to be proficient in all crucial RabbitMQ concepts'
                },
            ]
        },
    ];
    return (
        <section className="px-[3rem] sm:px-[10rem] mt-[6rem] sm:py-[10rem] sm:mb-[50rem] relative">
            <div className="flex flex-col gap-y-[2rem] sm:w-[85%] sm:justify-between z-[7] sm:flex-row sm:absolute">
                {cards.map((card, i) => <Card id={i} card={card} key={i} />)}
            </div>
        </section>
    );
}

export default Index;

const Card = ({ id, card }) => {
    const [cardCollapse, setCardCollapse] = useState(card);

    function toggleCardOpen() {
        setCardCollapse(prevCardCollapse =>  ({...prevCardCollapse, collapse: !prevCardCollapse.collapse}))
    }

    return (
        <div className={`px-[1.8rem] rounded-[2rem] sm:px-[1rem] h-fit ${id % 2 ? 'self-end sm:self-auto' : 'self-start sm:self-auto'} w-fit rounded-[2rem] bg-[#0D1117] service_card_shadow flex flex-col items-center pb-[1.8rem] relative`}>
            <img src="/troubleshooting.svg" className="absolute top-[-3rem] sm:top-[-7rem] sm:w-[15rem] sm:h-[15rem] w-[6rem] h-[6rem]" alt="troubleshoot icon" />
            <div className="mt-[6rem] w-[15rem] sm:mt-[12.3rem] text-center sm:w-[25rem] overflow-hidden">
                <h4 className="font-[700] mb-[1rem] text-[1.5rem] sm:text-[3rem] sm:mb-[3rem]">{cardCollapse.header}</h4>
                <p className="text-[1.3rem]">{card.paragraph}</p>
                <div className={`sm:flex flex-col sm:gap-[2rem] transition-max-height duration-500 ease-in-out ${!cardCollapse.collapse ? 'max-h-[65rem]' : 'max-h-0'}`}>
                    {
                        cardCollapse.collapsed.map((card, index) => (
                            <div className="mt-[3rem]" key={index}>
                                <h3 className="text-[1.6rem] font-[700] text-[#FB8817]">{card.header}</h3>
                                <p className="">{card.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <img src="/down-arrow.svg" onClick={() => toggleCardOpen(id)} className={`w-[3rem] ${cardCollapse.collapse ? '':'rotate-[180deg]' } absolute bottom-[-1.5rem] hidden sm:block cursor-pointer`} alt="down-arrow" />
        </div>
    )
}
