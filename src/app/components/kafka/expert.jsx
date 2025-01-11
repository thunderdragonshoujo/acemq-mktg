"use client"
import ButtonLink from "../common/ButtonLink";
import MaxContainer from "../common/maxContainer/index"

const Expert = () => {

    const features = [
        {
            image: "/optimization_icon.svg",
            title: "Performance Optimization",
            paragraph: "Fine-tune Kafka clusters for efficient and reliable data streaming.",
            className: "sm:top-[15rem] top-[12rem]"
        },
        {
            image: "/scalable_icon.svg",
            title: "Scalable Architecture Design",
            paragraph: "Build resilient Kafka infrastructures tailored to your specific needs.",
            className: "top-[15rem]"
        },
        {
            image: "/real_time_icon.svg",
            title: "Real-Time Troubleshooting",
            paragraph: "Resolve bottlenecks and prevent costly downtime.",
            containerClass: "mb-[4rem]",
            className: "sm:top-[15rem] top-[12rem]"
        },
        {
            image: "/escalation_support_icon.svg",
            title: "24/7 Emgergency Escalation Support.",
            paragraph: "Custom tailored 24/7 Support plans designed to meet your Business requirements and SLAs",
            className: "top-[15rem]",
            containerClass: "mb-[9rem] sm:ml-[10rem]"
        },
        {
            image: "/security_enhancement_icon.svg",
            title: "Security Enhancements",
            paragraph: "Protect your Kafka data pipelines with industry best practices. Stay ahead with tailored solutions for open-source Apache Kafka.",
            className: "sm:top-[15rem] top-[12rem]",
            containerClass: "sm:ml-[12rem]",
        },
    ]

    return (
        <section className="px-[2rem] sm:px-[10rem] pt-[2rem] flex flex-col pb-[5rem] sm:pt-[5rem]">
            <MaxContainer>
                <div className="flex flex-col">
                    <p className="text-center mb-[1.7rem] sm:w-[75%] sm:mx-auto">Apache Kafka Powers Modern, Event-Driven Architectures with High-Throughput, Fault-Tolerant Data Streaming. Whether you Rely on Open-Source Apache Kafka or are Considering Premium Offerings like Confluent, our Consulting Services Ensure that your Kafka Implementation Runs at Peak Performance while Meeting your Business Goals.</p>

                    <ButtonLink
                        link={"#contact"}
                        text={"Connect with Our Kafka Experts"}
                    />
                </div>
            </MaxContainer>

            <div className="sm:mt-[10rem] mt-[3.5rem]">
                <h2 className="body_subheader"><span className="text-[#FF6600]">Expert Guidance</span> for Open-Source <span className="text-[#FF6600]">Kafka</span> Users
                </h2>

                <p className="text-[1.2rem] sm:text-[1.7rem] sm:w-[60rem] sm:mx-auto text-center mt-[1rem]">Using Apache Kafka? Get the support you need to manage the complexity of high-performance event streaming:</p>
            </div>
            <div className="mt-[5rem] mb-[10rem] sm:self-center sm:mb-[6rem] grid grid-cols-1 sm:gap-y-[7rem] sm:grid-cols-3">
                {
                    features.map((item, index) => <Feature
                        key={index}
                        {...item} />)
                }
            </div>
            <ButtonLink
                text={"Explore Our Open-Source Services"}
                link={"#contact"}
            />
        </section>
    );
}

export default Expert;


const Feature = ({ image, title, paragraph, className = "top-[12rem]", containerClass = "mb-[7rem]" }) => {

    return (
        <div style={{ backgroundSize: "100% 100%" }} className={`shadow ${containerClass} bg-feature_background flex flex-col w-[25rem] sm:w-[35rem] pt-[4rem] sm:h-[20rem] relative pl-[2rem] sm:pl-[3rem] pr-[3rem] pb-[5rem] rounded-[2rem]`}>
            <img src={image} alt="optimization icon" className="w-[3rem] h-[3rem] absolute right-[2rem] top-[2rem] sm:top-[3rem]" />
            <p className="font-[500] text-[2.2rem] sm:text-[3rem] sm:leading-[4.3rem]">{title}</p>

            <div className={`absolute ${className} w-[24rem] sm:w-[30rem] left-[7rem] sm:left-[10rem] text-center px-[3rem] bg-[#232323] border border-[#8FD5CC] py-[1rem] rounded-[1.5rem]`}>
                <p className="">{paragraph}</p>
            </div>
        </div>
    )
}