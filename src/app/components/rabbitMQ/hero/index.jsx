import Image from "next/image";
const Index = () => {
    return (
        <section className="flex flex-col px-[3rem] sm:px-[10rem] pt-[7rem] relative pb-[6rem] overflow-hidden">
            <img src="/rabbitMq_hero_bg.png" className="absolute w-[100vw] h-[42rem] top-[-6rem] inset-0 z-[-1]" alt="background" />
            <Image className="absolute right-[.6rem] top-[6.5rem] w-[7rem] h-[13rem] rotate-[-5deg] sm:hidden" width={71} height={139} src='/rabbitMQ_hero-R.png' alt="icon" />
            <div className="flex flex-col">
                <h1 className="text-center self-center font-[700] text-[3rem] w-[26rem] leading-[4rem]"><span className="text-accent-100">Elevate</span> Your <span className="font-[400]">RabbitMQ Experience</span>  with  <span className="text-[#0D1117] inline-block py-[.5rem] px-[2rem] bg-accent-100 rounded-[3rem]">AceMQ</span></h1>

                <Image className="self-center mt-[1.6rem] sm:hidden" width={212} height={53} src='/border4k.png' alt="border" />
                <p className="hidden sm:block">Expertise, Support, and Value for Your Messaging & Queuing Implementation</p>
            </div>
        </section>
    );
}

export default Index;