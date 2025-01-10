"use client";
import React, { useRef, useState } from "react";
import Banner from './components/cbus_banner';
import Howitworks from '../Navigation/components/HowItWorks';
import Faqs from './components/cbus_faqs';
import Form from './components/cbus_form';
import BelowBanner from "../../../Components/Common/BelowBanner";
import PaymentBar from "../../../Components/HomeComp/PaymentBar";
import Cardcomponent from './components/cbus_card';
import Cardimg1 from '../../../../public/collboratewithUs/cards1.svg';
import Cardimg2 from '../../../../public/collboratewithUs/cards2.svg';
import Cardimg3 from '../../../../public/collboratewithUs/cards3.svg';
import Cardimg4 from '../../../../public/collboratewithUs/cards4.svg';
import Cardimg5 from '../../../../public/collboratewithUs/cards5.svg';
import Cardimg6 from '../../../../public/collboratewithUs/cards6.svg';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Collaboration = () => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return (
        <div>
            <Banner />
            <Howitworks />
            <p className='text-2xl md:text-5xl flex justify-center font-bold p-5 mb-7'>What we Offer?</p>
            
            {/* Swiper for mobile view */}
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
                    breakpoints={{
                        768: { slidesPerView: 1 },
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper mx-auto flex justify-center items-center"
                >
                    <SwiperSlide className="p-6">
                        <Cardcomponent 
                            bgColor="#D9F1EE" 
                            Cardimg={Cardimg1} 
                            Cardtitle="Workshops"
                            textColor="#000000"
                            CardContent="Immerse yourself in hands-on language learning experiences tailored to your interests and proficiency level, offering practical skills and cultural insights."
                        />
                    </SwiperSlide>
                    <SwiperSlide className="p-6">
                        <Cardcomponent 
                            bgColor="#B0DCD7" 
                            Cardimg={Cardimg2} 
                            Cardtitle="Seminars"
                            textColor="#000000"
                            CardContent="Participate in expert-led language sessions designed to provide valuable linguistic insights and foster personal growth, igniting inspiration along the way."
                        />
                    </SwiperSlide>
                    <SwiperSlide className="p-6">
                        <Cardcomponent 
                            bgColor="#48B0A3" 
                            Cardimg={Cardimg3} 
                            Cardtitle="Webinars"
                            textColor="#000000"
                            CardContent="Join interactive online language events that offer convenient learning opportunities accessible from anywhere, allowing you to expand your language skills and cultural knowledge."
                        />
                    </SwiperSlide>
                    <SwiperSlide className="p-6">
                        <Cardcomponent 
                            bgColor="#1F9F90" 
                            Cardimg={Cardimg4} 
                            Cardtitle="Summer Camps"
                            textColor="#ffffff"
                            CardContent="Embark on educational adventures at our seasonal language camps, where fun and language learning combine to create unforgettable experiences."
                        />
                    </SwiperSlide>
                    <SwiperSlide className="p-6">
                        <Cardcomponent 
                            bgColor="#008171" 
                            Cardimg={Cardimg5} 
                            Cardtitle="MasterClass"
                            textColor="#ffffff"
                            CardContent="Elevate your language skills with exclusive sessions led by language experts, unlocking your full linguistic potential and achieving mastery in your chosen language."
                        />
                    </SwiperSlide>
                    <SwiperSlide className="p-6">
                        <Cardcomponent 
                            bgColor="#006253" 
                            Cardimg={Cardimg6} 
                            Cardtitle="Sponsorship"
                            textColor="#ffffff"
                            CardContent="Collaborate with us to support impactful language learning initiatives, building meaningful connections and collectively shaping the future of multilingualism."
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
            
            <div className="hidden md:flex justify-center items-center">
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 mb-6'>
                    {/* Card components */}
                    <Cardcomponent 
                        bgColor="#D9F1EE" 
                        Cardimg={Cardimg1} 
                        Cardtitle="Workshops"
                        textColor="#000000"
                        CardContent="Immerse yourself in hands-on language learning experiences tailored to your interests and proficiency level, offering practical skills and cultural insights."
                    />
                    <Cardcomponent 
                        bgColor="#B0DCD7" 
                        Cardimg={Cardimg2} 
                        Cardtitle="Seminars"
                        textColor="#000000"
                        CardContent="Participate in expert-led language sessions designed to provide valuable linguistic insights and foster personal growth, igniting inspiration along the way."
                    />
                    <Cardcomponent 
                        bgColor="#48B0A3" 
                        Cardimg={Cardimg3} 
                        Cardtitle="Webinars"
                        textColor="#000000"
                        CardContent="Join interactive online language events that offer convenient learning opportunities accessible from anywhere, allowing you to expand your language skills and cultural knowledge."
                    />
                    <Cardcomponent 
                        bgColor="#1F9F90" 
                        Cardimg={Cardimg4} 
                        Cardtitle="Summer Camps"
                        textColor="#ffffff"
                        CardContent="Embark on educational adventures at our seasonal language camps, where fun and language learning combine to create unforgettable experiences."
                    />
                    <Cardcomponent 
                        bgColor="#008171" 
                        Cardimg={Cardimg5} 
                        Cardtitle="MasterClass"
                        textColor="#ffffff"
                        CardContent="Elevate your language skills with exclusive sessions led by language experts, unlocking your full linguistic potential and achieving mastery in your chosen language."
                    />
                    <Cardcomponent 
                        bgColor="#006253" 
                        Cardimg={Cardimg6} 
                        Cardtitle="Sponsorship"
                        textColor="#ffffff"
                        CardContent="Collaborate with us to support impactful language learning initiatives, building meaningful connections and collectively shaping the future of multilingualism."
                    />
                </div>
            </div>

            <Faqs />
            <Form />
            {/* Below Banner */}
            <BelowBanner title={"Make learning a breeze with us!"} />

            {/* Payment Bar */}
            <PaymentBar />

            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(100%);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
            `}</style>
        </div>
    );
}

export default Collaboration;
