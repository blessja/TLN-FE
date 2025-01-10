import React, { useState } from "react";
import step1 from "../../../../../Assets/ContentCreators/step1.png";
import step2 from "../../../../../Assets/ContentCreators/step2.png";
import step3 from "../../../../../Assets/ContentCreators/step3.png";
import Image from "next/image";

import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
const Section1 = () => {

  const [currentPage, setCurrentPage] = useState(0);
  const navigationPrevRef = React.useRef(currentPage);
  const navigationNextRef = React.useRef(currentPage);

  const data = [
    {
      heading: "STEP 1",
      content:
        "Connect with us by filling out our simple application form on the website.",
        img : step1


    },
    {
      heading: "STEP 2",
      content:
        "Our team will promptly reach out to you to discuss potential content ideas and partnership opportunities.",
        img : step2
    },
    {
      heading: "STEP 3",
      content:
        "Start creating and sharing engaging content to enhance language learning with us! ",
        img : step3
    },
  ];
  return (
    <>
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 text-center py-10">
        {`  How it works?  `}
      </p>
      <div className="sm:pb-20 pt-8 pb-8">
        <div className="container mx-auto sm:px-8 px-5 ">



          <div className="md:grid hidden grid-cols-3 gap-8 h-auto">
            {data.map((val, index) => {
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-fit w-full px-8">
                    <Image src={val.img} className="w-full" alt="Form Image" />
                  </div>
                  <div className="bg-white  min-h-60   rounded-lg border border-primary-color text-xl   mt-5   text-center">
                    <h5 className="bg-primary-color py-3 mb-5 text-white">
                      {val.heading}
                    </h5>
                    <p className="text-gray-600 px-4 lg:text-xl text-lg my-4 text-center h-fit sm:min-h-32">
                      {val.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>


          <div className="md:hidden">
          <Swiper
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation]}
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
            // slidesPerView={4}
            breakpoints={{
              1680: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 1,
              },
            }}
            // modules={[Pagination]}
            className="mySwiper mx-auto flex justify-center  items-center max-w-[356px] md:max-w-[395px]  lg:max-w-[850px] md:hidden xl:max-w-[1150px] w-full max-sm:max-h-full   2xl:w-full 3xl:max-w-[1440px]"

          >
            {data.map((val, index) => (
              <SwiperSlide key={index} className="">
                 <div key={index} className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-fit w-full px-3">
                    <Image src={val.img} className="w-full" alt="Form Image" />
                  </div>
                  <div className="bg-white  min-h-60   rounded-lg border border-primary-color text-xl   mt-5   text-center">
                    <h5 className="bg-primary-color py-3 mb-5 text-white">
                      {val.heading}
                    </h5>
                    <p className="text-gray-600 px-4 lg:text-xl text-lg my-4 text-center h-fit sm:min-h-32">
                      {val.content}
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

export default Section1;
