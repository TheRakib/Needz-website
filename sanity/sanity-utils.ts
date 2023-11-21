import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Blog, Topic } from "@/Types";

export async function getPosts(
  search: string = "",
  topic: string = "*"
): Promise<Blog[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blogPost" && title match "${search}*"  && references(*[_type=="topics" &&topic match "${topic}"  ]._id) ]{
      _id,
      _createdAt,
      title,
      "topic": topic->topic,
      "author":{
        "name": author->name,
        "facebook":author->facebook,
        "twitter": author->tweeter,
        "instagram": author->instagram,
      },
      "slug": slug.current,
      "bannerImg": bannerImg.asset->url
    }`
  );
}
// && title match "*"  && references(*[_type=="topics" &&topic match "Plumber*"  ]._id)
export async function getPost(slug: string): Promise<Blog> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blogPost" && slug.current == "${slug}"][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "bannerImg": bannerImg.asset->url,

      mainText,
      "mainTextImg": mainTextImg.asset->url,

      middleTitle,
      middleTextLeft,
      middleTextRight,

      appendix,

      secondText,
      "secondTextImg": secondTextImg.asset->url,

      lastTitle,
      lastText,
      
      summeryTitle,
      summery
    }`,
    { slug }
  );
}

// -----------topics
export async function getTopics(): Promise<Topic[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "topics" ]{
      _id,
      _createdAt,
      topic,
    }`
  );
}
