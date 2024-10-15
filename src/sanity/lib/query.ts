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

export const QHome = `*[ _type == "home"]{
  meta_title,
  meta_description,
  meta_tags,
}`

export const QRabbitmq = `*[ _type == "rabbitmq"]{
  meta_title,
  meta_description,
  meta_tags,
}`

export const QSupport = `*[ _type == "support"]{
  meta_title,
  meta_description,
  meta_tags,
}`

export const QServices = `*[ _type == "mq-services"]{
  meta_title,
  meta_description,
  meta_tags,
}`

export const QFIPS = `*[ _type == "fips"]{
  meta_title,
  meta_description,
  meta_tags,
}`

export const QContact = `*[ _type == "contact"]{
  meta_title,
  meta_description,
  meta_tags,
}`