import Image from "next/image";
const Index = () => {
    return (
        <section className="relative sm:pt-[9rem] pt-[5.9rem]">
            <div className="relative px-[1.5rem] sm:px-[10rem] sm:pt-[20rem] pt-[5rem]  sm:pb-[13rem] pb-[5rem]">
                <Image src='/blog_bg.png' className="absolute mix-blend-hard-light inset-0 sm:hidden top-0 w-[100%] h-[100%]" width={790} height={387} alt="wheel" />
                <Image src='/blog_bg_sm.png' className="absolute mix-blend-hard-light sm:block hidden inset-0 top- w-[100%] h-[100%]" width={1920} height={940} alt="wheel" />
                <div className="flex flex-col items-center relative">
                    <h1 className="header">Our <span className="text-accent-100">Blogs</span></h1>
                </div>
            </div>
        </section>
    );
}

export default Index;