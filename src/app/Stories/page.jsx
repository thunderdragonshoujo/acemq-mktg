import MaxContainer from "../components/common/maxContainer";
import Hero from "../components/stories/hero";
import Body from "../components/stories/body";

export const metadata = {
  title: "RabbitMQ Success Stories | AceMQ's Customer Success",
  description:
    "Discover how AceMQ's RabbitMQ consulting and support services have helped clients optimize their systems. Read customer stories and case studies showcasing successful RabbitMQ implementations.",
  alternates: {
    canonical: "https://acemq.com/stories",
  },
  openGraph: {
    title: "RabbitMQ Success Stories | AceMQ's Customer Success",
    description:
      "Discover how AceMQ's RabbitMQ consulting and support services have helped clients optimize their systems. Read customer stories and case studies showcasing successful RabbitMQ implementations.",
    url: "https://acemq.com/stories",
    siteName: "AceMQ Consulting",
    // Add image URL here if available
    locale: "en_US",
    type: "website",
  },
};

const Stories = () => {
  return (
    <MaxContainer>
      <Hero />
      <Body />
    </MaxContainer>
  );
};

export default Stories;
