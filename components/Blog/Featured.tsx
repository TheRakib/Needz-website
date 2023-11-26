"use client";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// ----swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./style.css";

export default function Featured() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: string) {
      return '<span class="' + className + '" >' + "</span>";
    },
  };

  return (
    <div className="w-full rounded-lg bg-primary/10 h-[362px] p-[30px] flex flex-col gap-6 relative">
      <h3 className="text-[24px] font-semibold ">Utvalda tjänster</h3>
      <div className="">
        <Swiper
          loop={true}
          pagination={pagination}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          className="contribute-slider max-w-[300px] md:max-w-layout mx-auto px-2"
        >
          {[1, 2, 3].map((i) => (
            <SwiperSlide key={i} className="rounded-xl">
              <div className="w-full">
                <div className=" max-w-[373px] h-[210px] flex flex-col gap-5 items-center border border-black/50 rounded-xl p-6 relative">
                  <Image alt="icon" src={"/blog/feature.png"} fill />
                  <div className="absolute bottom-0 left-0 w-full ">
                    <p className="pl-4 text-white font-semibold mb-4">
                      Electrical Installations
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute -bottom-3 left-0 right-0 flex justify-center gap-4 py-2">
          {/* <Pagination
            slides={7} // Number of slides
            activeIndex={0} // Active slide index (you can use state to keep track)
            clickable={true}
            bulletClassName="bullet" // Add your styling to the dots
          /> */}
        </div>
      </div>
    </div>
  );
}
