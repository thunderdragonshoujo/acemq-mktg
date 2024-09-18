import Image from "next/image";
import Link from "next/link";
const Index = () => {
  const cards = [
    {
      image: "/credit_card.png",
      ceo: "/CEO_1.svg",
      header: "Real-Time Payment Processor Production Issues",
      text: "Remediating performance and scaling issues with a RabbitMQ cluster in production",
      link: "",
    },
    {
      image: "/rabbit_mq.png",
      ceo: "/CEO_2.svg",
      header: "RabbitMQ in Kubernetes",
      text: "Configuring RabbitMQ in Kubernetes for success",
      link: "",
    },
    {
      image: "/critical_web.png",
      ceo: "/CEO_5.svg",
      header: "Critical Web Launch",
      text: "Migrating from C++ to Java for a Time-Critical Web Launch",
      link: "",
    },
    {
      image: "/micro_service.png",
      ceo: "/CEO_4.svg",
      header: "Microservices Migration",
      text: "Accelerated Migration of Custom Microservices to AWS Lambda",
      link: "",
    },
    {
      image: "/web_launch.png",
      ceo: "/CEO_3.svg",
      header: "Web Launch",
      text: "Rapid Web Launch with Infrastructure as Code (IaC)",
      link: "",
    },
  ];

  return (
    <section className="responsive-grid px-[3rem] sm:px-[10rem] sm:py-[10rem] py-[5rem] bg-white text-black">
      {cards.map((card, index) => (
        <Card card={card} key={index} id={index} />
      ))}
    </section>
  );
};

export default Index;

const Card = ({ card, id }) => {
  return (
    <div className="w-[350px]">
      <div className="relative">
        <Image
          src={card.image}
          className="rounded-[1rem] border"
          width={420}
          height={320}
          alt="card image"
        />
        <div className="border sm:bottom-[-3rem] sm:right-[-3rem] bottom-[-2rem] right-[-2rem] absolute border-dashed sm:w-[7rem] w-[5.5rem] sm:h-[7rem] rounded-full p-[.2rem] border-[#9B86FE]">
          <img src={card.ceo} alt={card.header} />
        </div>
      </div>

      <div className="sm:w-[40rem] sm:mt-[3rem] mt-[2rem]">
        <h4 className="sm:text-[2.8rem] text-[2rem] font-[700]">
          {card.header}
        </h4>
        <p className="text-[#232323] font-[400] mt-[1rem]">{card.text}</p>
      </div>

      <Link
        href={`/stories/${id}`}
        className="sm:mt-[3.5rem] mt-[2rem] text-[1.4rem] font-[700] border sm:px-[2.5rem] rounded-[1rem] inline-block  sm:py-[1.2rem] px-[2rem] py-[1rem] border-[#232323] hover:scale-[1.1] transition-all"
      >
        Learn More
      </Link>
    </div>
  );
};
