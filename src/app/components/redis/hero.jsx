import MaxContainer from "@/app/components/common/maxContainer/index"
import Image from "next/image";
import ButtonLink from "../common/ButtonLink";


const Hero = () => {
    return (
        <div className="bg-[#ffffff] text-[#000000] sm:pt-[0] px-[2rem] sm:pl-[10rem] sm:px-[0] pt-[3.5rem]">
            <MaxContainer>
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="">
                        <h1 className="hero_header sm:hidden sm:w-[50rem] sm:text-start w-[95%] mx-auto">Maximize Your <span className="text-[#8FD5CC]">Redis</span> Potential with <span className="text-[#8FD5CC] font-[600]">Expert Consulting</span></h1>
                        <h1 className="hero_header hidden sm:block sm:w-[60rem] sm:text-start w-[95%] mx-auto">Maximize Your <img src="/Redis_Logo.png" alt="redis" className="w-[24rem]" /> Potential with <span className="text-[#8FD5CC] font-[600]">Expert Consulting</span></h1>
                        <p className="text-center sm:w-[60rem] sm:text-start sm:text-[2rem] text-[1.2rem] mt-[1rem] capitalize font-[500]">
                            Unleash Redis with Industry-Leading Expertise and Certified Solutions
                        </p>
                    </div>
                    <Image
                        src={"/redis_hero_image.png"}
                        alt="computer network"
                        className="sm:w-[70rem]"
                        width={1002}
                        height={834} />
                </div>
            </MaxContainer>
            <CTA />
        </div>
    );
}

export default Hero;


const CTA = () => {
    return (
        <div className="flex sm:pr-[10rem] sm:w-[115rem] sm:mx-auto flex-col">
            <p className="text-[1.2rem] sm:leading-[3.2rem] capitalize sm:text-[2rem] text-center font-[500]">Redis, a powerful open-source, in-memory data store, powers high-speed caching, real-time data analytics, and event streaming. Our expert team helps you harness Redis, whether you’re using the Community Edition or exploring Redis Stack’s advanced capabilities.</p>

            <ButtonLink 
                link={"#contact"}
                text={"Contact our redis expert"} />
        </div>
    )
}