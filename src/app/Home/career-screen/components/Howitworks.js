"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import howItWorksData from "./Howitworksdata"; 

const HowItworks = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
  
    return (
      <>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 text-center py-10">
          How it works?
        </p>
        <div className="sm:pb-20 pt-8 pb-8">
          <div className="container mx-auto sm:px-8 px-5 ">
            
            <div className="md:grid hidden grid-cols-4 gap-8 h-auto">
              {howItWorksData.map((val, index) => (
                <div key={index} className="flex flex-col items-center ">
                  <div className="flex items-center justify-center px-8 ">
                    <Image src={val.icon} width={359} height={140} className="" alt="Form Image" />
                  </div>
                  <div className="bg-white h-[400px] rounded-lg border border-primary-color text-xl mt-5 text-center w-[300px]">
                    <h5 className="bg-primary-color py-3 mb-5 text-white rounded-t-lg">
                      {val.heading}
                    </h5>
                    <p className="text-gray-600 px-4 lg:text-xl text-lg my-4 text-center h-fit sm:min-h-32 flex flex-col justify-center items-center">
                      <strong>{val.contentHeading}</strong>{val.contentText}
                    </p>
                  </div>
                </div>
              ))}
            </div>
  
            <div className="md:hidden">
              <Swiper
                spaceBetween={20}
                pagination={{ clickable: true }}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                onSlideChange={(swiper) => {
                  setCurrentPage(swiper.activeIndex);
                }}
                breakpoints={{
                  1680: { slidesPerView: 4 },
                  1280: { slidesPerView: 3 },
                  1024: { slidesPerView: 2 },
                  768: { slidesPerView: 1 },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper mx-auto flex justify-center items-center max-w-[356px] md:max-w-[395px] lg:max-w-[850px] md:hidden xl:max-w-[1150px] w-full max-sm:max-h-full 2xl:w-full 3xl:max-w-[1440px]"
              >
                {howItWorksData.map((val, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center h-fit w-full px-3">
                        <Image src={val.icon} width={359} height={140} className="w-full" alt="Form Image" />
                      </div>
                      <div className="bg-white min-h-60 rounded-lg border border-primary-color text-xl mt-5 text-center">
                        <h5 className="bg-primary-color py-3 mb-5 text-white">
                          {val.heading}
                        </h5>
                        <p className="text-gray-600 px-4 lg:text-xl text-lg my-4 text-center h-fit sm:min-h-32">
                          <strong>{val.contentHeading}</strong>{val.contentText}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default HowItworks;