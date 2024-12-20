import ButtonLink from "../common/ButtonLink";
import MaxContainer from "../../components/common/maxContainer/index"


const CTA = () => {
    return (
        <section className="bg-white px-[2rem] sm:px-[15rem] sm:pb-[15rem] py-[6rem] text-[#000000]">
                <div className="flex max-w-[1200px] sm:mx-auto flex-col border relative border-[#8FD5CC] sm:border-[#929292] py-[6rem] rounded-[1.5rem] w-full">
                    <img src="/acemq_banner.png" alt="logo" className="self-center absolute top-[-2rem] w-[15rem]" />

                    <h3 className="text-[2.3rem] sm:text-[3rem] text-center w-[80%] mx-auto font-[700]">Transform Your <span className="text-[#8FD5CC]">Redis Investment</span> into a <span className="text-[#8FD5CC]">Strategic Asset</span></h3>
                    <p className="text-center sm:w-[60rem] sm:mx-auto mt-[2rem]">Redis doesn’t have to be complex. Let our expert team guide you through every aspect of Redis technology, from setup and scaling to troubleshooting and optimization.</p>

                    <ButtonLink
                        link={""}
                        text={"Contact Our Redis Experts"}
                    />
                </div>
        </section>
    );
}

export default CTA;