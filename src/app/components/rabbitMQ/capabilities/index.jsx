'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const Index = () => {
  const icons = [
    {
      image: '/person.png',
      hoveredImage: '/person_hov.png',
      text: 'Change Management',
      containerStyle: 'top-0 hidden sm:block',
    },
    {
      image: '/QA.png',
      hoveredImage: '/QA_hov.png',
      text: 'QA',
      containerStyle: 'bottom-0  hidden sm:block',
    },
    {
      image: '/disserter.png',
      hoveredImage: '/disaster.png',
      text: 'Disaster Recovery',
      containerStyle: 'left-[53rem]  hidden sm:block bottom-[9rem]',
    },
    {
      image: '/deployment_unhov.png',
      hoveredImage: '/deployment.png',
      text: 'Deployment',
      containerStyle: 'right-0  hidden sm:block',
    },
  ]
  return (
    <section className="px-[3rem] mt-[3rem] flex flex-col items-center sm:px-[10rem]">
      <h5 className="text-[2.5rem] sm:text-[3.5rem] mb-[3rem] w-[25rem] sm:w-[100%] text-center font-[700]">
        Our <span className="font-[400]">Consulting</span>{" "}
        <span className="text-[#8FD5CC]">Capabilities</span>
      </h5>
      <PlaceTextBesideImage
        header={
          <h3 className="text-[3rem] sm:text-[2.8rem] sm:w-[28rem] font-[700]">
            <span className="font-[400]">Seamless</span>{" "}
            <span className="text-[#8FD5CC]">Integration</span> and
            Configuration
          </h3>
        }
        firstParagraph={
          "We ensure seamless integration of RabbitMQ into your existing infrastructure, whether it's on-premises or in the cloud."
        }
        secondParagraph={
          "Our experts handle the configuration process to optimize RabbitMQ for your specific use case, ensuring maximum performance and efficiency."
        }
        image={"/code_snippet.webp"}
        imageWidth={"sm:w-[50rem] hidden sm:block"}
      />

      <div className="flex  w-[100%] sm:pt-[8rem] relative mb-[8rem] justify-between">
        <Image  
          src={'/code_snippet2.webp'}
          width={500}
          height={500}
          className="w-[35rem] hidden sm:block ml-[15rem] mb-[3rem]"
          alt="code snippet"
        />
          <Image  
          src={'/high_availability.png'}
          width={600}
          className="sm:w-[55rem] hidden sm:block mt-[8rem]"
          height={600}
          alt="code snippet"
        />
          <Image  
          src={'/high_availability_sm.png'}
          width={600}
          className="sm:hidden block"
          height={600}
          alt="code snippet"
        />
        { icons.map((icon, index) => <Icon icon={icon} key={index} /> ) }
      </div>

      <Patterns />

      <PlaceTextBesideImage
        header={
          <h3 className="text-[3rem] leading-[5rem] sm:leading-[4.5rem] w-[30rem] sm:w-[35rem] sm:text-[3.1rem] font-[700]">
            <span className="p-[1.2rem] sm:py-[.6rem] bg-[#8FD5CC] rounded-[1rem] text-black">
              Message Routing
            </span>{" "}
            and <span className="font-[400]">Exchange </span>Mechanisms
          </h3>
        }
        firstParagraph={
          "Our experts guide you in implementing efficient message routing mechanisms, leveraging RabbitMQ's exchange and binding features"
        }
        secondParagraph={
          "We help you design custom exchange types and establish routing rules to ensure messages reach the right destinations with minimal overhead."
        }
        image={"/code_snippet3.webp"}
        imageWidth={"sm:w-[50rem] mt-[2rem] sm:block hidden"}
      />

      <LoadBalancing />

      <PlaceTextBesideImage
        header={
          <h3 className="text-[3rem] leading-[5rem] sm:leading-[6rem] sm:text-left  sm:w-[43rem] sm:text-[3.1rem] font-[700]">
            <span className="sm:p-[1.2rem] p-[.8rem] bg-[#FF6600] text-black rounded-[.7rem]">
              Enterprise
            </span>
            <span className="font-[400]"> Upgrades </span>with Zero Downtime and
            Risk
          </h3>
        }
        firstParagraph={
          "Our experts guide you in implementing efficient message routing mechanisms, leveraging RabbitMQ's exchange and binding features"
        }
        secondParagraph={
          "We help you design custom exchange types and establish routing rules to ensure messages reach the right destinations with minimal overhead."
        }
        orangeTick={true}
        image={"/rabbit_dashboard.webp"}
        inverse={true}
        imageWidth={"w-[50rem]  mt-[2rem]"}
        borderColor={"border-[#FF6600]"}
      />

      <PlaceTextBesideImage
        header={
          <h3 className="text-[3rem] leading-[5rem] sm:leading-[6rem] sm:text-left  w-[28rem] sm:w-[40rem]  sm:text-[3.1rem] font-[700] text-center">
            <span className="p-[1.2rem] text-[black] bg-[#FF6600]  rounded-[.7rem]">
              Performance
            </span>
            and Reliability <span className="font-[400]">Tuning</span>
          </h3>
        }
        firstParagraph={
          "Our experts guide you in implementing efficient message routing mechanisms, leveraging RabbitMQ's exchange and binding features"
        }
        secondParagraph={
          "We help you design custom exchange types and establish routing rules to ensure messages reach the right destinations with minimal overhead."
        }
        orangeTick={true}
        image={"/performance.png"}
        imageWidth={"w-[50rem] mt-[2rem] sm:mt-[0]"}
        borderColor={"border-[#FF6600]"}
      />

      <PlaceTextBesideImage
        inverse={true}
        header={
          <h3 className="text-[3rem] sm:text-left leading-[5rem] sm:leading-[6rem] w-[28rem] sm:w-[40rem]  sm:text-[3.1rem] font-[700] text-center">
            <span className="p-[1.2rem] bg-[#8FD5CC] text-black rounded-[.7rem]">
              Telemetry
            </span>{" "}
            -Driven Bottleneck Identification
          </h3>
        }
        firstParagraph={
          "Leverage the power of RabbitMQ telemetry to gain deep insights into your enterprise stacks."
        }
        secondParagraph={
          "AceMQ utilizes advanced monitoring and analysis tools to identify upstream and downstream bottlenecks, enabling proactive optimization and enhancing the overall efficiency of your messaging ecosystem."
        }
        image={"/code_snippet4.svg"}
        imageWidth={"w-[50rem] hidden sm:block"}
        borderColor={"border-[#8FD5CC]"}
      />

      <Banner />
      <Supports />
      <Banner2 />
    </section>
  );
};

export default Index;

const Patterns = () => {
  const icons = [
    {
      image: '/engine.png',
      hoveredImage: '/transformation.png',
      text: 'Transformation',
      containerStyle: 'top-0 self-center',
    },
    {
      image: '/robot.png',
      hoveredImage: '/channels.png',
      text: 'Channels',
      containerStyle: 'bottom-0 right-0',
    },
    {
      image: '/monitor.png',
      hoveredImage: '/monitoring.webp',
      text: 'Monitoring',
      containerStyle: 'top-[6rem] right-[3rem]',
    },
    {
      image: '/sync.png',
      hoveredImage: '/routing.png',
      text: 'Routing',
      containerStyle: 'left-[0] bottom-[0]',
    },
    {
      image: '/rain_drop.png',
      hoveredImage: '/construction.png',
      text: 'Construction',
      containerStyle: 'left-[3rem] top-[6rem]',
    },
  ]
  return (
    <div className="sm:flex sm:flex-col sm:items-center sm:mb-[8rem] mb-[8rem]" data-animation-id='slideIn'>
      <h4 className="text-[3.2rem]  sm:text-[4rem] sm:w-[55rem] font-[700] text-center">
        Advanced <span className="font-[400]">Messaging</span>{" "}
        <span className="text-[#8FD5CC]">Patterns</span> and Optimization
      </h4>
      <p className="text-center my-[1.4rem] sm:max-w-[70rem] ">
        Unlock the full potential of RabbitMQ with our advanced messaging
        patterns and optimization techniques. We go beyond basic messaging
        functionality to help you build robust and scalable messaging
        architectures.
      </p>
      {/* <Image
        src="/advanced.png"
        className="w-[60rem] mt-[2rem]"
        width={376}
        height={296}
        alt="patterns image"
      /> */}

      <div className="sm:w-[50rem] sm:h-[40rem] h-[23rem] mt-[6rem] justify-center flex relative">
        <Image
          src={'/message_patterns.png'}
          width={220}
          height={300}
          className="self-end w-[13rem] sm:w-auto"
          alt="Advance messaging patterns"
        />
        { icons.map((icon, index) => <Icon key={index} icon={icon} />) }
      </div>
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

const LoadBalancing = () => {
  return (
    <div className="sm:mt-[9rem] mb-[5rem] flex flex-col sm:ml-[12rem] items-center" data-animation-id='slideIn'>
      <div className="">
        <h3 className="text-center text-[2.7rem] sm:text-[4rem] w-[23rem] sm:w-[60rem] mb-[1.8rem] font-[400]">
          <span className="text-[#FF6600] font-[700]">Message Queue</span>{" "}
          Management <span className="font-[700]">and Load Balancing</span>
        </h3>
        <div className="hidden sm:flex">
          <Image
            src="/rabbitMQContent.png"
            className="w-[60rem]"
            alt="content"
            width={766}
            height={232}
          />
          <img
            src="/rabbitMQ.svg"
            alt="rabbitMQ logo"
            className="w-[10rem] sm:w-[15rem] ml-[6rem]"
          />
        </div>
      </div>
      <Image
        src="/queue_mobile.png"
        alt="content"
        className="sm:hidden"
        width={375}
        height={176}
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
      data-animation-id='slideIn'
      className={`sm:flex sm:justify-between ${inverse ? "sm:flex-row-reverse" : "flex-row"
        }  sm:mt-[3rem] sm:mb-[5rem] mb-[7rem] sm:w-[100%] sm:items-center`}
    >
      <div className="sm:w-[50%] overflow-hidden flex flex-col items- sm:items-start">
        {header}
        <div className="mt-[2rem]">
          <div
            className={`flex border mb-[2rem] ${borderColor ? borderColor : "border-[#8FD5CC]"
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

const Banner = () => {
  return (
    <div className="sm:mt-[4rem] border sm:w-full border-[#FF6600] rounded-[2rem] py-[2rem] sm:py-[4rem] px-[.5rem] sm:flex flex-col items-center">
      <h3 className="font-[700] mb-[1rem] text-center text-[3rem] sm:text-[5.7rem] sm:w-[80rem]">
        24/7 <span className="text-[#FF6600]">Worldwide</span> SLA-Based{" "}
        <span className="font-[400]">Enterprise</span> Support
      </h3>
      <p className="text-center sm:w-[75%]">
        AceMQ delivers 24/7 SLA-based support for Enterprises, ensuring
        uninterrupted operations. Dedicated experts promptly address critical
        incidents, optimize performance, and handle inquiries. In addition,
        customized SLAs guarantee rapid response times, resolution targets, and
        transparent communication.
      </p>
    </div>
  );
};

const Supports = () => {
  const features = [
    [
      {
        header: (
          <p className="font-[700] sm:text-[2.8rem]">
            Round-the-Clock <span className="text-[#8FD5CC]">Assistance</span>
          </p>
        ),
        paragraph:
          "Support services available 24/7 for critical incidents, performance optimization, and inquiries. Expert assistance ensures prompt resolution of RabbitMQ-related issues.",
      },
      {
        header: (
          <p className="font-[700] sm:text-[2.8rem]">
            Service Level <span className="font-[400]">Agreements</span>{" "}
            <span className="text-[#8FD5CC]">(SLAs)</span>
          </p>
        ),
        paragraph:
          "Customized SLAs tailored to specific needs. Guaranteed rapid response times, resolution targets, and ongoing communication throughout the support process.",
      },
    ],
    [
      {
        header: (
          <p className="font-[700] sm:text-[2.8rem]">
            Performance <span className="font-[400]">Optimization</span> and{" "}
            <span className="text-[#8FD5CC]">Proactive</span> Monitoring
          </p>
        ),
        paragraph:
          "Continuous monitoring of RabbitMQ environments to identify potential bottlenecks. Optimization recommendations provided by experts.",
      },
      {
        header: (
          <p className="font-[700] sm:text-[2.8rem]">
            <span className="text-[#8FD5CC]">Troubleshooting</span> and Root
            Cause <span className="">Analysis</span>
          </p>
        ),
        paragraph:
          "Customized SLAs tailored to specific needs. Guaranteed rapid response times, resolution targets, and ongoing communication throughout the support process.",
      },
    ],
  ];

  return (
    <div className="flex flex-col items-center mt-[4rem] sm:mt-[6rem] mb-[5rem] sm:w-[100%]" data-animation-id='slideIn'>
      <h2 className="font-[700] text-[3rem] sm:text-[5.7rem] text-center w-[20rem] sm:w-[100%] mb-[2rem] sm:mb-[4rem]">
        Key <span className="font-[400]">Support</span>{" "}
        <span className="text-[#8FD5CC]">Features:</span>
      </h2>
      <div className="w-[100%]">
        {features.map((featureGroup, groupIndex) => (
          <div
            key={groupIndex}
            className="flex justify-between sm:mb-[3.5rem] w-[32rem] sm:w-[100%]"
          >
            {featureGroup.map((item, itemIndex) => {
              const featureNumber =
                groupIndex * featureGroup.length + itemIndex + 1;
              return (
                <div
                  key={itemIndex}
                  className="flex items-start sm:items-center gap-[1rem] sm:gap-[2rem] py-[1rem]"
                >
                  <h1 className="text-[#8FD5CC] font-[700] text-[3.5rem] sm:text-[9rem] opacity-[.3]">
                    {featureNumber}
                  </h1>
                  <div className="w-[12rem] sm:w-[50rem]">
                    {item.header}
                    <p className="mt-[2rem] hidden sm:block">
                      {item.paragraph}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <Link href="/support/">
        <button className="border border-[#8FD5CC] mt-[3rem]">
          Learn More
        </button>
      </Link>
    </div>
  );
};

const Banner2 = () => {
  return (
    <div className="blue_border sm:mt-[6rem] relative">
      <Image
        src={'/blue_border.png'}
        width={1300}
        height={572}
        alt="border"
        className="absolute w-[100%] inset-0"
      />
      <div className="flex sm:mt-[1rem] sm:ml-[1.2rem] flex-col border border-[#929292] items-center p-[3rem] sm:pt-[6rem] bg-black w-[100%] rounded-[2rem] relative">
        <img
          src="/acemq.png"
          alt="logo"
          className="absolute top-[-3rem] w-[13rem] sm:w-[18rem]"
        />
        <h3 className="sm:text-[5rem] sm:w-[70%] text-[2.7rem] text-center font-[700]">
          <span className="font-[400]">Unlock</span> the{" "}
          <span className="text-[#FF6600]">True Potential</span> of{" "}
          <span className="text-[#FF6600]">RabbitMQ</span> in Your{" "}
          <span className="font-[400]">Enterprise.</span>
        </h3>
        <p className="sm:w-[85rem] text-center mt-[2rem]">
          Unlock the full power of RabbitMQ with AceMQ's expert services.
          Seamlessly integrate RabbitMQ into your environment for optimized
          performance. Our team ensures high availability and fault tolerance,
          sets up advanced messaging patterns, and fine-tunes configurations for
          optimal resource utilization. Experience risk-free upgrades, performance
          tuning, and world class support. Elevate your messaging architecture
          with AceMQ.
        </p>

        <Link href={'/contact-us'} className="mt-[5rem]">
          <button className="text-[1.2rem] border">
            Schedule a Free Consultation
          </button>
        </Link>
      </div>
    </div>
  );
};
