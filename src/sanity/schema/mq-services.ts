import { defineType, defineField, defineArrayMember } from 'sanity'

export const mqservices = defineType({
  title: "MQ Services",
  name: "mq-services",
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
  ]
})  