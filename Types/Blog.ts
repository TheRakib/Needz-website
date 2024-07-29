import { PortableTextBlock } from "sanity";

export type Blogs = {
  posts: Post[];
  totalCount: number;
};

export type Post = {
  _id: string;
  _createdAt: string;
  author: {
    name: string;
    facebook: string;
    twitter: string;
    instagram: string;
  };
  title: string;
  slug: string;
  metaDescription: string;
  bannerImg: string;

  mainText: PortableTextBlock[];
  mainTextImg: string;

  middleTitle: string;
  middleTextLeft: PortableTextBlock[];
  middleTextRight: PortableTextBlock[];

  appendix: PortableTextBlock[];

  secondText: PortableTextBlock[];
  secondTextImg: string;

  lastTitle: string;
  lastText: PortableTextBlock[];

  summeryTitle: string;
  summery: PortableTextBlock[];

  previousSlug: string;
  nextSlug: string;
};
