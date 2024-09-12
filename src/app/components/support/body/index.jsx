import Image from "next/image";
import PlaceTextBesideImage from '../../common/placeTextBesideImage'
const Index = () => {
    return (
        <section className="px-[3rem] sm:px-[10rem]">
            <Info />
            <Technologies />

            <PlaceTextBesideImage header={<h1 className="sub-header sm:w-[40rem] leading-[6rem]"><span className="border px-[2rem] py-[1rem] rounded-[3rem]">RTCS</span><br></br><span className="font-[400]">Round-the-Clock</span> <span className="text-[#FF6600]">Support Worldwide</span></h1>} firstParagraph={'Our support services are available 24 hours a day, 7 days a week, ensuring that you have access to assistance whenever you need it.'} secondParagraph={'Whether it\'s a critical incident, performance optimization, or general inquiries, our experts are ready to address your concerns promptly.'} imageWidth={'w-[55rem]'} orangeTick={true} borderColor={'border-[#FF6600]'} image={'/service_mq.png'} />

            <div className="mt-[7rem]">
                <PlaceTextBesideImage header={<h1 className="sub-header sm:w-[40rem] leading-[6rem]"><span className="border border-[#8FD5CC] text-[#8FD5CC] px-[2rem] py-[1rem] rounded-[3rem]">SLAs</span><br></br><span className="font-[400]">Tailored Service Level</span> <span className="text-[#8FD5CC]">Agreements</span></h1>} inverse={true} firstParagraph={'Our support is backed by comprehensive Service Level Agreements (SLAs) tailored to meet your specific needs.'} secondParagraph={'We guarantee rapid response times, resolution targets, and ongoing communication to keep you informed throughout the support process.'} orangeTick={false} borderColor={'border-[#8FD5CC]'} image={'/service_timer.png'} imageWidth={'w-[55rem]'} />
            </div>

            <Banner1 />
            <Performance />
            <PlaceTextBesideImage header={<h1 className="sub-header sm:w-[35rem]"><span className="text-[#8FD5CC]">Proactive</span> <span className="font-[400]">Monitoring and</span> <span className="text-[#8FD5CC]">Performance</span> <span className="font-[400]">Optimization</span></h1>} inverse={false} firstParagraph={'Our experts proactively monitor your RabbitMQ environment, identifying potential performance bottlenecks and providing optimization recommendations.'} secondParagraph={'We help fine-tune configurations, implement best practices, and optimize resource utilization to ensure optimal message throughput and responsiveness.'} orangeTick={false} borderColor={'border-[#8FD5CC]'} imageWidth={'w-[55rem]'} image={'/service_analytics.png'} />

            <PlaceTextBesideImage header={<h1 className="sub-header  sm:w-[35rem]">Troubleshooting <span className="font-[400]">and</span> <span className="text-[#FF6600]">Root Cause</span> <span className="font-[400]">Analysis</span></h1>} inverse={true} firstParagraph={'Our support is backed by comprehensive Service Level Agreements (SLAs) tailored to meet your specific needs.'} secondParagraph={'We guarantee rapid response times, resolution targets, and ongoing communication to keep you informed throughout the support process.'} orangeTick={true} borderColor={'border-[#FF6600]'} imageWidth={'w-[55rem]'} image={'/service_analytics.png'} />

            <Features />
        </section>
    );
}

export default Index;

const Info = () => {
    return (
        <div className="py-[4rem] sm:pt-[10rem] flex flex-col">
            <p className="text-center sm:text-start mb-[2rem] sm:w-[70rem]">At <span className="bg-[#FF6600] px-[1rem] py-[.5rem] rounded-[1.5rem] text-[#0D1117] font-[700]">AceMQ</span>we are proud to offer 24/7 world-wide comprehensive SLA-based support for RabbitMQ Enterprise customers. Our dedicated team of experts is committed to ensuring uninterrupted operations and providing timely assistance for any RabbitMQ-related issues that may arise.</p>
            <Image src='/dashboard_service.png' width={300} className="sm:hidden self-center" height={216} alt="encription" />
            <Image src='/dashboard_service.png' width={1552} className="sm:block hidden w-[110rem]" height={700} alt="encription" />
        </div>
    )
}


const Banner1 = () => {
    return (
        <div className="border border-[#8FD5CC] rounded-[2rem] py-[2rem] sm:py-[3rem] sm:mt-[8rem] px-[1rem] sm:pl-[4rem] sm:flex relative">
            <div className="">
                <h2 className="sub-header text-center sm:text-left mb-[1rem]">Millions <span className="font-[400]">Saved in Downtime</span> for <span className="text-[#8FD5CC]">Global</span> <span className="text-[#8FD5CC]">Retail</span> Giant</h2>
                <p className="text-center sm:text-left">In the relentless world of international retail, downtime can have substantial costs. AceMQ’s Support mitigated several incidents for a major player, saving millions on downtime. With seamless communication as a lifeline, AceMQ's proactive monitoring and customized solutions ensured uninterrupted messaging services. Result? Millions saved in downtime costs, fortifying the enterprise against operational disruptions and bolstering financial resilience. Explore how AceMQ's support becomes a strategic asset for global retailers navigating the competitive landscape.</p>
                <button className="sm:block hidden border-[#8FD5CC] text-[1.4rem] bg-[#232323] mt-[3rem]">Learn More</button>
            </div>

            <Image alt="An image of a store" className="hidden sm:block w-[50rem]"  width={608} height={496} src='/store.png' />
        </div>
    )
}

const Performance = () => {
    return (
        <div className="text-center flex flex-col items-center mt-[8rem] mb-[2rem]">
            <h3 className="sub-header sm:w-[45rem] leading-[3.5rem] mb-[2rem]">Maximizing <span className="text-[#8FD5CC]">RabbitMQ</span> <span className="text-[#8FD5CC]">Enterprise</span> <span className="font-[400]">Performance and</span> Reliability</h3>

            <p className="text-center sm:w-[80rem]">With our SLA-based support, we go beyond incident management to maximize the performance and reliability of your RabbitMQ Enterprise deployment. Our goal is to empower you with a highly available and optimized messaging infrastructure that meets your business requirements</p>
        </div>
    )
}

const Technologies = () => {
    const technologies = [
        {
            src: '/tech_1.svg',
            align: 'self-center'
        },
        {
            src: '/tech_2.svg',
            align: 'self-end'
        },
        {
            src: '/tech_3.svg',
            align: 'self-start'
        },
        {
            src: '/tech_4.svg',
            align: 'self-center'
        },
        {
            src: '/tech_5.svg',
            align: 'self-start'
        },
        {
            src: '/tech_6.svg',
            align: 'self-end'
        },
        {
            src: '/tech_7.svg',
            align: 'self-center'
        },
    ]
    return (
        <div className="flex flex-col items-center mb-[8rem]">
            <h2 className="sub-header text-center mb-[2rem] sm:w-[40rem]">Other <span className="font-[500]">Supported</span> <span className="text-[#FF6600]">Technologies</span></h2>
            <Image src='/service_technologies.png' width={300} className="sm:hidden" height={216} alt="technologies" />

            <div className="hidden  sm:flex w-[100%] justify-between mt-[4rem] h-[25rem]">
                {technologies.map((icon, index) => (<img src={icon.src} key={index} className={`${icon.align}`} alt="technology_icon" />))}
            </div>
        </div>
    )
}


const Features = () => {
    return (
        <div className="mb-[4rem] flex flex-col">
            <h3 className="sub-header text-center sm:mb-[6rem] mb-[3rem]"><span className="text-[#8FD5CC]">Features</span> and Benefits</h3>
            <img src="/service_features.webp" className="hidden sm:block" alt="features" />
            <img src="/service_features_sm.svg" className="sm:hidden" alt="features" />

            <h4 className="font-[700] sm:text-[5rem] text-center hidden sm:block mt-[8rem]"><span className="text-[#8FD5CC]">The</span> AceMQ <span className="font-[400]">Assurance</span></h4>
            <p className="text-center mt-[1rem] w-[65%] hidden sm:block self-center">At AceMQ we pledge that our Enterprise support not only provides insurance against costly downtime but also proves to be a more cost-effective solution compared to the expenses associated with hiring expert talent</p>
        </div>
    )
}