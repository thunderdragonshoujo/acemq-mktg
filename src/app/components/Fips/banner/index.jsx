const Index = () => {
    return (
        <section className="mt-[6rem] pt-[2rem] sm:pt-[0] pb-[3rem] sm:pb-[0] px-[3rem] sm:px-[10rem] relative">
            <img src="/banner_bg.png" className="hard-light w-[100%] h-[100%] absolute inset-0 z-[-1]  sm:hidden" alt="background" />
            <img src="/ace_logo_white.svg" className="w-[12rem] absolute top-[-2rem] sm:left-[15rem]" alt="" />
            <div className="sm:pl-[5rem] sm:py-[3rem] relative">
                <img src="/banner_bg_sm.png" className="w-[100%] h-[100%] absolute inset-0 z-[-1]  sm:block hidden" alt="background" />
                <div className="sm:w-[65rem] sm:mt-[6rem]">
                    <h2 className="sub-header">Empower your messaging with <span className="text-[#8FD5CC]">FIPSMQ</span></h2>
                    <p className="mt-[2rem]">the leading FIPS-compliant message broker, supported comprehensively by AceMQ. Ensure secure and scalable solutions adhering to FIPS 140-2 standards with our expert guidance. Achieve high availability and fault tolerance, critical for mission-critical systems, all while maintaining FIPS compliance. From secure message routing to load balancing, trust AceMQ to optimize your FIPS-compliant message broker. Elevate your messaging architecture—partner with us for FIPS-compliant excellence.</p>
                    <button className="border mt-[2rem]">Learn more</button>
                </div>
            </div>
        </section>
    )
}

export default Index;