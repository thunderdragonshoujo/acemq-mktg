import MaxContainer from "../components/common/maxContainer";
import Hero from "../components/contact/hero";
import Body from "../components/contact/body";
import Brand from '../components/common/brand'
import {QContact} from "../../sanity/lib/query"
import { client } from "../../sanity/lib/client";

// export const metadata = {
//   title: "Contact AceMQ | Expert RabbitMQ Support & Consulting",
//   description:
//     "Reach out to AceMQ Consulting for expert support and consulting in RabbitMQ and other messaging and queuing solutions. Contact us today to learn how we can optimize your systems.",
//   alternates: {
//     canonical: "https://acemq.com/contact-us/",
//   },
//   openGraph: {
//     title: "Contact AceMQ | Expert RabbitMQ Support & Consulting",
//     description:
//       "Reach out to AceMQ Consulting for expert support and consulting in RabbitMQ and other messaging and queuing solutions. Contact us today to learn how we can optimize your systems.",
//     url: "https://acemq.com/contact",
//     siteName: "AceMQ Consulting",
//     // Add image URL here if available
//     locale: "en_US",
//     type: "website",
//   },
// };


export async function generateMetadata() {
  const res = await client.fetch(QContact);
  const data = res?.[0]    
  return {
    title: data?.meta_title,
    description: data?.meta_description,
    alternates: {
      canonical: `https://acemq.com/contact-us`,
    },
    openGraph: {
      title:data?.meta_title,
      description: data?.meta_description,
      url: `https://acemq.com/contact-us`,
      siteName: "AceMQ Consulting",
      // Add image URL here if available
      locale: "en_US",
      type: "website",
    },
  };
}


const Index = () => {
  return (
    <MaxContainer>
      <Hero />
      <Body />
    </MaxContainer>
  );
};

export default Index;
