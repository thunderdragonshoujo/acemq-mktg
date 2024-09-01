import Link from "next/link";
const Index = () => {
    return (
        <section className="sm:px-[10rem] sm:mt-[7rem] pb-[5rem]" id="contact">
            <div className="pt-[2rem] px-[3rem] pb-[1rem] mt-[5rem] sm:mt-[12rem] bg-black sm:flex sm:justify-between rounded-[3rem]">
                <div className="sm:flex-1">
                    <h4 className="text-center text-[3rem] sm:text-left">Contact <span className="font-[700] text-[#8FD5CC]">Us</span></h4>
                    <p className="text-center sm:text-left">Contact Us To Speak With One of Our Experts</p>
                    <ul className="mt-[4rem] flex flex-col gap-y-[2rem]">
                        <Link href=''>
                            <li className="flex gap-x-[2rem]"><img src="/mail.svg" alt="mail" /> <p className="">info@acemq.com</p> </li>
                        </Link>

                        <li className="flex gap-x-[2rem]"><img src="/phone.svg" alt="phone" /> <p className="">+1 305-204-2607</p></li>
                        <li className="flex gap-x-[2rem]"><img src="/location.svg" alt="location" /> <p className="">66 W. Flagler St. 9th Floor Miami, FL 33130</p></li>
                    </ul>
                </div>
                <div className="sm:flex-[.8]">
                    <form action="" className="bg-white px-[2.3rem] py-[1.5rem] sm:py-[4rem] flex flex-col rounded-[1rem] mt-[3rem] sm:mt-[0]">
                        <div className="sm:flex justify-between gap-[2rem]">
                            <div className="flex py-[.8rem] gap-x-[1rem] border-b border-b-black mb-[3rem] sm:flex-1">
                                <img src="/name.svg" alt="name" />
                                <input type="text" className="w-full text-black focus:outline-none text-[1.2rem]" placeholder="Name" />
                            </div>
                            <div className="flex py-[.8rem] gap-x-[1rem] border-b border-b-black mb-[3rem] sm:flex-1">
                                <img src="/email.svg" alt="name" />
                                <input type="text" className="w-full text-black focus:outline-none text-[1.2rem]" placeholder="Email Address" />
                            </div>
                        </div>
                        <div className="flex items-start  py-[.8rem] gap-x-[1rem] border-b border-b-black mb-[3rem]">
                            <img src="/message.svg" className="mt-[.4rem]" alt="name" />
                            <textarea type="text" className="w-full text-black focus:outline-none text-[1.2rem] h-[8rem] sm:h-[14rem] resize-none" placeholder="Email Address" />
                        </div>

                        <button className="text-black self-end bg-[#8FD5CC]">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Index;