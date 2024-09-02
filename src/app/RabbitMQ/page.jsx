import MaxContainer from '../components/common/maxContainer'
import Hero from '../components/rabbitMQ/hero'
import Brands from '../components/common/brand'
import Info from '../components/rabbitMQ/info'
import Achievement from '../components/rabbitMQ/achievement'
import Services from '../components/rabbitMQ/services'
import Impact from '../components/common/impact'
import Capabilities from '../components/rabbitMQ/capabilities'
import Contact from '../components/common/contact'

const RabbitMQ = () => {
    return (
        <>
            <MaxContainer>
                <Hero />
                <Brands />
                <Info />
                <Achievement />
                <Services />
                <Impact />
                <Capabilities />
                <Contact />
            </MaxContainer>
        </>
    );
}

export default RabbitMQ;