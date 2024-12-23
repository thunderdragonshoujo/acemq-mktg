import ButtonLink from "../common/ButtonLink";

const Offerings = () => {
    const offerings = [
        {
            img: "/enhanced_functionality.svg",
            title: "Enhanced Functionality",
            text: "Leverage tools like Schema Registry, ksqlDB, and Connectors for seamless integrations."
        },
        {
            img: "/enterprise_grade.svg",
            title: "Enterprise-Grade Security",
            text: "Benefit from features like role-based access control and end-to-end encryption."
        },
        {
            img: "/expert_implementation.svg",
            title: "Expert Implementation",
            text: "Maximize the value of your investment with tailored consulting and ongoing support."
        },
        {
            img: "/cloud_hybrid.svg",
            title: "Cloud or Hybrid Deployments",
            text: "Transition smoothly to managed services or hybrid setups without downtime."
        },
    ]
    return (
        <section className="px-[2rem] sm:pb-[10rem] pb-[5rem] flex flex-col sm:px-[10rem]">
            <h3 className="text-center w-[90%] mx-auto body_subheader_ii">Thinking About <span className="text-[#FF6600]">Kafka Offerings</span> Like Confluent?</h3>
            <p className="text-center mx-auto w-[90%] my-[3rem] sm:w-[63rem] sm:mx-auto sm:mt-[2rem]">
                If you’re considering the Confluent Platform or managed Kafka solutions, we’ll help you unlock their advanced features
            </p>
            <div className="grid w-[99%] sm:max-w-[140rem] mt-[2rem] sm:mt-[10rem] gap-[6rem] sm:gap-[0] self-center justify-items-center sm:grid-cols-4">
                {
                    offerings.map((item, idx) => <Offering {...item} key={idx} />)
                }
            </div>
            <p className="text-center w-[90%] sm:w-[55rem] mx-auto sm:text-[2rem] mt-[6rem]">Discover the advantages of premium Kafka offerings with expert guidance.</p>
            <ButtonLink text={"Learn About Confluent Support"} link={""} />
        </section>
    );
}

const Offering = ({ img, title, text }) => {
    return (
        <div className="flex shadow px-[2.5rem] w-[75%] pb-[6rem] border border-[#FB8817] sm:pt-[10rem] pt-[7rem] relative rounded-[2rem] items-center shadow-[#FB8817] sm:w-[90%] flex-col sm:px-[3rem]">
            <img src={img} alt="icon" className="sm:w-[13rem] w-[9rem] h-[9rem] absolute sm:top-[-5rem] top-[-3rem] sm:h-[13rem]" />
            <h2 className="text-center">{title}</h2>
            <p className="sm:w-[25rem] text-center">{text}</p>
        </div>
    )
}

export default Offerings;