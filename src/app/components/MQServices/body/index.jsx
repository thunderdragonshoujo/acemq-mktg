import Image from "next/image";
import PlaceTextBesideImage from "../../common/placeTextBesideImage";

const Index = () => {
  return (
    <section className="px-[3rem] sm:px-[10rem]">
      <Info />
      <Services />
      <SevicesItems />
      <Values />
      <Assesment />
      <Support />
    </section>
  );
};

export default Index;

const Info = () => {
  return (
    <div className="py-[4rem] sm:pt-[10rem] sm:flex sm:flex-col sm:items-center">
      <p className="text-center mb-[2rem] sm:w-[100rem]">
        At{" "}
        <span className="bg-[#8FD5CC] px-[1rem] py-[.5rem] rounded-[1.5rem] text-[#0D1117] font-[700]">
          AceMQ
        </span>{" "}
        we have developed a comprehensive practice around message brokers. Our
        engineers possess extensive experience working closely with message
        broker products, including RabbitMQ. Their in-depth knowledge and
        architectural understanding of Message Brokers allow us to seamlessly
        integrate it into your unique technology stack. As an internationally
        accredited partner of many of the top Message Brokers, we are the go-to
        choice for all your message broker service needs.
      </p>
      <Image
        src="/MQservice_codesnippet.png"
        height={480}
        className="hidden w-[100rem] sm:block"
        width={1552}
        alt="code"
      />
    </div>
  );
};

const Services = () => {
  return (
    <div className="sm:flex sm:flex-row-reverse sm:justify-between sm:mb-[10rem] mb-[5rem]">
      <div className="sm:w-[48rem]">
        <h2 className="sub-header text-center sm:text-left">
          <span className="font-[400] px-[2rem] py-[1rem] bg-[#8FD5CC] text-[#232323] rounded-[2rem]">
            Our
          </span>
          <br></br> Services
        </h2>
        <p className="hidden sm:block">
           Our consultants have encountered and successfully resolved a wide
          range of challenges related to message brokers. With years of
          experience in supporting message broker products and environments, our
          engineers are well-prepared to tackle any issue you may face.
        </p>
      </div>

      <Image
        src="/flow.webp"
        className="mt-[2rem] sm:w-[70rem] self-start"
        width={700}
        height={400}
        alt=""
      />
    </div>
  );
};

import mqServices1Image from "@/images/MQ_service_1.svg";
import mqServices2Image from "@/images/MQ_service_2.svg";
import mqServices1Flowchart from "@/images/MQ_service_1_flowchart.svg";
import mqServices2Flowchart from "@/images/MQ_service_2_flowchart.svg";

const SevicesItems = () => {
  return (
    <div className="">
      <div className="flex justify-between">
        <Image
          width={640}
          className="w-[60rem]"
          height={440}
          src={mqServices1Image}
          alt="service"
        />
        <Image
          width={730}
          className="hidden sm:block w-[60rem]"
          height={350}
          src={mqServices1Flowchart}
          alt="service"
        />
      </div>
      <div className="flex justify-between flex-row-reverse">
        <Image
          width={640}
          height={440}
          className="hidden sm:block w-[70rem] sm:mt-[10rem]"
          src={mqServices2Image}
          alt="service"
        />
        <div className="flex-1 flex items-end justify-center">
          <Image
            width={300}
            className="hidden sm:block"
            height={300}
            src={mqServices2Flowchart}
            alt="service"
          />
        </div>
      </div>
    </div>
  );
};

const Values = () => {
  return (
    <div className="sm:mt-[10rem] mt-[5rem] flex flex-col items-center">
      <h1 className="sub-header text-center sm:mb-[4rem] mb-[2rem] sm:w-[32rem] sm:self-center">
        Our <span className="text-[#8FD5CC]">Differentiator</span> &{" "}
        <span className="">Value</span>
      </h1>
      <Image
        width={1150}
        height={480}
        src="/values.svg"
        className="w-[100rem]"
        alt="values"
      />
    </div>
  );
};

const Assesment = () => {
  return (
    <div className="flex flex-col items-center sm:mt-[10rem] mt-[5rem]">
      <Image
        src="/MQ_assesment.svg"
        width={1000}
        height={900}
        className="w-[120rem]  hidden sm:block"
        alt="tree"
      />
      <h4 className="sub-header sm:hidden text-center w-[20rem]">
        <span className="font-[400]">Consulting</span> & Assessment
      </h4>
      <Image
        src="/MQ_assessment_sm.svg"
        width={340}
        height={620}
        className="w-[35rem]  sm:hidden"
        alt="tree"
      />
    </div>
  );
};

const Support = () => {
  return (
    <div className="mt-[5rem]">
      <PlaceTextBesideImage
        header={
          <h4 className="sub-header text-center">
            <span className="text-[#8FD5CC]">Support</span> & Services
          </h4>
        }
        firstParagraph={
          "Managed Service:  Fully managed message broker environment and services, providing peace of mind and freeing up your team's resources."
        }
        secondParagraph={
          "Comprehensive Support:  This includes to operations and oversight including dedicated resources and service level agreements (SLAs)"
        }
        imageWidth={"hidden sm:block w-[55rem]"}
        thirdParagraph={
          "Comprehensive support:  Tailored solutions addressing your environment and business demands, covering troubleshooting, deployments, operations, and sustainment. This includes dedicated resources and service level agreements (SLAs)."
        }
        image={"/MQ_service_board.png"}
        subHeader={" Our support offerings include:"}
      />
    </div>
  );
};
