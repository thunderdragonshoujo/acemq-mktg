import ButtonLink from "../common/ButtonLink";
import MaxContainer from "../../components/common/maxContainer/index"


const CTA = () => {
    return (
        <section className=" px-[2rem] sm:px-[15rem] sm:pb-[15rem] py-[6rem] text-[#000000]">
                <div className="flex text-white bg-[black] max-w-[1200px] sm:mx-auto flex-col border relative border-[#8FD5CC] sm:border-[#929292] py-[6rem] rounded-[1.5rem] w-full">
                    <img src="/orange_mq.svg" alt="logo" className="self-center absolute top-[-2rem] w-[15rem]" />

                    <h3 className="text-[2.3rem] sm:text-[4rem] sm:w-[50rem] text-center w-[80%] mx-auto font-[700]">Ready to transform your  <span className="text-[#FF6600]"> Kafka Ecosystem?</span></h3>
                    <p className="text-center sm:w-[60rem] w-[90%] mx-auto sm:mx-auto mt-[2rem]">Don’t let Kafka’s complexities slow you down. Whether you’re an open-source advocate or exploring Confluent’s enterprise capabilities, we’ll provide the guidance, optimization, and support you need.</p>

                    <ButtonLink
                        link={"#contact"}
                        text={"Schedule a Free Consultation"}
                        className={"border-white"}
                    />
                </div>
        </section>
    );
}

export default CTA;