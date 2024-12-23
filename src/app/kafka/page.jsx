import Hero from "../components/kafka/hero"
import Expert from "../components/kafka/expert";
import Offerings from "../components/kafka/offering";
import Partner from "../components/kafka/partner";
import Services from "../components/kafka/services";
import Features from "../components/kafka/features";
import CTA from "../components/kafka/cta";
import MaxContainer from "../components/common/maxContainer/index"
import Contact from "../components/common/contact"

const Kafka = () => {
    return (
        <div className="pt-[6.5rem] sm:pt-[10rem]">
            <Hero />
            <Expert />
            <Offerings />
            <Partner />
            <Services />
            <Features />
            <CTA />
            <div className="sm:mt-[-20rem]">
                <MaxContainer>
                    <Contact />
                </MaxContainer>
            </div>
        </div>
    );
}

export default Kafka;