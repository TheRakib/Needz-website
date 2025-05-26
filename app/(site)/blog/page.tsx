"use client";
import { Blogs } from "@/Types";
import { getPosts } from "@/sanity/sanity-utils";
import { Pagination, PaginationItem } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { FaAngleLeft, FaChevronRight } from "react-icons/fa6";
import Image from "next/image";
import BlogPosts from "@/components/blog-posts";
import BlogCategories from "@/components/blog-categories";
import BlogNewsletter from "@/components/blog-newsletter";

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
    }
  }, [blogs]);
  useEffect(() => {
    const fetchAndSetPost = async () => {
      const post = await getPosts(search, topic, currentPage, itemsPerPage);
      setBlogs(post);
    };

    fetchAndSetPost();
  }, [search, topic, currentPage]);
  console.log(blogs);

  return (
    <div>
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gray-900">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Blog"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="container relative mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Needz Blogg
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Tips, guider och nyheter om hantverkstjänster för ditt hem och
              företag.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <BlogPosts blogs={blogs} />

              {/* ------pagination------- */}
              <div className="flex items-center justify-center w-full px-2 pt-8">
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
            <div className="space-y-8">
              <BlogCategories setTopic={setTopic} topic={topic} />
              <BlogNewsletter />
            </div>
          </div>
        </div>
      </main>
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
