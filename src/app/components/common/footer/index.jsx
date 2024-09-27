"use client";
import Image from "next/image";
import MaxContainer from "../maxContainer/index";
import Link from "next/link";

const Index = () => {
  return (
    <>
      <FooterMobile />
      <FooterDesktop />
    </>
  );
};

export default Index;

const FooterMobile = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="bg-[#0D111C] px-[3rem] sm:hidden pt-[4rem] pb-[7rem] relative">
      <MaxContainer>
        <Image
          src="/ace_logo.png"
          className="w-[12rem] mb-[2rem]"
          width={150}
          alt="logo"
          height={120}
        />
        <div className="flex justify-between">
          <div className="w-[100%]">
            <ul className="mb-[4rem] flex flex-col gap-y-[1.3rem]">
              <li className="flex gap-[1rem] items-center">
                <img
                  className="w-[1.9rem]"
                  src="/footer_message.png"
                  alt="mail us at"
                />
                <Link href="mailto:info@ace-8.io" className="text-[1.3rem]">
                  info@ace-8.io
                </Link>
              </li>
              <li className="flex gap-[1rem] items-center">
                <img
                  className="w-[1.9rem]"
                  src="/footer_telephone..svg"
                  alt="call us at"
                />
                <p className="text-[1.3rem]">305-981-6475</p>
              </li>
              <li className="flex gap-[1rem] items-center">
                <img
                  className="w-[1.9rem]"
                  src="/location_footer.svg"
                  alt="our address"
                />
                <p className="w-[15rem] text-[1.3rem]">
                  66 W. Flagler St. 9th Floor Miami, FL 33130
                </p>
              </li>
            </ul>

            <p className="text-[1.5rem] font-[700] mb-[2.8rem]">
              Connect With Us
            </p>
          </div>

          <div className="h-fit">
            <h3 className="text-[1.4rem] font-[700] mb-[1.2rem]">Navigate</h3>
            <ul className="">
              <Link href="/" className="">
                <li className="text-[1.3rem] mb-[.5rem]">Home</li>
              </Link>
              <Link href="/rabbitmq/" className="">
                <li className="text-[1.3rem] mb-[.5rem]">RabbitMQ</li>
              </Link>
              <Link href="/fipsmq/" className="">
                <li className="text-[1.3rem] mb-[.5rem]">FIPS</li>
              </Link>
              <Link href="/support/" className="">
                <li className="text-[1.3rem] mb-[.5rem]">Support & Services</li>
              </Link>
              <Link href="/mq-services/" className="">
                <li className="text-[1.3rem]  mb-[.5rem]">MQ Services</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="w-[100%]">
          <p className="text-[1.5rem] font-[700] w-[100%]">Newsletter</p>
          <div className="flex items-center justify-between">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="h-[2.8rem] w-[60%] mb-[1.5rem] text-black pl-[1.3rem] rounded-[.3rem]"
            />
            <button onClick={scrollToTop}>
              <img src="/CTA_button.png" alt="Scroll to top" />
            </button>
          </div>

          <button className="border border-accent-100 px-[1.5rem] py-[.7rem] font-[700] text-[1.2rem]">
            Submit
          </button>
        </div>
        <div className="py-[.5rem] bg-black absolute bottom-0 left-0 right-0">
          <p className="text-center text-[1.2rem]">© CopyRight Ace8.io</p>
        </div>
      </MaxContainer>
    </footer>
  );
};

const FooterDesktop = () => {
  return (
    <footer className="bg-[#0D111C] sm:block hidden">
      <MaxContainer>
        <div className="relative">
          <div className="flex px-[10rem] w-[100%] justify-between py-[10rem]">
            <div className="">
              <Image
                src="/ace_logo.png"
                className="w-[12rem] mb-[2rem]"
                alt="logo"
                width={150}
                height={120}
              />
              <ul className="mb-[4rem] flex flex-col gap-y-[1.3rem] sm:gap-y-[3rem]">
                <li className="flex gap-[1rem] items-center">
                  <img
                    className="w-[3rem]"
                    src="/footer_telephone..svg"
                    alt="call us at"
                  />
                  <p className="text-[1.5rem]">305-204-2607</p>
                </li>

                <li className="flex gap-[1rem] items-center">
                  <img
                    className="w-[3rem]"
                    src="/loc.png"
                    alt="address"
                  />
                  <p className="w-[30rem] text-[1.5rem]">
                    66 W. Flagler St. 9th Floor Miami, FL 33130
                  </p>
                </li>

                <li className="flex gap-[1rem] items-center">
                  <div className="w-[3rem] aspect-square bg-[#8FD5CC] grid place-content-center rounded-full">
                    <img
                      className="w-[1.7rem] aspect-square"
                      src="/mail.png"
                      alt="mail"
                    />
                  </div>
                  <p className="w-[30rem] text-[1.5rem]">info@acemq.com</p>
                </li>
              </ul>
            </div>

            <div className="h-fit">
              <h3 className="text-[1.9rem] font-[600] mb-[1.5rem]">Navigate</h3>
              <ul className="">
                <Link href="/" className="">
                  <li className="text-[1.5rem]  mb-[1.5rem]">Home</li>
                </Link>
                <Link href="/rabbitmq/" className="">
                  <li className="text-[1.5rem]  mb-[1.5rem]">RabbitMQ</li>
                </Link>
                <Link href="/fipsmq/" className="">
                  <li className="text-[1.5rem]  mb-[1.5rem]">FIPS</li>
                </Link>
                <Link href="/support/" className="">
                  <li className="text-[1.5rem]  mb-[1.5rem]">
                    Support Service
                  </li>
                </Link>
                <Link href="/mq-services/" className="">
                  <li className="text-[1.5rem]  mb-[1.5rem]">MQ Services</li>
                </Link>
                <Link href="/stories/" className="">
                  <li className="text-[1.5rem]  mb-[1.5rem]">
                    Customer Stories
                  </li>
                </Link>
              </ul>
            </div>
            <div className="">
              <p className="text-[1.9rem] mb-[3rem] font-[600] w-[100%]">
                Newsletter
              </p>
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="h-[3.5rem] w-[28rem] mb-[1.5rem] pl-[1.3rem] text-[1.2rem] text-black  rounded-[.3rem]"
                />
              </div>

              <button className="border border-accent-100 px-[1.5rem] mb-[3rem] py-[.7rem] font-[700] text-[1.2rem]">
                Submit
              </button>
            </div>
            <div className="">
              <p className="text-[1.9rem] font-[600] w-[100%] mb-[1.5rem]">
                Connect With Us
              </p>
              <div className="flex gap-x-[2rem]">
                <Link href="https://www.linkedin.com/company/acemq/" className="text-[1.4rem] ">
                  <img
                    src="/in.svg"
                    className="mb-[1.5rem] w-[3rem]"
                    alt="Linkedin"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
         
      </MaxContainer>
      <div className="bg-black">
            <p className="text-center text-[1.5rem] py-[2rem]">
              © Copyright AceMQ {new Date().getFullYear()}
            </p>
          </div>
    </footer>
  );
};
