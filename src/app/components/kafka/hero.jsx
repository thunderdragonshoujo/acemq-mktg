import Image from "next/image";

const Hero = () => {
    return (
        <section className="px-[2rem] bg-[#0A0C10] pt-[2rem] pb-[6rem] sm:pt-[5rem] sm:pb-[15rem]">
            <Image 
                src={"/kafka.png"}
                width={60}
                height={60}
                className="w-[6.5rem] sm:w-[12rem] mx-auto h-[6.5rem] sm:h-[12rem]"
                alt="kafka logo"
            />
            <h1 className="text-center sm:w-[100rem] sm:mx-auto font-[700] text-[2.5rem] sm:text-[6.7rem] mt-[2rem]">Take Your <span className="text-[#8FD5CC]">Kafka</span> <span className="font-[400]">Experience to the</span> <br className="sm:hidden"></br> <span className="bg-[#FF6600] px-[1rem] font-[700] text-[#8FD5CC] py-[1rem] line-through">Next Level</span></h1>

            <p className="text-center w-[90%] mx-auto mt-[2rem]">Unleash Real-Time Data Streaming with Expert Kafka Consulting</p>
        </section>
    );
}
 
export default Hero;