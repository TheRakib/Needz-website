const blogPost = {
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "bannerImg",
      title: "Banner Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "mainText",
      title: "Main Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "mainTextImg",
      title: "Main Text Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "middleText",
      title: "Middle Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "secondText",
      title: "Second Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "secondTextImg",
      title: "Second Text Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },

    {
      name: "lastTitle",
      title: "Last Text Title",
      type: "string",
    },
    {
      name: "lastText",
      title: "Last Text",
      type: "array",
      of: [{ type: "block" }],
    },

    {
      name: "summeryTitle",
      title: "Summery Title",
      type: "string",
    },
    {
      name: "summery",
      title: "Summery Text",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default blogPost;
