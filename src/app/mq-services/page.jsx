import MaxContainer from "../components/common/maxContainer";
import Hero from "../components/MQServices/hero";
import Body from "../components/MQServices/body";
import Banner from "../components/MQServices/banner";
import Contact from "../components/common/contact";
import { QServices } from "../../sanity/lib/query";
import { client } from "../../sanity/lib/client";

// export const metadata = {
//   title: "RabbitMQ Services | Comprehensive Messaging & Queuing Support",
//   description:
//     "Explore AceMQ's RabbitMQ services, including consulting, support, and professional services. Our experts ensure reliable, scalable, and efficient RabbitMQ systems.",
//   alternates: {
//     canonical: "https://acemq.com/mq-services/",
//   },
//   openGraph: {
//     title: "RabbitMQ Services | Comprehensive Messaging & Queuing Support",
//     description:
//       "Explore AceMQ's RabbitMQ services, including consulting, support, and professional services. Our experts ensure reliable, scalable, and efficient RabbitMQ systems.",
//     url: "https://acemq.com/MQServices",
//     siteName: "AceMQ Consulting",
//     // Add image URL here if available
//     locale: "en_US",
//     type: "website",
//   },
// };

export async function generateMetadata() {
  const res = await client.fetch(QServices);
  const data = res?.[0]    
  return {
    title: data?.meta_title,
    description: data?.meta_description,
    alternates: {
      canonical: `https://acemq.com/mq-services`,
    },
    openGraph: {
      title:data?.meta_title,
      description: data?.meta_description,
      url: `https://acemq.com/mq-services`,
      siteName: "AceMQ Consulting",
      // Add image URL here if available
      locale: "en_US",
      type: "website",
    },
  };
}

const MQServices = () => {
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

export default MQServices;
