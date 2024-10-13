"use client"
import { useState } from 'react';
import Link from "next/link";
import MaxConatiner from '../../common/maxContainer';

const Index = ({ featuredBlog, blogs }) => {
    const [visibleCount, setVisibleCount] = useState(3); // Set initial visible blogs to 3

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 6); // Load 6 more blogs on each click
    };

    return (
        <section className="bg-white px-[3rem] sm:px-[10rem] py-[5rem] text-[#232323]">
            <MaxConatiner>
                <div className="flex flex-col">
                    {featuredBlog && (
                        <div className="sm:flex sm:flex-row-reverse sm:gap-[7rem] sm:items-center sm:mb-[7rem]">
                            <div className="sm:flex-1">
                                <div className="flex items-center justify-between text-[#5747A5] mb-[1.5rem] sm:w-[80%]">
                                    <p className="font-[600]">Featured</p>
                                    {/* Add formatDate for date if needed */}
                                </div>
                                <h2 className="text-[2.5rem] font-[700] text-black mb-[1rem]">{featuredBlog?.title}</h2>
                                <p className="mb-[1.5rem] hidden sm:block sm:w-[80%]">{featuredBlog?.excerpt}</p>
                                <Link href={"/blogs/" + featuredBlog?.slug?.current} className="font-[700] w-[8rem] text-[1.4rem] pr-[1rem] sm:block hidden mb-[3rem] border-b-[2px] border-[#5747A5]">Read Post</Link>
                            </div>

                            <img src={featuredBlog?.image?.asset?.url} alt="" className="mb-[1.5rem] sm:w-[45rem] sm:flex-1" />
                            <p className="mb-[1.5rem] sm:hidden">{featuredBlog?.excerpt}</p>
                            <Link href={"/blogs/" + featuredBlog?.slug?.current} className="font-[700] text-[1.4rem] pr-[1rem] sm:hidden mb-[3rem] border-b-[2px] border-[#5747A5]">Read Post</Link>
                        </div>
                    )}

                    <div className="responsive-grid mt-[3rem] sm:mt-[0]">
                        {blogs?.slice(0, visibleCount).map((post, index) => (
                            <Post post={post} key={index} style={''} />
                        ))}
                    </div>

                    {/* Show the 'View More' button only if there are more blogs to show */}
                    {visibleCount < blogs.length && (
                        <button onClick={handleLoadMore} className="btn border-[#8167FF] border-[2px] text-[#8167FF] self-center sm:mt-[4.5rem]">
                            View More
                        </button>
                    )}
                </div>
            </MaxConatiner>
        </section>
    );
}

export default Index;


const Date = ({ style }) => (
    <p className={`flex gap-[.5rem] ${style} items-center`}>
        <img src="/calender.svg" className="border" alt="" /> 9 Jan 2024
    </p>
);

const Post = ({ style, post }) => {
    return (
        <div className={`${style} flex flex-col w-[25rem] mx-auto sm:w-[35rem] self-center`}>
            <Date style={'self-end mb-[1rem] sm:hidden'} />
            <img src={post?.image?.asset?.url} alt={post.title} className="" />
            <p className="text-[#8167FF] mb-[.5rem]">{post.title}</p>
            <h2 className="text-[1.5rem] w-[90%] font-[700] sm:text-[1.8rem]">{post?.title}</h2>
            <p className="mt-[2rem]">{post.excerpt}.</p>
            <Link href={"/blogs/" + post?.slug?.current} className="font-[700] mt-[1rem] self-start text-[1.4rem] pr-[1rem] mb-[3rem] border-b-[2px] border-[#5747A5]">Read More</Link>
        </div>
    );
};
