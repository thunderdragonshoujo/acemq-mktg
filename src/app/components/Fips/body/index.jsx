import Image from "next/image";

const Index = () => {
    return (
        <section className="px-[3rem] sm:px-[10rem]">
            <Info />
            <Compliance />
            <PlaceTextBesideImage header={<h1 className="sub-header sm:w-[35rem]"><span className="font-[400]">High Availability</span> and <span className="text-[#8FD5CC]">Fault Tolerance</span></h1>} image={'/fault.png'} firstParagraph={'Achieving high availability is crucial for mission-critical messaging systems. We assist in setting up highly resilient FIPSMQ clusters'} secondParagraph={'Our experts implement fault tolerance mechanisms to ensure uninterrupted message processing, even in the event of system failures, while maintaining FIPS compliance.'} imageWidth={'sm:w-[40rem] w-[30rem] mt-[2.5rem] sm:mt-[0]'} inverse={true} />
            <Patterns  />
            <Secure />
        </section>
    );
}

export default Index;

const Info = () => {
    return (
        <div className="py-[4rem] sm:pt-[10rem] sm:flex sm:flex-col sm:items-center">
            <p className="text-center mb-[2rem] sm:w-[70rem]">At <span className="bg-[#8FD5CC] px-[1rem] py-[.5rem] rounded-[1.5rem] text-[#0D1117] font-[700]">AceMQ</span>, Our team of experts is well-versed in leveraging our FIPSMQ solution, to enable secure and scalable messaging solutions for businesses that require compliance with FIPS (Federal Information Processing Standards) guidelines.</p>
            <Image src='/encriptiion.png' width={300} className="sm:hidden" height={216} alt="encription" />
            <Image src='/encription_sm.png' width={1552} className="sm:block hidden w-[110rem]" height={700} alt="encription" />
        </div>
    )
}


const Compliance = () => {
    return (
        <div className="sm:flex sm:gap-[7rem] mt-[3rem] sm:mb-[10rem] mb-[4rem]">
            <div className="flex-1">
                <div className="bg-[#10151D] p-[1rem] sm:w-fit sm:p-[1.5rem] rounded-[2rem] sm:mt-[10rem]">
                    <h1 className="sub-header py-[.7rem] rounded-[3rem] mb-[.5rem] px-[2.5rem] border w-fit">FIPS</h1>
                    <h1 className="sub-header sm:w-[40rem]">Compliance and <span className="text-[#8FD5CC] mb-[2rem]">Security</span> Assurance</h1>
                </div>
                <div className="w-[100%]">
                    <div className="mt-[2rem]">
                        <div className='flex border mb-[2rem] border-[#8FD5CC] bg-[#232323] gap-[1rem] p-[.5rem] rounded-[1rem]'>
                            <img src="/tick.svg" className="w-[2rem]" alt="mark icon" />
                            <p className="">FIPSMQ is designed from the ground up to meet FIPS 140-2 security standards, ensuring the highest level of data protection and compliance.</p>
                        </div>
                        <div className="flex gap-[1rem] sm:translate-x-[5rem] w-[100%]">
                            <img src="/tick.svg" className="w-[2rem]" alt="mark icon" />
                            <p className="w-[100%]">Our experts help you implement FIPSMQ in a secure and compliant manner, safeguarding your sensitive data and meeting regulatory requirements.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden sm:block flex-1">
                <Image width={972} height={356} src='/Alma_care.png' alt="alma care" />
                <Image width={972} height={240} className="mt-[3rem]" src='/editor.png' alt="editor" />
            </div>
        </div>
    )
}



const PlaceTextBesideImage = ({ header, firstParagraph, secondParagraph, image, imageWidth, inverse, borderColor, orangeTick }) => {
    return (
        <div className={`sm:flex sm:justify-between ${inverse ? 'sm:flex-row-reverse' : 'flex-row'}  sm:mt-[3rem] sm:mb-[5rem] mb-[7rem] sm:w-[100%] sm:items-center`}>
            <div className="sm:w-[50%] overflow-hidden flex flex-col items- sm:items-start">
                {header}
                <div className="mt-[2rem]">
                    <div className={`flex bg-[#232323] border mb-[2rem] ${borderColor ? borderColor : 'border-[#8FD5CC]'}  gap-[1rem] p-[.5rem] rounded-[1rem]`}>
                        <img src={orangeTick ? '/orange_tick.svg' : "/tick.svg"} className="w-[2rem]" alt="mark icon" />
                        <p className="">{firstParagraph}</p>
                    </div>
                    <div className="flex gap-[1rem] translate-x-[5rem] w-[100%]">
                        <img src={orangeTick ? '/orange_tick.svg' : "/tick.svg"} className="w-[2rem]" alt="mark icon" />
                        <p className="w-[85%]">{secondParagraph}</p>
                    </div>
                </div>
            </div>
            <Image className={`${imageWidth}`} src={image} width={667} height={629} alt="code snippet picture" />
        </div>
    )
}


const Patterns = () => {
    return (
        <div className="sm:flex sm:flex-col sm:items-center sm:mb-[12rem] mb-[4rem]">
            <h4 className="text-[2.2rem] sm:text-[3rem] sm:w-[50rem] font-[700] text-center">Advanced <span className="font-[400]">Messaging</span> <span className="text-[#8FD5CC]">Patterns</span> and Optimization</h4>
            <p className="text-center my-[1.4rem] max-w-[90rem]">Unlock the full potential of RabbitMQ with our advanced messaging patterns and optimization techniques. We go beyond basic messaging functionality to help you build robust and scalable messaging architectures.</p>
            <Image src='/advanced_down.svg' className="w-[40rem] mt-[2rem]" width={376} height={296} alt="patterns image" />
        </div>
    )
}

const Secure = () => {
    return (
        <div className="flex items-center">
            <img src="/secure_section_sm.svg" className="w-[120rem] hidden sm:block" alt="" />
            <img src="/secure_section.svg" className="w-[35rem] sm:hidden" alt="" />
        </div>
    )
}

