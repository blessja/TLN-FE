"use client";
import Image from "next/image";
import experts from "../../../../Assets/Homepage/whyShouldYouLearn/Expertrainers.webp";
import expertModal from "../../../../Assets/Homepage/whyShouldYouLearn/ExpertModal.webp";
import interactiveModal from "../../../../Assets/Homepage/whyShouldYouLearn/interactiveModal.webp";
import certificatedModal from "../../../../Assets/Homepage/whyShouldYouLearn/CertificatedModal.webp";
import ReviewModal from "../../../../Assets/about-us/small_batches_img.webp";
import freeCourseModal from "../../../../Assets/Homepage/whyShouldYouLearn/FreeStudyModal.webp";
import flexibleModal from "../../../../Assets/about-us/iso_certified_img.webp";
import DemoModal from "../../../../Assets/about-us/personalised_attention_img.webp";
import interactive from "../../../../Assets/Homepage/whyShouldYouLearn/Interactivesessions.webp";
import courses from "../../../../Assets/Homepage/whyShouldYouLearn/courses.webp";
import demo from "../../../../Assets/about-us/personalised_attention_3x.webp";
import material from "../../../../Assets/Homepage/whyShouldYouLearn/material.webp";
import sessions from "../../../../Assets/about-us/small_batches_3x.webp";
import flexible from "../../../../Assets/about-us/iso_certified_3x.webp";
import ReusableModal from "../../../../Shared/ReusableModal";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import RightArrowPrimary from "../../../../Assets/WhyShould/RightArrowPrimary.svg";
import RightArrowWhite from "../../../../Assets/WhyShould/RightArrowWhite.svg";

const defaultData = [
  {
    modal: false,
    modalClose: "expert",
    imgAvatar: expertModal,
    img: experts,
    modalTitle: "Expert Trainers",
    modalDesc: "Learn from internationally certified trainers with extensive expertise in language instruction.",
  },
  {
    modal: false,
    modalClose: "interactive",
    imgAvatar: interactiveModal,
    img: interactive,
    modalTitle: "Interactive Sessions",
    modalDesc: "Engage in dynamic and participatory classes, promoting experiential learning and cultural exposure to enhance language comprehension and retention.",
  },
  {
    modal: false,
    modalClose: "certificated",
    imgAvatar: certificatedModal,
    img: courses,
    modalTitle: "Certificated Courses",
    modalDesc: "Achieve recognition and validation through our language learning programs, which are both ISO-certified and accredited.",
  },
  {
    modal: false,
    modalClose: "freeCourse",
    imgAvatar: DemoModal,
    img: demo,
    modalTitle: "Personalised attention",
    modalDesc: "Receive individualised guidance and support tailored to your learning needs.",
  },
  {
    modal: false,
    modalClose: "freeStudy",
    imgAvatar: freeCourseModal,
    img: material,
    modalTitle: "Free Study Material",
    modalDesc: "Access a wealth of resources worth ₹10,000+ at no additional cost to support your language learning journey.",
  },
  {
    modal: false,
    modalClose: "review",
    imgAvatar: ReviewModal,
    img: sessions,
    modalTitle: "Small Batches",
    modalDesc: "Get personalized instruction and supportive learning with small class sizes.",
  },
  {
    modal: false,
    modalClose: "flexible",
    imgAvatar: flexibleModal,
    img: flexible,
    modalTitle: "ISO Certified",
    modalDesc: "Rest assured of quality and excellence with our ISO certification, ensuring adherence to international standards.",
  },
];

const WhyShould = ({ data = defaultData, title = "Why choose us?" }) => {
  const [isModalOpen, setIsModalOpen] = useState(
    data.reduce((acc, curr) => ({ ...acc, [curr.modalClose]: false }), {})
  );
  const [whyShouldHovered, setWhyShouldHovered] = useState(
    Array(data.length).fill(false)
  );

  const openModal = (card) =>
    setIsModalOpen({ ...isModalOpen, [card]: true });
  const closeModal = (card) =>
    setIsModalOpen({ ...isModalOpen, [card]: false });

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="lg:mx-[44px] 2xl:mx-[88px] 4xl:mx-[120px] bg-[#]">
      {data.map((modal) => (
        <ReusableModal
          key={modal.modalClose}
          isOpen={isModalOpen[modal.modalClose]}
          onClose={() => closeModal(modal.modalClose)}
        >
          <div className="flex justify-center items-center gap-4 lg:gap-8">
            <div className="lg:flex hidden w-auto h-full lg:w-[200px]">
              <Image
                layout="responsive"
                priority="true"
                src={modal.imgAvatar}
                className="h-full w-full rounded-lg"
                alt="em"
              />
            </div>
            <div className="flex flex-col gap-4 lg:gap-6 w-full">
              <div className="flex flex-col gap-3">
                <Image
                  src={modal.img}
                  alt={modal.modalTitle}
                  priority="true"
                  className="w-[78px] h-[78px] lg:w-[58.5px] lg:h-[58.5px]"
                />
                <span className="font-semibold text-[#004D37] text-lg lg:text-xl">
                  {modal.modalTitle}
                </span>
              </div>
              <p className="text-sm lg:text-base">{modal.modalDesc}</p>
            </div>
          </div>
        </ReusableModal>
      ))}
      <div className="mt-[50px] md:mt-[98px] w-full max-w-[1267px] mx-auto mb-[100px]">
        <h1 className="self-stretch font-bold text-[24px]/[29px] lg:text-[40px]/[48.01px] md:text-3xl xl:text-[50px]/[40px] 2xl:text-[60px]/[72px] text-center my-[48px] text-stone-900 max-lg:px-4">
          {title}
        </h1>
        <div className="flex flex-col gap-y-8 items-center justify-center">
            <div className="lg:col-span-4 md:grid hidden grid-cols-4 mx-auto gap-y-6 gap-x-[32px] justify-items-center align-items-center">
            {data.slice(0, 4).map((item, index) => (
                <div
                key={index}
                style={{ boxShadow: "0px 4px 50px 0px rgba(0, 0, 0, 0.06)" }}
                className="lg:w-[219px] lg:h-[195px] xl:w-[292px] xl:h-[260px] p-5 bg-white rounded-2xl shadow flex-col justify-center items-center gap-2.5"
                >
                <div className="xl:h-[220px] lg:h-[165px] flex-col justify-center items-center gap-8 flex">
                    <div className="self-stretch lg:h-[99px] xl:h-[132px] flex-col justify-center items-center gap-2 flex">
                    <div className="xl:w-[100px] xl:h-[100px] pl-[10.94px] pr-[11.06px] pt-[10.94px] lg:scale-75 xl:scale-100 pb-[11.06px] justify-center items-center inline-flex">
                        <div className="w-[78px] h-[78px] relative flex-col justify-center items-center flex">
                        <Image
                            alt="experts"
                            src={item.img}
                            width={20}
                            height={20}
                            layout="responsive"
                            priority="true"
                            className="xl:w-[78px] xl:h-[78px] lg:w-[58.5px] lg:h-[58.5px]"
                        />
                        </div>
                    </div>
                    <div className="text-center lg:-mt-5 xl:-mt-0 text-emerald-900 text-[18px] xl:text-xl font-bold ">
                        {item.modalTitle}
                    </div>
                    </div>
                    <div className="self-stretch h-[56px] lg:h-12 xl:h-14 -mt-3.5 flex-col justify-center items-center gap-2.5 flex">
                    <button
                        onClick={() => openModal(item.modalClose)}
                        onMouseEnter={() => {
                        const newHoveredStates = [...whyShouldHovered];
                        newHoveredStates[index] = true;
                        setWhyShouldHovered(newHoveredStates);
                        }}
                        onMouseLeave={() => {
                        const newHoveredStates = [...whyShouldHovered];
                        newHoveredStates[index] = false;
                        setWhyShouldHovered(newHoveredStates);
                        }}
                        className="text-primary-color hover:bg-[#1f9f90] hover:text-white xl:h-14 lg:h-12 px-8 xl:py-3.5 rounded-lg border border-primary-color justify-center items-center gap-2.5 inline-flex h-full"
                    >
                        <div className="text-center text-xl font-normal leading-7 text-nowrap">
                        Learn more
                        </div>
                        <Image
                        src={whyShouldHovered[index] ? RightArrowWhite : RightArrowPrimary}
                        alt="Arrow Icon"
                        className="object-contain"
                        />
                    </button>
                    </div>
                </div>
                </div>
            ))}
            </div>
            <div className="lg:col-span-4 md:grid grid-cols-3 mx-auto gap-y-6 gap-x-[32px] justify-items-center align-items-center hidden">
            {data.slice(4, 7).map((item, index) => (
                <div
                key={index}
                style={{ boxShadow: "0px 4px 50px 0px rgba(0, 0, 0, 0.06)" }}
                className="lg:w-[219px] lg:h-[195px] xl:w-[292px] xl:h-[260px] p-5 bg-white rounded-2xl shadow flex-col justify-center items-center gap-2.5"
                >
                <div className="xl:h-[220px] lg:h-[165px] flex-col justify-center items-center gap-8 flex">
                    <div className="self-stretch lg:h-[99px] xl:h-[132px] flex-col justify-center items-center gap-2 flex">
                    <div className="xl:w-[100px] xl:h-[100px] pl-[10.94px] pr-[11.06px] pt-[10.94px] lg:scale-75 xl:scale-100 pb-[11.06px] justify-center items-center inline-flex">
                        <div className="w-[78px] h-[78px] relative flex-col justify-center items-center flex">
                        <Image
                            alt="experts"
                            src={item.img}
                            width={20}
                            height={20}
                            layout="responsive"
                            priority="true"
                            className="xl:w-[78px] xl:h-[78px] lg:w-[58.5px] lg:h-[58.5px]"
                        />
                        </div>
                    </div>
                    <div className="text-center lg:-mt-5 xl:-mt-0 text-emerald-900 text-[18px] xl:text-xl font-bold ">
                        {item.modalTitle}
                    </div>
                    </div>
                    <div className="self-stretch h-[56px] lg:h-12 xl:h-14 -mt-3.5 flex-col justify-center items-center gap-2.5 flex">
                    <button
                        onClick={() => openModal(item.modalClose)}
                        onMouseEnter={() => {
                        const newHoveredStates = [...whyShouldHovered];
                        newHoveredStates[index] = true;
                        setWhyShouldHovered(newHoveredStates);
                        }}
                        onMouseLeave={() => {
                        const newHoveredStates = [...whyShouldHovered];
                        newHoveredStates[index] = false;
                        setWhyShouldHovered(newHoveredStates);
                        }}
                        className="text-primary-color hover:bg-[#1f9f90] hover:text-white xl:h-14 lg:h-12 px-8 xl:py-3.5 rounded-lg border border-primary-color justify-center items-center gap-2.5 inline-flex h-full"
                    >
                        <div className="text-center text-xl font-normal leading-7 text-nowrap">
                        Learn more
                        </div>
                        <Image
                        src={whyShouldHovered[index] ? RightArrowWhite : RightArrowPrimary}
                        alt="Arrow Icon"
                        className="object-contain"
                        />
                    </button>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        <div className="flex lg:hidden px-4">
          <Swiper
            slidesPerView={1.5}
            spaceBetween={20}
            centeredSlides={true}
            grabCursor={true}
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{ delay: 2500 }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="w-full max-w-[500px] bg-white p-6 rounded-lg shadow-md mx-auto"
                  style={{ boxShadow: "0px 4px 50px 0px rgba(0, 0, 0, 0.06)" }}
                >
                  <div className="flex flex-col items-center">
                    <Image
                      alt={item.modalTitle}
                      src={item.img}
                      width={78}
                      height={78}
                      className="w-[78px] h-[78px]"
                    />
                    <h3 className="text-emerald-900 text-xl font-bold mt-4">
                      {item.modalTitle}
                    </h3>
                    <button
                      onClick={() => openModal(item.modalClose)}
                      className="text-primary-color hover:bg-[#1f9f90] hover:text-white mt-4 px-8 py-3 rounded-lg border border-primary-color"
                    >
                      Learn more
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div
              ref={navigationPrevRef}
              className="swiper-button-prev absolute top-1/2 left-4 transform -translate-y-1/2 z-10"
            />
            <div
              ref={navigationNextRef}
              className="swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2 z-10"
            />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default WhyShould;
