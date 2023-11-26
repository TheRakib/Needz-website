"use client";
import { Blogs } from "@/Types";
import BlogCard from "@/components/Blog/BlogCard";
import Featured from "@/components/Blog/Featured";
import Search from "@/components/Blog/Search";
import Topics from "@/components/Blog/Topics";
import ServicesBanner from "@/components/Services/ServicesBanner";
import UserCard from "@/components/Services/UserCard";
import LoadingSpinner from "@/components/Shared/LoadingSpinner";
import { getPosts } from "@/sanity/sanity-utils";
import { Pagination, PaginationItem } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { FaAngleLeft, FaChevronRight } from "react-icons/fa6";

export default function Page() {
  const [blogs, setBlogs] = useState<Blogs>();
  const [search, setSearch] = useState<string>();
  const [topic, setTopic] = useState<string>();

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handlePageChange = (event: ChangeEvent<unknown>, newPage: number) => {
    setCurrentPage(newPage);
    console.log(newPage);
  };

  useEffect(() => {
    if (blogs) {
      setTotalPages(Math.ceil(blogs.totalCount / itemsPerPage));
      // console.log(blogs.totalCount);
    }
  }, [blogs]);
  useEffect(() => {
    const fetchAndSetPost = async () => {
      const post = await getPosts(search, topic, currentPage, itemsPerPage);
      setBlogs(post);
    };

    fetchAndSetPost();
  }, [search, topic, currentPage]);

  // console.log("blogs", blogs);
  return (
    <div>
      <ServicesBanner
        title="Blogg"
        breadcrumb="Blogg sida"
        img="/blog/banner.png"
      />

      <div className="max-w-layout mx-auto mt-10">
        <div className="flex gap-4 xl:gap-10 flex-col lg:flex-row items-center lg:items-start">
          {/* -------left side----- */}
          <div className="w-[370px] flex flex-col gap-5 px-2">
            <Search setSearch={setSearch} />
            <Topics setTopic={setTopic} topic={topic} />
            <Featured />
            <UserCard />
          </div>
          {/* ---------right side------- */}
          <div className="flex flex-col gap-[50px] max-w-[370px] md:max-w-none">
            <div className="w-full flex flex-col gap-[10px] px-2">
              {blogs ? (
                blogs?.posts.map((item) => (
                  <BlogCard key={item._id} item={item} />
                ))
              ) : (
                <LoadingSpinner />
              )}
            </div>
            {/* ------pagination------- */}
            <div className="flex items-center justify-center w-full px-2">
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                variant="outlined"
                shape="rounded"
                renderItem={(item) => (
                  <PaginationItem
                    slots={{
                      previous: () => (
                        <div className="flex items-center gap-1">
                          <FaAngleLeft size={10} />
                          Föregående
                        </div>
                      ),
                      next: () => (
                        <div className="flex items-center gap-1">
                          <span>Nästa</span>
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
