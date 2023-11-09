"use client";
import React, { useState } from "react";
import TextTitle from "../Shared/TextTitle";
import UserCard from "./UserCard";

const text =
  "Have you considered installing solar cells? Or has the earth fault breaker suddenly tripped and now the food is in the freezer and going bad? No matter what your problem is, you can trust that our electricians are well qualified for the job and we are available around the clock for consultation. Or has the earth fault breaker suddenly tripped and now the food is in the freezer and going bad? No matter what your problem is,";
export default function Details() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const words = text.split(" ");
  const displayText = showMore ? text : words.slice(0, 52).join(" ");

  return (
    <div className="max-w-layout mx-auto my-10 px-2">
      <div className="flex flex-col md:flex-row gap-4 justify-between ">
        <div className="flex flex-col gap-11">
          <div className="max-w-[820px] flex flex-col gap-5 ">
            <TextTitle title="Description" />
            <div className="flex flex-col gap-5 text-[18px] text-black/70 ">
              <p>Need an electrician in Stockholm? We&apos;re here to help!</p>
              <p>
                We offer expert electrical installations and repairs for
                businesses and homes, and we&apos;re available 365 days a year.
                Contact us and we will help you immediately!
              </p>
            </div>
          </div>
          <div className="max-w-[680px] flex flex-col gap-5 ">
            <TextTitle title="Trustworthy Electrical Installers in Stockholm" />
            <div className="flex flex-col gap-5 text-[18px] text-black/70 ">
              <p>
                {displayText}
                {!showMore && (
                  <span
                    className="text-primary underline cursor-pointer"
                    onClick={toggleShowMore}
                  >
                    {" Read more"}
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
        {/* -------card */}
        <UserCard />
      </div>
    </div>
  );
}
