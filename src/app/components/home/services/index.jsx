'use client';
import Image from "next/image";
import milestone, { fadeIn } from "@/app/Animations/common";
import split from "@/app/Animations/text";
import { useEffect } from "react";
const Index = () => {
    useEffect(() => {
        milestone()
        fadeIn()
    }, [])
    const cards = [
        {
            image: '/assesment.svg',
            name: 'Assessments & Advisory Roles',
            text: 'We assess your environment on client connectivity, application code, best practices, and current design/development concepts including agile and continuous integration.',
        },
        {
            image: '/consulting.svg',
            name: 'Consulting & Troubleshooting',
            text: 'Immediate access to Senior MQ Expertise. We have MQ experts on hand to troubleshoot production issues or to consult you on your environment.',
        },
        {
            image: '/support.svg',
            name: 'Support',
            text: 'Customized Operation and Support Models including Service Level Agreements (SLAs), and dedicated Support Specialists.',
        },
        {
            image: '/training.svg',
            name: 'Training & Mentorship',
            text: 'We provide training, coaching, and advisory on all Messaging and Queuing toolsets. Our goal is to enable your team.',
        },
    ]

  const cardsLG = [
    {
      image: "/consulting.svg",
      name: "Consulting & Troubleshooting",
      text: "Immediate access to Senior MQ Expertise. We have MQ experts on hand to troubleshoot production issues or to consult you on your environment.",
    },
    {
      image: "/support.svg",
      name: "Support",
      text: "Customized Operation and Support Models including Service Level Agreements (SLAs), and dedicated Support Specialists.",
    },
    {
      image: "/training.svg",
      name: "Training & Mentorship",
      text: "We provide training, coaching, and advisory on all Messaging and Queuing toolsets. Our goal is to enable your team.",
    },
  ];
  return (
    <section className="px-[3rem] sm:px-[10rem] sm:mt-[8rem]">
      <div className="relative sm:flex">
        <img
          src="/mille_2.svg"
          className="w-[4rem] hidden absolute sm:block mt-[9rem]"
          alt="scroll"
        />
        <div className="sm:flex sm:ml-[7rem] sm:justify-between sm:w-[100%]">
          <div className="">
            <h2 className="text-center text-[2.5rem] sm:text-[6.5rem] mt-[5rem] mb-[1rem] sm:text-left font-[700]">
              <span className="text-[#8FD5CC] font-[400]">MQ</span> Services
            </h2>
            <p className="hidden sm:block w-[54rem]">
              We offer a range of services to address all your messaging and
              queuing requirements.Our team of seasoned professionals excels in
              delivering top-notch solutions to enhance the reliability,
              scalability, and performance of your MQ systems”{" "}
            </p>
          </div>
          <div className="sm:block hidden">
            <Cards
              card={{
                image: "/assesment.svg",
                name: "Assessments & Advisory Roles",
                text: "Assessments of existing and planned environments based on tool best practices and years of industry expertise. We assess your environment on client connectivity, application code, best practices, and current design/development concepts including agile and continuous integration.",
              }}
              width={"sm:w-[48rem]"}
            />
          </div>
        </div>
      </div>

                <div className="sm:ml-[7rem] sm:flex hidden mt-[2.3rem] justify-between">
                    {cardsLG.map((card, index) => <Cards card={card} key={index} width={'sm:w-[30rem]'} />)}
                </div>

                <div className="flex flex-col gap-y-[1.2rem] sm:hidden">
                    {cards.map((card, index) => (<Cards card={card} key={index} />))}
                </div>
            </div>
        </section>
    );
}

export default Index;

const Cards = ({ card, width }) => (
  <div className="flex sm:flex-col items-start border sm:py-[3rem] sm:px-[3rem] gap-x-[1.2rem] px-[.8rem] rounded-[1.5rem] border-[#444444] bg-[#11151A] py-[1.3rem]">
    <img src={card.image} className="sm:w-[8rem] mb-[1.5rem]" alt="card icon" />
    <div className="">
      <h3 className="text-[1.8rem] sm:w-[32rem]  sm:text-[3.5rem] mb-[1rem] font-[700]">
        {card.name}
      </h3>
      <p className={`${width}  text-[1.4rem]`}>{card.text}</p>
    </div>
  </div>
);
