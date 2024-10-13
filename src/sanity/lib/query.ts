export const AllPostQuery = `*[_type == "blogs"] | order(_createdAt desc){
    title,
    slug,
    excerpt,
    image{
      asset->{
        url
      }
    },
    content,
    _createdAt,
    featured
}`;

export const singleBlog = `*[ _type == "blogs" && slug.current == $slug ][0]{
    title,
    slug,
    excerpt,
    image{
      asset->{
        url
      }
    },
    content,
    _createdAt,
    featured,
    meta_title,
    meta_description,
    meta_tags,
    nofollow,
}`


export const QAllStories = `*[ _type == "customer-stories"] | order(_createdAt desc){
  title,
  slug,
  excerpt,
  image{
    asset->{
      url
    }
  },
  profile_image{
    asset->{
      url
    }
  },
  content,
  _createdAt
}`

export const QsingleStory = `*[ _type == "customer-stories" && slug.current == $slug ][0]{
  title,
  slug,
  excerpt,
  image{
    asset->{
      url
    }
  },
  profile_image{
    asset->{
      url
    }
  },
  content,
  meta_title,
  meta_description,
  meta_tags,
  nofollow,
  _createdAt
}`