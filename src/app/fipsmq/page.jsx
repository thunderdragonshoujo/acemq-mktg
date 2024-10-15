import MaxContainer from "../components/common/maxContainer";
import Hero from "../components/Fips/hero";
import Body from "../components/Fips/body";
import Banner from "../components/Fips/banner";
import Contact from "../components/common/contact";
import {QFIPS} from "../../sanity/lib/query"

// export const metadata = {
//   title: "FIPS Compliance | Secure RabbitMQ Solutions by AceMQ",
//   description:
//     "Ensure your RabbitMQ systems meet FIPS compliance with AceMQ's expert services. We provide secure, compliant messaging solutions tailored to your business needs.",
//   alternates: {
//     canonical: "https://acemq.com/fipsmq/",
//   },
//   openGraph: {
//     title: "FIPS Compliance | Secure RabbitMQ Solutions by AceMQ",
//     description:
//       "Ensure your RabbitMQ systems meet FIPS compliance with AceMQ's expert services. We provide secure, compliant messaging solutions tailored to your business needs.",
//     url: "https://acemq.com/FIPs/",
//     siteName: "AceMQ Consulting",
//     // Add image URL here if available
//     locale: "en_US",
//     type: "website",
//   },
// };


export async function generateMetadata() {
  const res = await client.fetch(QFIPS);
  const data = res?.[0]    
  return {
    title: data?.meta_title,
    description: data?.meta_description,
    alternates: {
      canonical: `https://acemq.com/fipsmq`,
    },
    openGraph: {
      title:data?.meta_title,
      description: data?.meta_description,
      url: `https://acemq.com/fipsmq`,
      siteName: "AceMQ Consulting",
      // Add image URL here if available
      locale: "en_US",
      type: "website",
    },
  };
}


const FIPs = () => {
  return (
    <>
      <section className="bg-black">
        <MaxContainer>
          <Hero />
        </MaxContainer>
      </section>
      <MaxContainer>
        <Body />
        <Banner />
        <Contact />
      </MaxContainer>
    </>
  );
};

export default FIPs;
