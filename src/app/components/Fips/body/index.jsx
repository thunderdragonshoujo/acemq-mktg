'use client'
import Image from "next/image";
import { useEffect } from "react";
import { slideIn } from "@/app/Animations/common";
const Index = () => {
  useEffect(() => {
    slideIn()
  }, [])
  return (
    <section className="px-[3rem] sm:px-[10rem]">
      <Info />
      <Compliance />
      <PlaceTextBesideImage
        header={
          <h1 className="sub-header sm:w-[35rem]">
            <span className="font-[400]">High Availability</span> and{" "}
            <span className="text-[#8FD5CC]">Fault Tolerance</span>
          </h1>
        }
        image={"/fault.webp"}
        firstParagraph={
          "Achieving high availability is crucial for mission-critical messaging systems. We assist in setting up highly resilient FIPSMQ clusters"
        }
        secondParagraph={
          "Our experts implement fault tolerance mechanisms to ensure uninterrupted message processing, even in the event of system failures, while maintaining FIPS compliance."
        }
        imageWidth={"sm:w-[55rem] w-[30rem] mt-[2.5rem] sm:mt-[0]"}
        inverse={true}
      />
      <Patterns />
      <Secure />
    </section>
  );
};

export default Index;

const Info = () => {
  return (
    <div className="py-[4rem] sm:pt-[10rem] sm:flex sm:flex-col sm:items-center" data-animation-id='slideIn'>
      <p className="text-center mb-[2rem] sm:w-[85rem] sm:text-[1.5rem]">At <span className="bg-[#8FD5CC] px-[.5rem] py-[.5rem] rounded-[1.5rem] text-[#0D1117] font-[700]"> AceMQ,</span> we specialize in providing comprehensive support services for FIPS, the leading FIPS- compliant message broker. Our team of experts is well-versed in leveraging our FIPSMQ solution, to enable secure and scalable messaging solutions for businesses that require compliance with FIPS (Federal Information Processing Standards) guidelines..
      </p>
      <Image
        src="/encriptiion.webp"
        width={300}
        className="sm:hidden"
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
            className="w-[6rem] absolute right-0"
          />
          <h1 className="sub-header py-[.7rem] sm:py-[.3rem] rounded-[3rem] mb-[.5rem] px-[2.5rem] sm:px-[3rem] sm:rounded-[3.5rem] border-[1.5px] w-fit">
            FIPS
          </h1>
          <h1 className="sub-header sm:w-[40rem]">
            Compliance and{" "}
            <span className="text-[#8FD5CC] mb-[2rem]">Security</span> Assurance
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
      <div className="hidden sm:block flex-1">
        <Image width={972} height={356} src="/Alma_care.webp" alt="alma care" />
        <Image
          width={972}
          height={240}
          className="mt-[3rem]"
          src="/editor.png"
          alt="editor"
        />
      </div>
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
  return (
    <div className="sm:flex sm:flex-col sm:items-center sm:mb-[12rem] mb-[4rem]" data-animation-id='slideIn'>
      <h4 className="sm:text-[4rem] text-[2.2rem] sm:w-[55rem] font-[700] text-center">
        Advanced <span className="text-[#8FD5CC]">Messaging</span>
        <span className="text-[#8FD5CC]"> Patterns</span> and <span className="">Optimization</span>
      </h4>
      <p className="text-center my-[1.4rem] max-w-[60rem]">
        Unlock the full potential of RabbitMQ with our advanced messaging
        patterns and optimization techniques. We go beyond basic messaging
        functionality to help you build robust and scalable messaging
        architectures.
      </p>
      <Image
        src="/advanced_down.svg"
        className="w-[45rem] mt-[2rem]"
        width={376}
        height={296}
        alt="patterns image"
      />
    </div>
  );
};

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
