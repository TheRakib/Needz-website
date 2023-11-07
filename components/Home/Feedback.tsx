"use client";
import React, { useRef, useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import { Avatar, Rating } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore from "swiper";

export default function Feedback() {
  const swiperRef = useRef(null);
  const [prevArrowStyle, setPrevArrowStyle] = useState({
    backgroundColor: "transparent",
    color: "#0047a8",
  });
  const [nextArrowStyle, setNextArrowStyle] = useState({
    backgroundColor: "#0047a8",
    color: "#fff",
  });

  //---- Function to navigate to the previous slide
  const goToPrevSlide = () => {
    if (swiperRef.current) {
      // @ts-ignore
      swiperRef.current.slidePrev();
    }
    setPrevArrowStyle({
      backgroundColor: "transparent",
      color: "#0047a8",
    });

    setTimeout(() => {
      setPrevArrowStyle({ backgroundColor: "transparent", color: "#0047a8" });
    }, 500);
  };

  const goToNextSlide = () => {
    if (swiperRef.current) {
      // @ts-ignore
      swiperRef.current.slideNext();
    }
    setNextArrowStyle({ backgroundColor: "transparent", color: "#0047a8" });

    setTimeout(() => {
      setNextArrowStyle({ backgroundColor: "#0047a8", color: "#fff" });
    }, 500);
  };

  SwiperCore.use([Navigation]);

  return (
    <div className="max-w-layout relative mx-auto mt-[120px] mb-48 px-1">
      <div className="w-full flex justify-center">
        <SectionTitle
          title="What our customers say about us"
          className="text-center max-w-[688px]"
        />
      </div>
      <Swiper
        // @ts-ignore
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        // @ts-ignore
        cssMode={true}
        navigation={false}
        loop={true}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            width: 300,
          },
          // For screens larger than 640px but smaller than 1024px (tablet)
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation]}
        className="contribute-slider max-w-[300px] md:max-w-layout mx-auto px-2"
      >
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <SwiperSlide key={i} className="rounded-xl">
            <div className="w-full mt-[70px]">
              <div className=" max-w-[373px] h-[409px] flex flex-col gap-5 items-center border border-black/50 rounded-xl p-6">
                <Rating name="read-only" value={5} readOnly />
                <p className="text-black/70 text-center leading-relaxed tracking-wide">
                  Excellent value for money holiday. My questions were all
                  answered promptly and when my consultant was unavailable,
                  another staff member would respond.
                </p>
                <Avatar
                  className="h-[60px] w-[60px] "
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                />
                <h3 className="text-[22px] font-semibold ">Samantha Bell</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute -bottom-32 left-0 right-0 flex justify-center gap-4 py-2">
        <div
          className="border border-primary p-4 rounded-xl cursor-pointer"
          onClick={goToPrevSlide}
          style={prevArrowStyle}
        >
          <AiOutlineLeft className="text-xl" />
        </div>
        <div
          className="border border-primary p-4 rounded-xl cursor-pointer"
          onClick={goToNextSlide}
          style={nextArrowStyle}
        >
          <AiOutlineRight className="text-xl" />
        </div>
      </div>
    </div>
  );
}
