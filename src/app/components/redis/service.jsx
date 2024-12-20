import MaxContainer from "../../components/common/maxContainer/index"

const Service = () => {
    const cards = [
        {
            number: "1",
            header: <span className=""><span className="font-[400]">Redis</span> Remediation & <span className="font-[400]">Emergency</span> Support</span>,
            listItems: [
                {
                    strong: "Break-Fix Solutions",
                    paragraph: "Immediate fixes for critical Redis performance issues."
                },
                {
                    strong: "Root Cause Analysis (RCA)",
                    paragraph: "Prevent future issues through in-depth investigation and optimization."
                },
            ]
        },
        {
            number: "3",
            header: <span className=""><span className="font-[400]">Redis</span> Health & Security <span className="font-[400]">Assessments</span></span>,
            listItems: [
                {
                    strong: "Cluster Health Checks",
                    paragraph: "Monitor and evaluate Redis performance and stability."
                },
                {
                    strong: "Compliance Reviews",
                    paragraph: "Ensure your setup aligns with regulatory standards and industry best practices."
                },
            ]
        },
        {
            number: "2",
            header: <span className="">Redis <span className="font-[400]">Consulting</span> & Implementation</span>,
            listItems: [
                {
                    strong: "Architecture Design",
                    paragraph: "Build scalable, resilient Redis infrastructures."
                },
                {
                    strong: "Security & Compliance Audits",
                    paragraph: "Ensure your Redis environment meets top security standards."
                },
                {
                    strong: "Performance Tuning",
                    paragraph: "Maximize Redis performance to meet your demands."
                },
            ]
        },
        {
            number: "4",
            header: <span className=""><span className="font-[400]">Customized Redis</span> Support</span>,
            listItems: [
                {
                    strong: "24/7 Monitoring",
                    paragraph: "Maintain uptime and prevent disruptions with proactive oversight."
                },
                {
                    strong: "RFlexible SLAs",
                    paragraph: "Support plans designed to meet your specific operational needs."
                },
            ]
        },

    ]
    return (
        <section className="sm:py-[8rem] py-[4rem] sm:px-[10rem] px-[2rem]">
            <h3 className="body_subheader">Our Redis <span className="text-[#FF6600]">Service Offerings</span></h3>

            <MaxContainer>
                <div className="grid sm:grid-cols-2 gap-[2rem] mt-[2rem] sm:gap-[0] justify-between">
                    {
                        cards.map((item, index) => <Card {...item} key={index} />)
                    }
                </div>
            </MaxContainer>
        </section>
    );
}


const Card = ({ header, listItems, number }) => {
    return (

        <div className="flex items-center gap-[1rem]">
            <h2 className="text-[8rem] hidden sm:block text-[#8FD5CC] opacity-[.5] font-[700]">{number}</h2>
            <div className="p-[2rem] sm:mt-[5rem] rounded-[1rem] shadow shadow-[#8FD5CC40]">
                <h2 className="sm:text-[2.2rem] w-[25rem] sm:w-auto text-[1.8rem] mb-[.8rem] sm:mb-[1.5rem] font-[700]">{header}</h2>
                <ul className="list-disc list-outside pl-[2rem]">

                    {
                        listItems.map(({ strong, paragraph }, index) => (
                            <li key={index} className="mb-[.7rem] sm:w-[45rem] text-start text-[1.4rem]">
                                <span><span className="font-[600]">{`${strong}: `}</span>{paragraph}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>

    )
}

export default Service;