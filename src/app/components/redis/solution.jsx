import ButtonLink from "../common/ButtonLink";
import Image from "next/image";
import MaxContainer from "../../components/common/maxContainer/index"
const RedisSolutions = () => {
    const bulletPoints = [
        {
            strong: "Performance Optimization :",
            paragragph: "Configure Redis for peak efficiency in your specific environment."
        },
        {
            strong: "Architecture Consulting :",
            paragragph: "Build robust Redis foundations tailored to your unique workloads."
        },
        {
            strong: "Emergency Support :",
            paragragph: "Rapid response for critical Redis issues and bottlenecks."
        },
        {
            strong: "Maintenance & Monitoring :",
            paragragph: "Configure Redis for peak efficiency in your specific environment.",
            last: true
        },
    ]

    const _bulletPoints = [
        {
            strong: "Feature Proof-of-Concept :",
            paragragph: "Discover how Redis Stack modules can transform your data capabilities."
        },
        {
            strong: "Seamless Migration :",
            paragragph: "Upgrade from Community Edition to Stack without disruption."
        },
        {
            strong: "Integration and Scaling :",
            paragragph: "Ensure Redis Stack aligns with your architecture and scales with your business"
        },
        {
            strong: "Comprehensive Support :",
            paragragph: "Tailored support plans for Redis Stack, including 24/7 assistance.",
            last: true
        },
    ]
    return (
        <section className="px-[2rem] sm:px-[10rem] py-[4rem] sm:py-[8rem]">
            <h2 className="body_subheader mb-[4rem] sm:mb-[7rem]">Our <span className="text-[#FF6600]">Redis Solutions</span> to Drive <span className="text-[#FF6600]">Business</span> Impact</h2>

            <MaxContainer>
                <div className="sm:flex sm:justify-between">
                    <div className="sm:w-[55rem]">
                        <h3 className="body_subheader_ii w-[90%] mb-[1rem]">Redis <span className="text-[#8FD5CC]">Open-Source</span> Consulting & Support</h3>
                        <p className="mb-[1rem] sm:text-[1.5rem] text-[1.2rem]">For Community Edition users seeking stability and performance without the added cost of enterprise solutions, we provide:</p>
                        <div className="mt-[2rem] flex flex-col sm:gap-[.5rem] gap-[1.2rem]">
                            {
                                bulletPoints.map((item, index) =>
                                    <BulletPoint {...item} key={index} />)
                            }
                        </div>
                        <ButtonLink
                            link={"#contact"}
                            className={"pl-[1.5rem] pr-[1.5rem]"}
                            text={"Explore Open-Source Redis Consulting"} />
                    </div>
                    <Image
                        src={"/open_source.png"}
                        width={600}
                        height={700}
                        alt="open source"
                        className="hidden w-[62rem] sm:block"
                    />
                </div>
            </MaxContainer>

            <MaxContainer>
                <div className="mt-[4rem] sm:mt-[8rem] sm:flex flex-row-reverse sm:justify-between">
                    <div className="sm:w-[55rem]">
                        <h3 className="body_subheader_ii w-[90%] mb-[1rem]">Redis <span className="text-[#FF6600]">Stack Consulting</span> for Advanced Applications</h3>
                        <p className="mb-[1rem] sm:text-[1.5rem] text-[1.2rem]">Redis Stack brings added versatility with features like full-text search, JSON support, and graph data models. Our Redis Stack consulting services include:</p>
                        <div className="mt-[2rem] flex flex-col gap-[1.2rem] sm:gap-[.5rem]">
                            {
                                _bulletPoints.map((item, index) =>
                                    <BulletPoint {...item} key={index} />)
                            }
                        </div>
                        <ButtonLink
                            link={"#contact"}
                            className={"pl-[1.5rem] pr-[1.5rem]"}
                            text={"Learn More About Redis Stack Consulting"} />
                    </div>
                    <Image
                        src={"/stack_consulting.png"}
                        width={600}
                        height={700}
                        alt="stack consulting"
                        className="hidden w-[62rem] sm:block"
                    />
                </div>
            </MaxContainer>
        </section>
    );
}


const BulletPoint = ({ className = null, strong, paragragph, last = false }) => {
    return (
        <div className="flex gap-[1rem]">
            <div className="flex flex-col items-center gap-[.6rem]">
                <div className="w-[1.5rem] h-[1.5rem] sm:border-[2px] border-[3px] aspect-square rounded-full"></div>
                {!last && <div className={`w-[3px] sm:w-[2px] min-h-[2rem] bg-[#FF6600] ${className}`}></div>}
            </div>
            <div className="">
                <p className="text-[1.2rem] sm:leading-[2.2rem] sm:text-[1.5rem]"><span className="font-[700]">{strong}</span> {paragragph}</p>
            </div>
        </div>
    )
}

export default RedisSolutions;