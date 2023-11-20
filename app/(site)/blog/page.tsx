"use client";
import { Blog } from "@/Types";
import BlogCard from "@/components/Blog/BlogCard";
import Featured from "@/components/Blog/Featured";
import Search from "@/components/Blog/Search";
import Topics from "@/components/Blog/Topics";
import ServicesBanner from "@/components/Services/ServicesBanner";
import UserCard from "@/components/Services/UserCard";
import { getPosts } from "@/sanity/sanity-utils";
import { Pagination, PaginationItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaChevronRight } from "react-icons/fa6";

export default function Page() {
  const [blogs, setBlogs] = useState<Blog[]>();
  console.log("blogs", blogs);

  useEffect(() => {
    const fetchAndSetPost = async () => {
      const post = await getPosts();
      setBlogs(post);
    };

    fetchAndSetPost();
  }, []);

  return (
    <div>
      <ServicesBanner
        title="Blog/Newsletter"
        breadcrumb="Blog/Newsletter page"
        img="/blog/banner.png"
      />
      <div className="max-w-layout mx-auto mt-10">
        <div className="flex gap-4 xl:gap-10 flex-col md:flex-row">
          {/* -------left side----- */}
          <div className="w-[370px] flex flex-col gap-5 px-2">
            <Search />
            <Topics />
            <Featured />
            <UserCard />
          </div>
          {/* ---------right side------- */}
          <div className="flex flex-col gap-[50px]">
            <div className="w-full flex flex-col gap-[10px] px-2">
              {blogItems.map((item) => (
                <BlogCard key={item.id} item={item} />
              ))}
            </div>
            {/* ------pagination------- */}
            <div className="flex items-center justify-center w-full px-2">
              <Pagination
                count={10}
                variant="outlined"
                shape="rounded"
                renderItem={(item) => (
                  <PaginationItem
                    slots={{
                      previous: () => (
                        <div className="flex items-center gap-1">
                          <FaAngleLeft size={10} />
                          Previous
                        </div>
                      ),
                      next: () => (
                        <div className="flex items-center gap-1">
                          <span>Next</span>
                          <FaChevronRight size={10} />
                        </div>
                      ),
                    }}
                    {...item}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const blogItems = [
  {
    id: 1,
    title: "Installing a dishwasher?",
    text: "Joe. Filker | September 29, 2023",
    img: "/blog/diswasher.jpg",
  },
  {
    id: 2,
    title: "Change mixer?",
    text: "Rose Dummy | September 29, 2023",
    img: "/blog/mixer.jpg",
  },
  {
    id: 3,
    title: "Water heater",
    text: "Joe. Filker | August 16, 2023",
    img: "/blog/heater.jpg",
  },
  {
    id: 4,
    title: "Leaking water pipe",
    text: "Joe. Filker | October 27, 2023",
    img: "/blog/pipe.jpg",
  },
  {
    id: 5,
    title: "Change the power outlet yourself?",
    text: "Rose Dummy | October 27, 2023",
    img: "/blog/power-outlet.jpg",
  },
  {
    id: 6,
    title: "Earth-fault circuit breaker trips",
    text: "Rose Dummy | October 27, 2023",
    img: "/blog/circuit.png",
  },
];
