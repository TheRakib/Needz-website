import { PortableTextBlock } from "sanity";

export type Blog = {
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
  bannerImg: string;
  mainText: PortableTextBlock[];
  mainTextImg: string;
  middleText: PortableTextBlock[];
  secondText: PortableTextBlock[];
  secondTextImg: string;
  lastTitle: string;
  lastText: PortableTextBlock[];
  summeryTitle: string;
  summery: PortableTextBlock[];
};
