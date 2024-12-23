import ButtonLink from "../common/ButtonLink";

const Features = () => {
    const features = [
        {
            number: "1",
            title: <span className="">Rapid <span className="text-[#8FD5CC]">Response</span></span>,
            text: "Immediate fixes for critical issues to restore functionality fast"
        },
        {
            number: "3",
            title: <span className="">Crisis <span className="text-[#8FD5CC]">Management</span></span>,
            text: "Expert assistance during outages or unexpected downtime. Kafka implementation and optimization",
            className: "self-end"
        },
        {
            number: "2",
            title: <span className="">Root Cause <span className="text-[#8FD5CC]">Analysis</span></span>,
            text: "Address recurring problems withy thorough investigations"
        },
    ]
    const _features = [
        {
            number: "1",
            title: <span className="">Rapid <span className="text-[#8FD5CC]">Response</span></span>,
            text: "Immediate fixes for critical issues to restore functionality fast"
        },
        {
            number: "2",
            title: <span className="">Root Cause <span className="text-[#8FD5CC]">Analysis</span></span>,
            text: "Address recurring problems withy thorough investigations"
        },
        {
            number: "3",
            title: <span className="">Crisis <span className="text-[#8FD5CC]">Management</span></span>,
            text: "Expert assistance during outages or unexpected downtime. Kafka implementation and optimization",
        },
    ]


    return (
        <section className="sm:py-[10rem] py-[5rem] flex flex-col px-[2rem] sm:px-[10rem]">
            <h3 className="body_subheader text-center">Key <span className="font-[400]">Support</span> <span className="text-[#FF6600]">Features:</span></h3>
            <div className="sm:flex mb-[3rem] max-w-[140rem] mx-auto flex-col sm:flex-row hidden justify-between h-[35rem]">
                {
                    features.map((item, idx) => <Feature {...item} key={idx} />)
                }
            </div>
            <div className="flex mb-[3rem] flex-col sm:flex-row sm:hidden justify-between">
                {
                    _features.map((item, idx) => <Feature {...item} key={idx} />)
                }
            </div>
            <ButtonLink
                text={"Learn More"}
                link={""}
                className={"sm:px-[8rem]"}
            />
        </section>
    );
}

const Feature = ({ number, title, text, className = "" }) => {
    return (
        <div className={`${className}`}>
            <h3 className="text-center text-[8rem] font-[700] text-[#8FD5CC] opacity-[.5]">{number}</h3>
            <p className="text-center font-[600] text-[2rem]">{title}</p>
            <p className="text-center">{text}</p>
        </div>
    )
}

export default Features;
