// "use client";
// import { useParams } from "next/navigation";
import MaxContainer from "../../components/common/maxContainer";
import Hero from "../../components/stories/hero";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import {singleBlog} from "../../../sanity/lib/query"
import BlockContent from "@sanity/block-content-to-react";

export async function generateMetadata({ params }) {
  const id = params.storyId;
  const story = await client.fetch(singleBlog, { slug: id });
  
  return {
    title: story?.meta_title || story?.title,
    description: story?.meta_description || story?.excerpt,
    alternates: {
      canonical: `https://acemq.com/blogs/${story?.slug?.current}/`,
    },
    openGraph: {
      title:story?.meta_title || story?.title,
      description: story?.meta_description || story?.excerpt,
      url: `https://acemq.com/blogs/${story?.slug?.current}/`,
      siteName: "AceMQ Consulting",
      // Add image URL here if available
      locale: "en_US",
      type: "website",
    },
  };
}


async function getData(slug) {
  const blog = await client.fetch(singleBlog, { slug });
  return {
      blog
  }
}


const Index = async ({ params }) => {
  //   const params = useParams();
  const dataId = params.storyId;
  const {blog} = await getData(params.storyId)

  return (
    <MaxContainer>
      <Hero title="Blogs"/>
      <section className="sm:px-[10rem] px-[3rem] py-[5rem] pb-[10rem] text-black bg-white">
        <Image
          width={450}
          className="w-[50rem]"
          height={350}
          src={blog?.image?.asset?.url}
          alt="image"
        />
        <h3 className="text-[2rem] font-[700] mt-[4rem] mb-[3rem]">
          {blog?.title}
        </h3>

        <div className="content">
          <BlockContent
            blocks={blog?.content}
            projectId="ordduge7"
            dataset="production"
          />
        </div>
      </section>
    </MaxContainer>
  );
};

export default Index;
