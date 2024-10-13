'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { slideIn } from "../../../Animations/common";
const Index = () => {

  const icons = [
    {
      image: '/_change_management.png',
      hoveredImage: '/_change_management_hov.png',
      text: 'Change Management',
      containerStyle: 'top-0  left-0',
    },
    {
      image: '/_deployment.png',
      hoveredImage: '/deployment_hov.webp',
      text: 'Deployment',
      containerStyle: 'top-[6rem] left-[15rem]',
    },
    {
      image: '/_disaster_recovery.png',
      hoveredImage: '/disaster.png',
      text: 'Disaster Recovery',
      containerStyle: 'top-[0] left-[30rem]',
    },
    {
      image: '/_QA.png',
      hoveredImage: '/_QA_hov.webp',
      text: 'QA',
      containerStyle: 'top-[0] right-[0]',
    },
    {
      image: '/_team_culture.png',
      hoveredImage: '/_team_culture_hov.png',
      text: 'Team Culture',
      containerStyle: 'bottom-[12rem]',
    },
    {
      image: '/_game_day.png',
      hoveredImage: '/_game_day_hov.png',
      text: 'Game Day',
      containerStyle: 'left-[15rem] bottom-[0]',
    },
    {
      image: '/_documentation.png',
      hoveredImage: '/_documentation_hov.webp',
      text: 'Documentation',
      containerStyle: 'bottom-[22rem] left-[15rem]',
    },
    {
      image: '/_capacity_planning.png',
      hoveredImage: '/_capacity_planing_hov.png',
      text: 'Capacity Planning',
      containerStyle: 'left-[30rem] bottom-[15rem]',
    },
    {
      image: '/_cause_analysis.png',
      hoveredImage: '/_cause_analysis_hov.webp',
      text: 'Root Cause Analysis',
      containerStyle: 'right-[0] bottom-[22rem]',
    },
  ]

  useEffect(() => {
    slideIn()
  }, [])
  return (
    <section className="px-[3rem] sm:px-[10rem]">
      <Info />
      <Compliance />
      <div className="sm:mb-[7rem] mb-[5rem] mt-[5rem] sm:mt-[0]  sm:flex justify-between items-center" data-animation-id='slideIn'>
        <div className="relative hidden sm:block  sm:w-[55rem] sm:h-[55rem]">
          {icons.map(icon => <Icon key={icon.text} icon={icon} />)}
          <p className="absolute top-[18rem] font-[700] right-[12rem]">High Availability</p>
        </div>
        <div className="sm:w-[54rem]">
          <div className="p-[1rem] sm:w-[48rem] relative sm:p-[1.5rem] rounded-[2rem]">
            <h1 className="sm:text-[4.5rem] sm:leading-[5.5rem] leading-[4rem] text-[3rem] font-[700] w-fit"><span className="font-[300]">High Availability</span><br></br> and <span className="text-[#8FD5CC]">Fault Tolerance</span></h1>
          </div>

          <div className="w-[100%]">
            <div className="mt-[2rem] sm:mt-[0]">
              <div className="flex  mb-[2rem]  gap-[1rem]">
                <img src="/tick.svg" className="w-[2rem]" alt="mark icon" />
                <p className="">
                  Achieving high availability is crucial for mission-critical messaging systems. We assist in setting up highly resilient FIPSMQ clusters
                </p>
              </div>
              <div className="flex gap-[1rem] border border-[#8FD5CC] p-[.5rem] rounded-[1rem] sm:translate-x-[4rem] bg-[#232323] sm:w-[50rem]">
                <img src="/tick.svg" className="w-[2rem]" alt="mark icon" />
                <p className="w-[100%]">
                  Our experts implement fault tolerance mechanisms to ensure uninterrupted message processing, even in the event of system failures, while maintaining FIPS compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-[5rem] sm:hidden">
          <p className="absolute font-[700] top-[10rem] right-[5rem]">High Availability</p>
          <Image
            src={'/__high_availability.png'}
            width={372}
            height={280}
            alt="icon"
            className=""
          />
        </div>
      </div>
      <Patterns />
      <div data-animation-id='fadeIn'>
        <Secure />
      </div>
    </section>
  );
};

export default Index;

const Info = () => {
  return (
    <div className="py-[4rem] sm:pt-[10rem] sm:flex sm:flex-col sm:items-center" data-animation-id='slideIn'>
      <p className="text-center hidden sm:block mb-[2rem] sm:w-[85rem] sm:text-[1.5rem]">At <span className="bg-[#8FD5CC] px-[.5rem] py-[.5rem] rounded-[1.5rem] text-[#0D1117] font-[700]"> AceMQ,</span> we specialize in providing comprehensive support services for FIPS, the leading FIPS- compliant message broker. Our team of experts is well-versed in leveraging our FIPSMQ solution, to enable secure and scalable messaging solutions for businesses that require compliance with FIPS (Federal Information Processing Standards) guidelines..
      </p>
      <p className="text-center sm:hidden mb-[2rem] sm:w-[85rem] sm:text-[1.5rem]">At <span className="bg-[#8FD5CC] px-[.5rem] py-[.5rem] rounded-[1.5rem] text-[#0D1117] font-[700]"> AceMQ,</span> Our team of experts is well-versed in leveraging our FIPSMQ solution, to enable secure and scalable messaging solutions for businesses that require compliance with FIPS (Federal Information Processing Standards) guidelines.
      </p>
      <Image
        src="/encriptiion.webp"
        width={300}
        className="sm:hidden w-[100%]"
        height={216}
        alt="encyption"
      />
      <Image
        src="/encription_sm.webp"
        width={1552}
        className="sm:block hidden w-[100rem]"
        height={700}
        alt="encyption"
      />
    </div>
  );
};



const Compliance = () => {
  return (
    <div className="sm:flex sm:gap-[7rem] mt-[3rem] sm:mb-[10rem] mb-[4rem]" data-animation-id='slideIn'>
      <div className="flex-1">

        <div className="p-[1rem] sm:w-fit relative sm:p-[1.5rem] rounded-[2rem] sm:mt-[10rem]">
          <Image
            src={'/lock.png'}
            width={77}
            height={93}
            alt="pad-lock"
            className="w-[4.3rem] absolute opacity-[.4] sm:opacity-[1] sm:block right-[1rem] sm:right-[8rem] sm:w-[5rem]"
          />
          <h1 className="sub-header py-[.7rem] sm:py-[.3rem] rounded-[3rem] mb-[.5rem] px-[2.5rem] sm:px-[3rem] sm:rounded-[3.5rem] border-[1.5px] w-fit">
            FIPS
          </h1>
          <h1 className="sub-header sm:w-[40rem]">
            Compliance and
            <span className="text-[#8FD5CC] mb-[2rem]"> Security</span> Assurance
          </h1>
        </div>

        <div className="w-[100%]">
          <div className="mt-[2rem]">
            <div className="flex border mb-[2rem] border-[#8FD5CC] bg-[#232323] gap-[1rem] p-[.5rem] rounded-[1rem]">
              <img src="/tick.svg" className="w-[2rem]" alt="mark icon" />
              <p className="">
                FIPSMQ is designed from the ground up to meet FIPS 140-2
                security standards, ensuring the highest level of data
                protection and compliance.
              </p>
            </div>
            <div className="flex gap-[1rem] sm:translate-x-[5rem] w-[100%]">
              <img src="/tick.svg" className="w-[2rem]" alt="mark icon" />
              <p className="w-[100%]">
                Our experts help you implement FIPSMQ in a secure and compliant
                manner, safeguarding your sensitive data and meeting regulatory
                requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image
        width={972}
        height={240}
        className="mt-[3rem] sm:w-[65rem]"
        src="/editor.png"
        alt="editor"
      />
    </div>
  );
};

const PlaceTextBesideImage = ({
  header,
  firstParagraph,
  secondParagraph,
  image,
  imageWidth,
  inverse,
  borderColor,
  orangeTick,
}) => {
  return (
    <div
      className={`sm:flex sm:justify-between ${inverse ? "sm:flex-row-reverse" : "flex-row"
        }  sm:mt-[3rem] sm:mb-[5rem] mb-[7rem] sm:w-[100%] sm:items-center`} data-animation-id='slideIn'>
      <div className="sm:w-[50%] overflow-hidden flex flex-col items- sm:items-start">
        {header}
        <div className="mt-[2rem]">
          <div
            className={`flex bg-[#232323] border mb-[2rem] ${borderColor ? borderColor : "border-[#8FD5CC]"
              }  gap-[1rem] p-[.5rem] rounded-[1rem]`}
          >
            <img
              src={orangeTick ? "/orange_tick.svg" : "/tick.svg"}
              className="w-[2rem]"
              alt="mark icon"
            />
            <p className="">{firstParagraph}</p>
          </div>
          <div className="flex gap-[1rem] translate-x-[5rem] w-[100%]">
            <img
              src={orangeTick ? "/orange_tick.svg" : "/tick.svg"}
              className="w-[2rem]"
              alt="mark icon"
            />
            <p className="w-[85%]">{secondParagraph}</p>
          </div>
        </div>
      </div>
      <Image
        className={`${imageWidth}`}
        src={image}
        width={667}
        height={629}
        alt="code snippet picture"
      />
    </div>
  );
};

const Patterns = () => {
  const icons = [
    {
      image: '/engine.png',
      hoveredImage: '/transformation.png',
      text: 'Transformation',
      containerStyle: 'bottom-0 self-center',
    },
    {
      image: '/robot.png',
      hoveredImage: '/channels.png',
      text: 'Channels',
      containerStyle: 'right-[3rem] bottom-[6rem]',
    },
    {
      image: '/monitor.png',
      hoveredImage: '/monitoring.webp',
      text: 'Monitoring',
      containerStyle: 'right-0',
    },
    {
      image: '/sync.png',
      hoveredImage: '/routing.png',
      text: 'Routing',
      containerStyle: 'left-[3rem] bottom-[6rem]',
    },
    {
      image: '/rain_drop.png',
      hoveredImage: '/construction.png',
      text: 'Construction',
      containerStyle: 'left-0',
    },
  ]
  return (
    <div className="sm:flex sm:flex-col sm:items-center sm:mb-[12rem] mb-[4rem]" data-animation-id='slideIn'>
      <h4 className="sm:text-[4rem] text-[2.2rem] sm:w-[55rem] font-[700] text-center">
        Advanced <span className="text-[#8FD5CC]">Messaging</span>
        <span className="text-[#8FD5CC]"> Patterns</span> <span className="sm:block hidden">and</span><span className="sm:hidden">&</span> <span className="font-[400] sm:font-[700]">Optimization</span>
      </h4>
      <p className="text-center my-[1.4rem] max-w-[60rem]">
        Unlock the full potential of RabbitMQ with our advanced messaging
        patterns and optimization techniques. We go beyond basic messaging
        functionality to help you build robust and scalable messaging
        architectures.
      </p>
      <div className="sm:w-[50rem] w-auto sm:h-[40rem] hidden  mt-[6rem] justify-center sm:flex relative">
        <Image
          src={'/message_patterns.png'}
          width={220}
          height={300}
          className="self-start"
          alt="Advance messaging patterns"
        />
        {icons.map((icon, index) => <Icon key={index} icon={icon} />)}
      </div>
      <img src="/advanced_messaging.png" alt="advanced messaging" className="mt-[2rem] sm:hidden" />
    </div>
  );
};

const Icon = ({ icon }) => {
  const [hovered, setIshovered] = useState(false)
  return (
    <div className={`${icon.containerStyle} absolute flex flex-col items-center`}>
      <div className="relative" onMouseEnter={() => setIshovered(true)} onMouseLeave={() => setIshovered(false)}>
        <Image
          src={icon.image}
          width={100}
          height={100}
          className={`rounded-full absolute cursor-pointer sm:w-[8rem]  w-[5rem] ${hovered ? 'opacity-0' : 'opacity-1'} transition-all aspect-square`}
          alt="icon"
        />
        <Image
          src={icon.hoveredImage}
          width={100}
          height={100}
          className={`rounded-full mx-auto ${hovered ? 'opacity-1' : 'opacity-0'} inset-0 cursor-pointer sm:w-[8rem] w-[5rem]  transition-all duration-75 aspect-square`}
          alt="icon"
        />
      </div>
      <p className={`font-[700] mx-auto rounded-full ${hovered ? 'opacity-[1]' : 'opacity-0'} max-w-[10rem] text-center transition-all duration-700 mt-[.5rem]`}>{icon.text}</p>
    </div>
  )
}

const Secure = () => {
  return (
    <div className="flex items-center">
      <img
        src="/secure_section_sm.svg"
        className="w-[120rem] hidden sm:block"
        alt="Load Balancing"
      />
      <img
        src="/secure_section.svg"
        className="w-[35rem] sm:hidden"
        alt="Secure Message"
      />
    </div>
  );
};
