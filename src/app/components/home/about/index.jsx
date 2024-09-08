import Image from "next/image";

const Index = () => {
    return (
        <section className="px-[3rem] sm:px-[10rem]">
            <div className="bg-black p-[1.2rem] justify-between sm:p-[8rem] sm:relative sm:flex sm:flex-row-reverse">
                <div className="sm:w-[52rem] ">
                    <h3 className="text-[3rem] sm:text-[3.6rem] mb-[1rem] sm:text-left font-[400] text-center">Who<span className="font-[700]"> We</span><span className="font-[700] text-[#FF6600]"> Are</span></h3>
                    <p className="text-center mt-[2rem] sm:text-left hidden sm:block">
                        At AceMQ we have assembled a team of product and architectural experts with a combined wealth of experience. This enables us to offer the most comprehensive Message Queuing Services and Support in the industry. Our goal is to ensure that our clients achieve optimal performance, efficiency, and reliability in their messaging queuing systems and ultimately achieve their business goals.
                    </p>
                </div>
                <Image src='/who_we_are.png' className="sm:w-[60rem] w-[28rem] sm:left-[-6rem] sm:absolute" width={331} height={194} alt="acemq" />

                <p className="text-center mt-[2rem] sm:hidden">
                    At AceMQ we have assembled a team of product and architectural experts with a combined wealth of experience. This enables us to offer the most comprehensive Message Queuing Services and Support in the industry. Our goal is to ensure that our clients achieve optimal performance, efficiency, and reliability in their messaging queuing systems and ultimately achieve their business goals.
                </p>
            </div>
        </section>
    );
}

export default Index;