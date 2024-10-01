import Link from "next/link";
const Index = () => {
  return (
    <section className="mt-[6rem] pt-[2rem] sm:pt-[0] pb-[2rem] sm:pb-[0] px-[3rem] sm:px-[10rem] relative" data-animation-id='slideIn'>
      <img
        src="/banner_bg.webp"
        className="w-[100%] h-[100%] absolute inset-0 opacity-[.2] sm:hidden"
        alt="background"
      />
      <img
        src="/ace_logo_white.svg"
        className="w-[15rem] sm:w-[18rem] absolute top-[-2rem] sm:left-[15rem]"
        alt="Acemq Logo"
      />
      <div className="sm:pl-[5rem] sm:py-[3rem] relative">
        <img
          src="/banner_bg_sm.webp"
          className="w-[100%] h-[100%] absolute inset-0 z-[-1] sm:block hidden"
          alt="background"
        />
        <div className="sm:w-[65rem] mt-[2.3rem] sm:mt-[6rem]">
          <h2 className="text-[3rem] leading-[5rem] sm:text-[4rem] sm:w-[58rem] font-[700]">
            Empower your messaging with{" "}
            <span className="text-[#8FD5CC]">FIPSMQ</span>
          </h2>
          <p className="mt-[2rem] sm:mt-[.8rem]">
            the leading FIPS-compliant message broker, supported comprehensively
            by AceMQ. Ensure secure and scalable solutions adhering to FIPS
            140-2 standards with our expert guidance. Achieve high availability
            and fault tolerance, critical for mission-critical systems, all
            while maintaining FIPS compliance. From secure message routing to
            load balancing, trust AceMQ to optimize your FIPS-compliant message
            broker. Elevate your messaging architecture—partner with us for
            FIPS-compliant excellence.
          </p>

          <Link href="#contact" className="border rounded-[.5rem] px-[1rem] py-[.5rem] text-[1.2rem] font-[700] mt-[5rem] w-[10rem] text-center block">
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Index;
