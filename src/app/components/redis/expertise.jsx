import Image from "next/image";
const Expertise = () => {
    const cards = [
        {
            image: "/redis_support.png",
            header: "24/7 Support",
            paragraph: "Rest assured with round-the-clock assistance and tailored SLAs.",
            className: "top-0"
        },
        {
            image: "/custom_solution.png",
            header: "Custom Solutions",
            paragraph: "Receive guidance tailored to your Redis use cases and technical requirements.",
            className: "left-0 sm:top-[18rem] top-[16rem]"
        },
        {
            image: "/certified_professionals.png",
            header: "Certified Redis Professionals",
            paragraph: "Our team includes Redis core developers and experts with deep technical knowledge.",
            className: "right-0 sm:top-[18rem] top-[16rem]"
        },
        {
            image: "/comprehensive_coverage.png",
            header: "Comprehensive Coverage",
            paragraph: "From emergency fixes to proactive optimization, we handle all Redis support aspects.",
             className: "sm:right-[12rem] right-[0] bottom-[0]"
        },
        {
            image: "/proven_success.png",
            header: "Proven Success Across Industries",
            paragraph: " Our clients, from finance to e-commerce, have seen measurable improvements in performance and costs.",
            className: "sm:left-[12rem] left-[0] bottom-[0]"
        },
    ]
    return (
        <section className="bg-white px-[2rem] flex flex-col sm:pt-[4rem] pt-[3rem] pb-[5rem] sm:pb-[7rem] items-center justify-center text-[#000000]">
            <h3 className="mb-[2rem] w-[90%] text-center body_subheader_ii">Why Choose Our <span className="text-[#8FD5CC]">Redis Expertise</span></h3>
            <div className="max-w-[90rem] mt-[3rem] sm:mt-[6rem] relative flex items-center justify-center sm:h-[70rem] h-[55rem] w-[100%]">
                <Image
                    src={"/redis_blue.png"}
                    width={300}
                    height={300}
                    className="w-[18rem] hidden sm:block" />
                {
                    cards.map((item, index) => <Card {...item} key={index} />)
                }
            </div>
        </section>
    );
}

export default Expertise;

const Card = ({ image, header, paragraph, className = null }) => {
    return (
        <div className={`${className} sm:h-[21rem] h-auto absolute`}>
            <Image
                src={image}
                width={50}
                height={50}
                className="sm:w-[7rem] w-[5rem] aspect-square mx-auto" />
            <p className="text-center text-[1.4rem] w-[14rem] mx-auto sm:mx-0 sm:w-auto mt-[.8rem] font-[700]">{header}</p>
            <p className="sm:text-[1.2rem] text-[1.2rem] sm:w-[25rem] w-[15rem] text-center">{paragraph}</p>
        </div>
    )
}