import Link from "next/link";
const Index = () => {
  return (
    <section  className="mt-[6rem] sm:mt-[10rem] sm:mb-[10rem] pt-[2rem] sm:pt-[0] pb-[3rem] sm:pb-[0] px-[3rem] sm:px-[10rem] relative">
      <img
        src="/service_banner_sm.webp"
        className="difference w-[100%] h-[100%] absolute inset-0 z-[-1]  sm:hidden"
        alt="background"
      />
      <img
        src="/ace_logo_white.svg"
        className="w-[12rem] sm:w-[19rem] absolute top-[-2rem] sm:left-[15rem]"
        alt="Acemq Logo"
      />
      <div className="sm:pl-[5rem] sm:py-[3rem] sm:pb-[5rem] relative">
        <img
          src="/elevate.png"
          className="w-[100%] difference h-[100%] absolute inset-0 z-[-1]  sm:block hidden"
          alt="background"
        />
        <img
          src="/elevate_overlay.png"
          className="w-[100%] difference h-[100%] absolute inset-0 z-[-1]  sm:block hidden"
          alt="background"
        />
        <div className=" sm:mt-[3rem]">
          <h2 className="sub-header sm:w-[50rem] mt-[1rem] sm:mt-[5rem]">
            Elevate Your <span className="font-[400]">messaging queuing</span>{" "}
            with AceMQ
          </h2>
          <p className="mt-[2rem] sm:w-[65rem]">
            your trusted partner for seamless integration and unparalleled
            support. As an accredited RabbitMQ partner, we bring expertise to
            troubleshoot challenges, assess your environment, and offer flexible
            support models. Our comprehensive services, from troubleshooting to
            mentorship, ensure a tailored approach to your unique needs. Choose
            AceMQ for dedicated support, commercial assistance, or a fully
            managed service, freeing up your team's resources. Partner with us
            today for a messaging and queuing solution that goes beyond
            expectations.
          </p>

          <Link href="#contact">
            <button className="border mt-[2rem]">
              Speak with an Expert Today
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Index;
