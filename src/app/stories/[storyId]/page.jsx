import MaxContainer from "../../components/common/maxContainer";
import Hero from "../../components/stories/hero";
import Image from "next/image";
import { QsingleStory } from "../../../sanity/lib/query";
import { client } from "../../../sanity/lib/client";
import BlockContent from "@sanity/block-content-to-react";


export async function generateMetadata({ params }) {
  const id = params.storyId;
  const story = await client.fetch(QsingleStory, { slug: id });
  
  return {
    title: story?.meta_title || story?.title,
    description: story?.meta_description || story?.excerpt,
    alternates: {
      canonical: `https://acemq.com/stories/${story?.slug?.current}/`,
    },
    openGraph: {
      title:story?.meta_title || story?.title,
      description: story?.meta_description || story?.excerpt,
      url: `https://acemq.com/stories/${story?.slug?.current}/`,
      siteName: "AceMQ Consulting",
      // Add image URL here if available
      locale: "en_US",
      type: "website",
    },
  };
}

async function getData(slug) {
  const story = await client.fetch(QsingleStory, { slug });
  return {
      story
  }
}

const Index = async ({ params }) => {
  //   const params = useParams();
  const dataId = params.storyId;
  const { story } = await getData(params.storyId)

  return (
    <MaxContainer>
      <Hero />
      <section className="sm:px-[10rem] px-[3rem] py-[5rem] pb-[10rem] text-black bg-white">
        <Image
          width={450}
          className="w-[50rem]"
          height={350}
          src={story?.image?.asset?.url}
          alt="image"
        />
        <h3 className="text-[2rem] font-[700] mt-[4rem] mb-[3rem]">
          {story?.title}
        </h3>

        <div className="content">
          <BlockContent
            blocks={story?.content}
            projectId="ordduge7"
            dataset="production"
          />
        </div>
      </section>
    </MaxContainer>
  );
};

export default Index;
