import Link from "next/link";
import MaxConatiner from '../../common/maxContainer'
const Index = () => {
    const posts = [
        {
            image: '/blog_post_1.png',
            header: 'MongooseIM 6.2: Easy to set up, use and manage',
            text: 'Discover MongooseIM 6.2 for streamlined messaging with easy clustering and updated XMPP extensions, enhancing user-friendliness and cost efficiency.',
            link: ''
        },
        {
            image: '/blog_post_2.svg',
            header: 'MongooseIM 6.2: Easy to set up, use and manage',
            text: 'Discover MongooseIM 6.2 for streamlined messaging with easy clustering and updated XMPP extensions, enhancing user-friendliness and cost efficiency.',
            link: ''
        },
        {
            image: '/blog_post_3.png',
            header: 'MongooseIM 6.2: Easy to set up, use and manage',
            text: 'Discover MongooseIM 6.2 for streamlined messaging with easy clustering and updated XMPP extensions, enhancing user-friendliness and cost efficiency.',
            link: ''
        },
        {
            image: '/blog_post_4.png',
            header: 'MongooseIM 6.2: Easy to set up, use and manage',
            text: 'Discover MongooseIM 6.2 for streamlined messaging with easy clustering and updated XMPP extensions, enhancing user-friendliness and cost efficiency.',
            link: ''
        },
        {
            image: '/blog_post_5.png',
            header: 'MongooseIM 6.2: Easy to set up, use and manage',
            text: 'Discover MongooseIM 6.2 for streamlined messaging with easy clustering and updated XMPP extensions, enhancing user-friendliness and cost efficiency.',
            link: ''
        },
        {
            image: '/blog_post_6.png',
            header: 'MongooseIM 6.2: Easy to set up, use and manage',
            text: 'Discover MongooseIM 6.2 for streamlined messaging with easy clustering and updated XMPP extensions, enhancing user-friendliness and cost efficiency.',
            link: ''
        },
        {
            image: '/blog_post_7.png',
            header: 'MongooseIM 6.2: Easy to set up, use and manage',
            text: 'Discover MongooseIM 6.2 for streamlined messaging with easy clustering and updated XMPP extensions, enhancing user-friendliness and cost efficiency.',
            link: ''
        },
        {
            image: '/blog_post_8.png',
            header: 'MongooseIM 6.2: Easy to set up, use and manage',
            text: 'Discover MongooseIM 6.2 for streamlined messaging with easy clustering and updated XMPP extensions, enhancing user-friendliness and cost efficiency.',
            link: ''
        },
        {
            image: '/blog_post_9.png',
            header: 'MongooseIM 6.2: Easy to set up, use and manage',
            text: 'Discover MongooseIM 6.2 for streamlined messaging with easy clustering and updated XMPP extensions, enhancing user-friendliness and cost efficiency.',
            link: ''
        },

    ]
    return (
        <section className="bg-white px-[3rem] sm:px-[10rem] py-[5rem] text-[#232323]">
            <MaxConatiner>
                <div className="flex flex-col">
                    <div className="sm:flex sm:flex-row-reverse sm:gap-[7rem] sm:items-center sm:mb-[7rem]">
                        <div className="sm:flex-1">
                            <div className="flex items-center justify-between text-[#5747A5] mb-[1.5rem] sm:w-[80%]">
                                <p className="font-[600]">Featured</p>
                                <Date />
                            </div>
                            <h2 className="text-[2.5rem] font-[700] text-black mb-[1rem]">Advent of Code 2023</h2>
                            <p className="mb-[1.5rem] hidden sm:block sm:w-[80%]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

                            <Link href={''} className="font-[700] w-[8rem] text-[1.4rem] pr-[1rem] sm:block hidden mb-[3rem] border-b-[2px] border-[#5747A5]">Read Post</Link>
                        </div>

                        <img src="/advent_of_code.png" alt="" className="mb-[1.5rem] sm:w-[45rem] sm:flex-1" />
                        <p className="mb-[1.5rem] sm:hidden">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

                        <Link href={''} className="font-[700] text-[1.4rem] pr-[1rem] sm:hidden mb-[3rem] border-b-[2px] border-[#5747A5]">Read Post</Link>
                    </div>
                    <div className="responsive-grid mt-[3rem] sm:mt-[0]">
                        {posts.map((post, index) => <Post post={post} key={index} style={''} />)}
                    </div>
                    <button className="btn border-[#8167FF] border-[2px] text-[#8167FF] self-center sm:mt-[4.5rem]">View More</button>
                </div>
            </MaxConatiner>
        </section>
    );
}

export default Index;


const Date = ({ style }) => (<p className={`flex gap-[.5rem] ${style} items-center`}><img src="/calender.svg" className="border" alt="" />  9 Jan 2024</p>)

const Post = ({ style, post }) => {
    return (
        <div className={`${style} flex flex-col w-[25rem] mx-auto sm:w-[35rem] self-center`}>
            <Date style={'self-end  mb-[1rem] sm:hidden'} />
            <img src={post.image} alt="blog_post" className="" />
            <p className="text-[#8167FF] mb-[.5rem]">{post.header}</p>
            <h2 className="text-[1.5rem] w-[90%] font-[700] sm:text-[1.8rem]">MongooseIM 6.2: Easy to set up, use and manage</h2>
            <p className="mt-[2rem]">{post.text}.</p>
            <Link href={post.link} className="font-[700] mt-[1rem] self-start text-[1.4rem] pr-[1rem] mb-[3rem] border-b-[2px] border-[#5747A5]">Read More</Link>
        </div>
    )
}