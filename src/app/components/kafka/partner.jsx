const Partner = () => {
    const reasons = [
        {
            img: "/capacity.svg",
            title: "Certified Kafka Professionals",
            text: "Our team includes certified experts with extensive Apache Kafka and Confluent experience."
        },
        {
            img: "/harmony.svg",
            title: "Tailored Solutions",
            text: "Customized strategies to match your unique workloads and business needs."
        },
        {
            img: "/preferences.svg",
            title: "Comprehensive Support",
            text: "From emergency fixes to proactive monitoring, we’ve got you covered."
        },
        {
            img: "/trophy.svg",
            title: "Proven Success",
            text: "Trusted by enterprises across industries like finance, e-commerce, and IoT.",
            className: "sm:col-start-2"
        },
        {
            img: "/24-7.svg",
            title: "24/7 Availability",
            text: "Round-the-clock support options aligned with your SLAs. With us, your Kafka environment is in safe hands."
        },
    ]
    return (
        <section className="px-[2rem] flex flex-col sm:pb-[12rem] sm:px-[10rem]">
            <h3 className="body_subheader_ii w-[80%] mx-auto text-center">Why choose us as your <span className="text-[#FF6600]">Kafka Partner</span></h3>
            <img src="/computers.png" alt="computer network" className="sm:w-[60rem] sm:mt-[2rem] mx-auto" />

            <div className="grid sm:grid-cols-6 max-w-[140rem] w-[100%] self-center sm:gap-y-[3rem] sm:grid-rows-2 gap-[2rem]">
                {
                    reasons.map((item, index) => <Reason key={index} {...item} />)
                }
            </div>
        </section>
    );
}

const Reason = ({ img, title, text, className = "" }) => {
    return (
        <div className={`sm:w-auto ${className} col-span-2 rounded-[.8rem] pt-[1.5rem] pl-[1.5rem] pb-[2.5rem] border border-[#8FD5CC]`}>
            <img src={img} alt="icon" className="mb-[2rem]" />
            <p className="mb-[1rem] text-[1.6rem] sm:text-[1.8rem] font-[600]">{title}</p>
            <p className="w-[90%]">{text}</p>
        </div>
    )
}

export default Partner;