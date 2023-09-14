export default {
    name: 'resource',
    title: 'Resource',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'astroicon',
        title: 'Astro Icon',
        type: 'string',
      },
      {
        name: 'cmsicon',
        title: 'Icon',
        type: "iconPicker",
        options: {
          value: icon => icon.name,
          outputFormat: 'react',
          storeSvg: true,
        }
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title', // This means the slug content will be derived from the 'title' field
          maxLength: 96, // Limit the length of the slug
        },
        validation: Rule => Rule.required() // Make this field required
      },
      {
        name: 'link',
        title: 'Link',
        type: 'url',
      },
      // Add other fields as required
    ],
  };
  