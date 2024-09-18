import Image from "next/image";
const Index = () => {
  return (
    <section className="sm:py-[5.5rem] py-[8rem] sm:pt-[17rem] sm:pb-[18rem] px-[1.5rem] sm:px-[10rem] relative">
      <Image
        src="/MQservice_hero_bg_sm.webp"
        className="absolute inset-0 sm:hidden top-0 w-[100%] h-[100%] multiply"
        width={790}
        height={387}
        alt="wheel"
      />
      <Image
        src="/contact_bg.webp"
        className="absolute mix-blend-darken sm:block hidden inset-0 top-0 w-[100%] h-[100%]"
        width={1920}
        height={940}
        alt="wheel"
      />
      <div className="flex flex-col items-center relative">
        <h1 className="header">
          <span className="font-[400]">Get</span> in{" "}
          <span className="text-[#9B86FE]">Touch</span>
        </h1>
        <p className="sm:w-[60rem] text-center">
          Let us know how we can add value to your organization and we'll
          connect you to one of our experts for a free consultation.
        </p>
      </div>
    </section>
  );
};

export default Index;
