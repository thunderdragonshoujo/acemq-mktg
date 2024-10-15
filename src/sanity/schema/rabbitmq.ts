import { defineField } from "sanity";

export default {
    name: 'rabbitmq',
    title: 'RabbitMQ Page',
    type: 'document',
    __experimental_actions: ['update', 'publish', 'delete'], // Disable 'create'
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
        type: "text",
        group: 'seo'
      }),
    ],
  };
  