"use client";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import split from "../../../Animations/text";
import { slideIn } from "../../../Animations/common";
import MaxContainer from '../../common/maxContainer'

const Index = () => {
  useEffect(() => {
    split();
    slideIn();
  }, []);

  const cards = [
    {
      header: "Real-Time Payment Processor Production Issues",
      title: "Customer Story",
      image: "/customer_story.png",
      link: "/stories/0",
      role: "Remediating performance and scaling issues with a RabbitMQ cluster in Production",
    },
    {
      header: "RabbitMQ in Kubernetes",
      title: "Customer Story",
      image: "/customer_story2.png",
      link: "/stories/1",
      role: "Configuring RabbitMQ in Kubernetes for Success",
    },
  ];
  return (
    <section className="px-[3rem] sm:px-[10rem] sm:mb-[0] sm:mt-[6.5rem]">
      <MaxContainer>
        <div className="" data-animation-id="slideIn">
          <h3 className="text-center text-[3.7rem] sm:text-[6rem] font-[700]">
            <span className="text-[#FF6600]">Among</span> <span className="font-[400]">The</span> Best
          </h3>
          <p className="text-center  mb-[3rem] sm:mb-[4rem]">
            AceMQ has helped the World's premiere companies reach exceptional
            outcomes
          </p>
          <div className="sm:flex-row flex flex-col  gap-[5rem] sm:gap-[0] w-[100%] sm:h-[42rem] justify-between">
            {cards.map((card, index) => (
              <Card card={card} key={index} />
            ))}
          </div>
        </div>
      </MaxContainer>
    </section>
  );
};

export default Index;

const Card = ({ card }) => (
  <div className="relative sm:ml-[7rem] sm:w-[45%] flex flex-col h-[24rem] sm:h-[40rem]">
    <p className="text-center relative font-[700] text-[1.7rem] sm:text-[1.9rem] top-[1.5rem] z-[3]">
      Customer Story
    </p>
    <Image
      className="absolute inset-0 top-0 w-[100%] h-[24rem] sm:h-[100%] bottom-0 z-[0]`"
      src={card.image}
      alt={card.alt}
      width={611}
      height={444}
    />
    <Image
      src="/image_overlay.png"
      className="absolute z-2 w-[100%] bottom-0 h-[100%]"
      alt="overlay"
      width={611}
      height={444}
    />

    <div className="absolute z-[3] bottom-[.7rem] sm:bottom-[2.5rem] w-[30rem] sm:w-[35rem] flex flex-col items-center self-center">
      <h3 className="font-[700] w-[25rem]  sm:text-[1.5rem] sm:w-[22rem] sm:mb-[1rem] text-center">
        {card.header}
      </h3>
      <p className="text-center  sm:leading-[2rem]">
        {card.role}
      </p>
      <Link
        href={card.link}
        className="flex items-center font-[500] mt-[2rem] gap-[1.5rem]"
      >
        <p>Read Story</p>{" "}
        <img className="w-[2rem]" src="/arrow.svg" alt="arrow icon" />
      </Link>
    </div>
  </div>
);
