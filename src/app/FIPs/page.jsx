import MaxContainer from '../components/common/maxContainer';
import Hero from '../components/Fips/hero'
import Body from '../components/Fips/body'
import Banner from '../components/Fips/banner'
import Contact from '../components/common/contact'

export const metadata = {
    title: "FIPS Compliance | Secure RabbitMQ Solutions by AceMQ",
    description:
      "Ensure your RabbitMQ systems meet FIPS compliance with AceMQ's expert services. We provide secure, compliant messaging solutions tailored to your business needs.",
    alternates: {
      canonical: "https://acemq.com/FIPs/",
    },
    openGraph: {
      title: "FIPS Compliance | Secure RabbitMQ Solutions by AceMQ",
      description:
        "Ensure your RabbitMQ systems meet FIPS compliance with AceMQ's expert services. We provide secure, compliant messaging solutions tailored to your business needs.",
      url: "https://acemq.com/FIPs/",
      siteName: "AceMQ Consulting",
      // Add image URL here if available
      locale: "en_US",
      type: "website",
    },
  };

const FIPs = () => {
    return (
        <MaxContainer>
            <Hero />
            <Body />
            <Banner />
            <Contact />
        </MaxContainer>
    );
}

export default FIPs;