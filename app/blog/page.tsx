"use client";
import BlogCard from "@/components/Blog/BlogCard";
import Search from "@/components/Blog/Search";
import Topics from "@/components/Blog/Topics";
import ServicesBanner from "@/components/Services/ServicesBanner";
import UserCard from "@/components/Services/UserCard";
import { Pagination, PaginationItem } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function page() {
  return (
    <div>
      <ServicesBanner
        title="Blog/Newsletter"
        breadcrumb="Blog/Newsletter page"
        img="/blog/banner.png"
      />
      <div className="max-w-layout mx-auto mt-10">
        <div className="flex gap-10">
          <div className="w-[370px] flex flex-col gap-5">
            <Search />
            <Topics />
            <UserCard />
          </div>
          <div className="flex flex-col gap-[50px]">
            <div className="w-full flex flex-col gap-[10px]">
              {blogItems.map((item) => (
                <BlogCard key={item.id} item={item} />
              ))}
            </div>
            <div className="flex items-center justify-center w-full">
              <Pagination
                count={10}
                variant="outlined"
                shape="rounded"
                renderItem={(item) => (
                  <PaginationItem
                    slots={{
                      previous: () => (
                        <div>
                          <ArrowBackIcon />
                          Previous
                        </div>
                      ),
                      next: () => (
                        <div className="">
                          Next
                          <ArrowForwardIcon />
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
