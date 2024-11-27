'use client';
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import PlaceTextBesideImage from "../../common/placeTextBesideImage";
import Link from "next/link";
import { fadeIn, slideIn } from "@/app/Animations/common";
const Index = () => {
  useEffect(() => {
    fadeIn()
    slideIn()
  }, [])
  return (
    <section className="px-[3rem] sm:px-[10rem]">
      <Info />
      <Technologies style={'hidden sm:flex'} />

      <PlaceTextBesideImage
        header={
          <>
            <h1 className="text-[3rem] w-fit border sm:mb-[1rem] pt-[.5rem] sm:py-[1rem] px-[2rem] py-[1rem] rounded-[3rem] leading-[4rem] font-[700] sm:text-[4.5rem]">
              RTCS
            </h1>
            <h1 className="text-[3rem] leading-[4rem] pt-[.7rem] font-[700] sm:text-[4.5rem] sm:w-[50rem] sm:leading-[5.5rem]">
              <span className="font-[400]">Round-the-Clock</span>{" "}
              <span className="text-[#FF6600]">Support Worldwide</span>
            </h1>
          </>
        }
        firstParagraph={
          "Our support services are available 24 hours a day, 7 days a week, ensuring that you have access to assistance whenever you need it."
        }
        secondParagraph={
          "Whether it's a critical incident, performance optimization, or general inquiries, our experts are ready to address your concerns promptly."
        }
        imageWidth={"w-[65rem]"}
        orangeTick={true}
        borderColor={"border-[#FF6600]"}
        image={"/service_mq.png"}
      />

      <div className="mt-[7rem]">
        <PlaceTextBesideImage
          header={
            <>
              <h1 className="text-[3rem] border sm:mb-[1rem] w-fit pt-[.5rem] border-[#8FD5CC]  text-[#8FD5CC] px-[2rem] py-[1rem] rounded-[3rem] leading-[4rem] font-[700] sm:text-[4.5rem]">
                SLAs
              </h1>
              <h1 className="text-[3rem] leading-[4rem] font-[700] sm:text-[4.5rem] sm:w-[40rem] sm:leading-[6rem]">
                <span className="font-[400]">Tailored Service Level</span>{" "}
                <span className="text-[#8FD5CC]">Agreements</span>
              </h1>
            </>
          }
          inverse={true}
          firstParagraph={
            "Our support is backed by comprehensive Service Level Agreements (SLAs) tailored to meet your specific needs."
          }
          secondParagraph={
            "We guarantee rapid response times, resolution targets, and ongoing communication to keep you informed throughout the support process."
          }
          orangeTick={false}
          borderColor={"border-[#8FD5CC]"}
          image={"/service_timer.webp"}
          imageWidth={"w-[62rem]"}
        />
      </div>
      <Technologies style={'sm:hidden mb-[5rem]'} />
      <Banner1 />
      <Performance />
      <PlaceTextBesideImage
        header={
          <h1 className="sub-header sm:w-[35rem]">
            <span className="text-[#8FD5CC]">Proactive</span>{" "}
            <span className="font-[400]">Monitoring and</span>{" "}
            <span className="text-[#8FD5CC]">Performance</span>{" "}
            <span className="font-[400]">Optimization</span>
          </h1>
        }
        inverse={false}
        firstParagraph={
          "Our experts proactively monitor your RabbitMQ environment, identifying potential performance bottlenecks and providing optimization recommendations."
        }
        secondParagraph={
          "We help fine-tune configurations, implement best practices, and optimize resource utilization to ensure optimal message throughput and responsiveness."
        }
        orangeTick={false}
        borderColor={"border-[#8FD5CC]"}
        imageWidth={"w-[55rem]"}
        image={"/service_analytics.png"}
      />

      <PlaceTextBesideImage
        header={
          <h1 className="sub-header  sm:w-[35rem]">
            Troubleshooting <span className="font-[400]">and</span>{" "}
            <span className="text-[#FF6600]">Root Cause</span>{" "}
            <span className="font-[400]">Analysis</span>
          </h1>
        }
        inverse={true}
        firstParagraph={
          "Our support is backed by comprehensive Service Level Agreements (SLAs) tailored to meet your specific needs."
        }
        secondParagraph={
          "We guarantee rapid response times, resolution targets, and ongoing communication to keep you informed throughout the support process."
        }
        orangeTick={true}
        borderColor={"border-[#8FD5CC]"}
        imageWidth={"w-[55rem]"}
        image={"/root_cause.png"}
      />

      <Features />
    </section>
  );
};

export default Index;

const Info = () => {
  return (
    <div className="py-[4rem] sm:pt-[10rem] flex flex-col" data-animation-id='slideIn'>

      <div className="">
        <p className="text-center sm:text-start mb-[2rem] sm:w-[95rem] text-[1.8rem] sm:leading-[3rem] sm:mb-[2rem]">
          At{" "}
          <span className="bg-[#FF6600] sm:px-[1rem] px-[.5rem] py-[.3rem] sm:py-[.5rem] rounded-[1.5rem] text-[#0D1117] font-[700]">
            AceMQ
          </span>{' '}
          we are proud to offer 24/7 world-wide comprehensive SLA-based support
          for RabbitMQ Enterprise customers. Our dedicated team of experts is
          committed to ensuring uninterrupted operations and providing timely
          assistance for any RabbitMQ-related issues that may arise.
        </p>
        <Image
          src="/dashboard_service.png"
          width={1552}
          className="sm:block hidden w-[115rem]"
          height={700}
          alt="encription"
        />
      </div>
      <Image
        src="/dashboard_service.png"
        width={300}
        className="sm:hidden w-[100%] self-center"
        height={216}
        alt="encription"
      />
    </div>
  );
};

const Banner1 = () => {
  return (
    <div data-animation-id='slideIn' className="border border-[#8FD5CC] sm:flex rounded-[2rem] py-[2rem] sm:py-[3rem] sm:mt-[15rem] px-[1rem] sm:pl-[4rem]  relative">
      <div className="">
        <h2 className="sub-header sm:w-[60rem] text-center sm:text-left mb-[1rem]">
          Millions <span className="font-[400]">Saved in Downtime</span> for{" "}
          <span className="text-[#8FD5CC]">Global</span>{" "}
          <span className="text-[#8FD5CC]">Retail</span> Giant
        </h2>
        <p className="text-center sm:w-[95%] sm:text-left">
          In the relentless world of international retail, downtime can have
          substantial costs. AceMQ’s Support mitigated several incidents for a
          major player, saving millions on downtime. With seamless communication
          as a lifeline, AceMQ's proactive monitoring and customized solutions
          ensured uninterrupted messaging services. Result? Millions saved in
          downtime costs, fortifying the enterprise against operational
          disruptions and bolstering financial resilience. Explore how AceMQ's
          support becomes a strategic asset for global retailers navigating the
          competitive landscape.
        </p>
        <Link href='#contact'>
          <button className="sm:block hidden border-[#8FD5CC] text-[1.4rem] bg-[#232323] mt-[3rem]">
            Learn More
          </button>
        </Link>
      </div>

      <Image
        alt="An image of a store"
        className="hidden sm:block sm:mt-[-7rem] w-[50rem]"
        width={608}
        height={496}
        src="/store.webp"
      />
    </div>
  );
};

const Performance = () => {
  return (
    <div className="text-center flex flex-col items-center mt-[5rem] sm:mb-[6rem] mb-[5rem]" data-animation-id='slideIn'>
      <h3 className="sm:text-[5.3rem] text-[2.5rem] sm:w-[70rem] sm:leading-[6.3rem] font-[700] mb-[2rem]">
        Maximizing <span className="text-[#8FD5CC]">RabbitMQ</span>{" "}
        <span className="text-[#8FD5CC]">Enterprise</span>{" "}
        <span className="font-[400]">Performance and</span> Reliability
      </h3>

      <p className="text-center sm:w-[80rem]">
        With our SLA-based support, we go beyond incident management to maximize
        the performance and reliability of your RabbitMQ Enterprise deployment.
        Our goal is to empower you with a highly available and optimized
        messaging infrastructure that meets your business requirements
      </p>
    </div>
  );
};

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
        Other <span className="font-[500]">Supported</span>{" "}
        <span className="text-[#FF6600]">Technologies</span>
      </h2>
      <Image
        src="/tech_sm.png"
        width={300}
        className="sm:hidden"
        height={216}
        alt="technologies"
      />

      <div className="hidden sm:flex w-[100%] justify-between mt-[4rem] mb-[3rem] h-[20rem]">
        {technologies.map((icon, index) => (<Technology key={index} tech={icon} />))}
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className="mb-[4rem] flex flex-col" data-animation-id='slideIn'>
      <h3 className="text-center sm:text-[5.3rem] font-[700] text-[2.5rem] sm:mb-[6rem] mb-[3rem]"><span className="text-[#8FD5CC]">Features</span> and Benefits</h3>
      <img src="/service_features.webp" className="hidden sm:block" alt="features" />
      <img src="/service_features_sm.svg" className="sm:hidden" alt="features" />

      <h3 className="sm:text-[8rem] hidden sm:block text-center font-[700] sm:mt-[7rem]"><span className="text-[#FF6600]">The</span> AceMQ <span className="font-[400]">Assurance</span></h3>
      <p className="text-center font-[500] mt-[1rem] sm:text-[2.2rem] w-[75%] sm:leading-[3.5rem] hidden sm:block self-center">At <span className="px-[1rem]
            bg-[#FF6600] rounded-[2rem] text-black font-[700] py-[.5rem]">AceMQ</span> we pledge that our <span className="text-[#FF6600]"> Enterprise support</span> not only provides <span className="text-[#FF6600]"> insurance</span> against <span className="text-[#FF6600]"> costly downtime </span>but also proves to be a more <span className="text-[#FF6600]"> cost-effective solution</span> compared to the expenses associated with <span className="text-[#FF6600]"> hiring expert talent</span></p>
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
