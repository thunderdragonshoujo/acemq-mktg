import {defineType, defineField, defineArrayMember} from 'sanity'

export const customerStories = defineType({
  title: "Customer Stories",
  name: "customer-stories",
  type: "document",
  groups: [
    {
      name: 'data-fields',
      title: 'Data Fields',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      group: 'data-fields'
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      group: 'data-fields',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[:.,]/g, '')
          .slice(0, 200)
      }
    }),
    defineField({
      title: "Excerpt",
      name: "excerpt",
      type: "text",
      group: 'data-fields'
    }),
    defineField({
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      group: 'data-fields'
    }),
    defineField({
      title: "Profile Image",
      name: "profile_image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      group: 'data-fields'
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      group: 'data-fields',
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Alternative text",
              description: `Some of your visitors cannot see images, 
                be they blind, color-blind, low-sighted; 
                alternative text is of great help for those 
                people that can rely on it to have a good idea of 
                what\'s on your page.`,
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    }),
    // SEO Fields 
    defineField({
      title: "Meta Title",
      name: "meta_title",
      type: "string",
      group: 'seo'
    }),
    defineField({
      title: "Meta Description",
      name: "meta_description",
      type: "text",
      group: 'seo'
    }),
    defineField({
      title: "Meta Tags",
      name: "meta_tags",
      description: "Tags seprate with ,",
      type: "string",
      group: 'seo'
    }),
    // defineField({
    //   title: "Nofollow",
    //   name: "nofollow",
    //   type: "boolean",
    //   group: 'seo'
    // }),
  ]
})  