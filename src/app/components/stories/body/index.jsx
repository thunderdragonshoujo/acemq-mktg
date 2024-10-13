import Image from "next/image";
import Link from "next/link";

async function getData(slug) {
  const blog = await client.fetch(singleBlog, { slug });
  return {
      blog
  }
}

const Index = ({allstories}) => {
  return (
    <section className="responsive-grid px-[3rem] sm:px-[10rem] sm:py-[10rem] py-[5rem] bg-white text-black">
      {allstories?.map((card, index) => (
        <Card card={card} key={index} id={index} />
      ))}
    </section>
  );
};

export default Index;

const Card = ({ card, id }) => {
  return (
    <div className="w-[350px]">
      <div className="relative">
        <Image
          src={card.image.asset.url}
          className="rounded-[1rem] border"
          width={420}
          height={320}
          alt="card image"
        />
        <div className="border sm:bottom-[-3rem] sm:right-[-3rem] bottom-[-2rem] right-[-2rem] absolute border-dashed sm:w-[7rem] w-[5.5rem] sm:h-[7rem] rounded-full p-[.2rem] border-[#9B86FE]">
          <img src={card.profile_image.asset.url} alt={card.title} />
        </div>
      </div>

      <div className="sm:w-[40rem] sm:mt-[3rem] mt-[2rem]">
        <h4 className="sm:text-[2.8rem] text-[2rem] font-[700]">
          {card.title}
        </h4>
        <p className="text-[#232323] font-[400] mt-[1rem]">{card.excerpt}</p>
      </div>

      <Link
        href={`/stories/${card?.slug.current}`}
        className="sm:mt-[3.5rem] mt-[2rem] text-[1.4rem] font-[700] border sm:px-[2.5rem] rounded-[1rem] inline-block  sm:py-[1.2rem] px-[2rem] py-[1rem] border-[#232323] hover:scale-[1.1] transition-all"
      >
        Learn More
      </Link>
    </div>
  );
};
