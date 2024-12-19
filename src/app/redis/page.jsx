import Hero from "../components/redis/hero";
import Brands from "../components/redis/brand"
import GlobalServices from "../components/redis/globalService";
import RedisSolutions from "../components/redis/solution";
import Expertise from "../components/redis/expertise";
import Service from "../components/redis/service";
import CTA from "../components/redis/cta";
import Contact from "../components/common/contact"

const Redis = () => {
    return (
        <div className="pt-[6.5rem] sm:pt-[10rem]">
            <Hero />
            <Brands />
            <GlobalServices />
            <RedisSolutions />
            <Expertise />
            <Service />
            <CTA />
            <div className="sm:mt-[-20rem]">
                <Contact />
            </div>
        </div>
    );
}

export default Redis;