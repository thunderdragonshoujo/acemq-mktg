const Services = () => {

    const services = [
        {
            icon: "/blood-donation.svg",
            title: "Kafka Consulting Services",
            text: [
                {
                    bold: "Architecture Design",
                    paragraph: "Build scalable, fault-tolerant Kafka infrastructures."
                },
                {
                    bold: "Performance Tuning",
                    paragraph: "Optimize producer-consumer configurations for maximum throughput."
                },
                {
                    bold: "Cluster Configuration",
                    paragraph: "Ensure reliability with disaster recovery and replication strategies."
                }
            ]
        },
        {
            icon: "/cloud-service.svg",
            title: "Data Streaming Solutions",
            text: [
                {
                    bold: "Real-Time Analytics",
                    paragraph: "Harness Kafka Streams and ksqlDB for live data insights."
                },
                {
                    bold: "ETL Pipelines",
                    paragraph: "Build robust data ingestion and transformation pipelines."
                },
                {
                    bold: "Event-Driven Systems",
                    paragraph: "Enable responsive, scalable architectures powered by Kafka."
                },
            ]
        },
        {
            icon: "/multimedia.svg",
            title: "Cloud and Managed Services",
            text: [
                {
                    bold: "Cloud Migration",
                    paragraph: "Seamless transitions to AWS MSK, Confluent Cloud, or Azure Event Hubs."
                },
                {
                    bold: "Multi-Region Deployments",
                    paragraph: "Achieve high availability with active-active configurations."
                },
                {
                    bold: "Managed Kafka Guidance",
                    paragraph: "Expert advice for optimizing managed service offerings. Proactive Support and Maintenance"
                },
                {
                    bold: "24/7 Monitoring",
                    paragraph: "Ensure Kafka uptime with proactive issue detection."
                },
                {
                    bold: "Custom SLAs",
                    paragraph: "Support plans designed to align with your operational needs."
                },
                {
                    bold: "Upgrades and Patching",
                    paragraph: "Stay current with the latest Kafka features and security updates."
                },
            ]
        },
    ]
    return (
        <section className="px-[2rem] pt-[5rem]  flex flex-col sm:px-[10rem]">
            <h3 className="body_subheader text-center mb-[5rem]">Our Kafka <span className="text-[#FF6600]">Consulting Services</span></h3>

            <div className="grid sm:grid-cols-3 max-w-[140rem] self-center gap-[3rem]">
                {
                    services.map((item, idx) => <Service {...item} key={idx} />)
                }
            </div>
        </section>
    );
}

const Service = ({ icon, title, text, }) => {
    return (
        <div className="px-[3rem] py-[4rem] border flex flex-col border-[#8FD5CC] rounded-[2rem]">
            <img src={icon} alt="icon" className="w-[4rem] h-[4rem] sm:ml-auto" />
            <p className="mt-[3rem] font-[700] text-[1.6rem] mb-[2rem] sm:text-[2rem]">{title}</p>
            <ul className="ml-[2rem] flex flex-col gap-[2rem]">
                {
                    text.map(({ bold, paragraph }, idx) => (
                        <li className="list-disc" key={idx}>
                            <span className="font-[600]">{`${bold}: `}</span>
                            {paragraph}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Services;