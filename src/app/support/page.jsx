import MaxContainer from '../components/common/maxContainer'
import Hero from '../components/support/hero'
import Body from '../components/support/body'
import Banner from '../components/support/banner'
import Contact from '../components/common/contact'
import { QSupport } from '../../sanity/lib/query'
import { client } from '../../sanity/lib/client'

// export const metadata = {
//   title: "RabbitMQ Support Services | Troubleshooting & Maintenance",
//   description:
//     "Get expert RabbitMQ support with AceMQ. We offer troubleshooting, professional services, and ongoing maintenance to ensure your RabbitMQ systems run smoothly.",
//   alternates: {
//     canonical: "https://acemq.com/support",
//   },
//   openGraph: {
//     title: "RabbitMQ Support Services | Troubleshooting & Maintenance",
//     description:
//       "Get expert RabbitMQ support with AceMQ. We offer troubleshooting, professional services, and ongoing maintenance to ensure your RabbitMQ systems run smoothly.",
//     url: "https://acemq.com/support",
//     siteName: "AceMQ Consulting",
//     // Add image URL here if available
//     locale: "en_US",
//     type: "website",
//   },
// };

export async function generateMetadata() {
  const res = await client.fetch(QSupport);
  const data = res?.[0]    
  return {
    title: data?.meta_title,
    description: data?.meta_description,
    alternates: {
      canonical: `https://acemq.com/support`,
    },
    openGraph: {
      title:data?.meta_title,
      description: data?.meta_description,
      url: `https://acemq.com/support`,
      siteName: "AceMQ Consulting",
      // Add image URL here if available
      locale: "en_US",
      type: "website",
    },
  };
}

const Services = () => {
  return (
    <>
      <div className="bg-black">
        <MaxContainer>
          <Hero />
        </MaxContainer>
      </div>
      <MaxContainer>
        <Body />
        <Banner />
        <Contact />
      </MaxContainer>
    </>
  );
}

export default Services;