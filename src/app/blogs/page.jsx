import MaxContainer from '../components/common/maxContainer'
import Hero from '../components/blogs/hero'
import Posts from '../components/blogs/posts'
import { client } from '../../sanity/lib/client';
import { AllPostQuery } from '../../sanity/lib/query';

async function getData() {
    const allblogs = await client.fetch(AllPostQuery);
    const featuredBlog = allblogs.find((item)=>item?.featured)
    return {
        allblogs: allblogs?.filter((item)=>item.slug.current !== featuredBlog?.slug.current),
        featuredBlog
    }
}

const Blogs = async () => {
    const {allblogs, featuredBlog} = await getData()
    return (
        <>
            <Hero />
            <Posts blogs={allblogs} featuredBlog={featuredBlog}/>
        </>
    );
}

export default Blogs;