const Index = () => {
    return (
        <section className="bg-white relative px-[3rem] sm:px-[0] pt-[3rem] sm:pt-[0] sm:flex sm:pb-[10rem] pb-[5rem] sm:pr-[10rem]  justify-between">
            <div className="bg-[#080A0F] sm:px-[1rem] sm:py-[12rem] relative flex flex-col sm:rounded-tr-none rounded-tl-[40px] sm:rounded-tl-none rounded-br-[40px]  h-[20rem] sm:h-auto">
                <img className="sm:w-[70rem]" src="/map.png" alt="" />
                <img src="/contact_info.png" className="sm:w-[50rem] hidden absolute self-center bottom-[-7rem]" alt="" />
            </div>
            <Form />
        </section>
    );
}

export default Index;


const Form = () => {
    return (
        <div className="text-black sm:w-[55rem] pt-[8rem] flex flex-col">
            <h2 className="sub-header w-[20rem] self-center text-center sm:w-auto"><span className="text-[#9B86FE]">Tell Us</span> About Yourself</h2>

            <form action="" className="sm:mt-[7rem] mt-[3rem]">
                <div className="sm:flex justify-between gap-[2rem]">
                    <div className="flex py-[.8rem] gap-x-[1rem] border-b border-b-black mb-[3rem] sm:flex-1">
                        <img src="/name_.svg" className="w-[1.6rem]" alt="name" />
                        <input type="text" className="w-full text-black focus:outline-none text-[1.2rem]" placeholder="First Name*" />
                    </div>
                    <div className="flex py-[.8rem] gap-x-[1rem] border-b border-b-black mb-[3rem] sm:flex-1">
                        <img src="/name_.svg" className="w-[1.6rem]" alt="name" />
                        <input type="text" className="w-full text-black focus:outline-none text-[1.2rem]" placeholder="Last Name*" />
                    </div>
                </div>
                <div className="sm:flex justify-between gap-[2rem]">
                    <div className="flex py-[.8rem] gap-x-[1rem] border-b border-b-black mb-[3rem] sm:flex-1">
                        <img src="/email.svg" className="w-[1.6rem]" alt="name" />
                        <input type="text" className="sm:w-full w-auto text-black focus:outline-none text-[1.2rem]" placeholder="Email Address" />
                    </div>
                    <div className="flex py-[.8rem] gap-x-[1rem] border-b border-b-black mb-[3rem] sm:flex-1">
                        <img src="/name.svg" className="w-[1.6rem]" alt="name" />
                        <input type="tel" className="sm:w-full w-auto text-black focus:outline-none text-[1.2rem]" placeholder="Phone Number" />
                    </div>
                </div>
                <div className="sm:flex justify-between gap-[2rem]">
                    <div className="flex py-[.8rem] gap-x-[1rem] border-b border-b-black mb-[3rem] sm:flex-1">
                        <img src="/company.svg" className="w-[1.6rem]" alt="name" />
                        <input type="text" className="sm:w-full text-black focus:outline-none text-[1.2rem]" placeholder="company*" />
                    </div>
                    <div className="flex py-[.8rem] gap-x-[1rem] border-b border-b-black mb-[3rem] sm:flex-1">
                        <img src="/role.svg" className="w-[1.6rem]" alt="name" />
                        <input type="text" className="sm:w-full text-black focus:outline-none text-[1.2rem]" placeholder="Role" />
                    </div>
                </div>
                <div className="flex items-start  py-[.8rem] gap-x-[1rem] border-b border-b-black mb-[3rem]">
                    <img src="/message.svg" className="mt-[.4rem]" alt="name" />
                    <textarea type="text" className="sm:w-full text-black focus:outline-none text-[1.2rem] h-[8rem] sm:h-[14rem] resize-none" placeholder="Project Description" />
                </div>

                <div className="sm:flex items-center justify-between hidden">
                    <button className="font-[400] bg-[#9B86FE] text-white rounded-[.8rem] px-[.6rem] h-[4rem] py-[.5rem] text-[1.3rem] w-[11rem]">Choose File</button>
                    <p className="text-[1.12rem] text-[#232323]">PDF, Word, Excel, PNG, JPEG, and TXT files with less than 25MB in size are supported.</p>
                </div>

                <button className="mt-[3rem] self-center sm:self-start px-[3rem] py-[1rem] text-white bg-conner-gradient rounded-[1rem]">Submit</button>
            </form>
        </div>
    )
}