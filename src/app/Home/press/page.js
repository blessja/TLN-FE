"use client";
import React from 'react';
import Image from 'next/image';
import profilePic from '../../../Assets/Blogs/blogPlaceholder.png'; 
import bannerImg from '../../../Assets/press-center/press.jpg'
import BelowBanner from '../../../Components/Common/BelowBanner'
import PaymentBar from '../../../Components/HomeComp/PaymentBar';
import { useGetPressQuery} from "../../../store/apiSlice"


const PressCentre = () => {
   
      const { data:latestPressData } = useGetPressQuery({
        isFeatured: true,
        isLatest: true, 
    });
        
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-cover bg-center h-48 md:h-64" style={{ backgroundImage: `url('${bannerImg.src}')`, clipPath: 'polygon(0 100%, 64% 76%, 100% 99%, 100% 0, 0 0)' }}>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Press Centre</h1>
                    <p className="mt-1 max-w-xl text-xs md:text-sm lg:text-base">
                        Our mission is to help every person unlock their potential – anytime, anywhere.
                        We are revolutionising how languages are learnt by thousands of people worldwide,
                        providing a superior learning experience.
                    </p>
                </div>
            </div>

            {/* Latest Features Section */}
            <div className="px-4 py-8 sm:px-6 lg:px-12">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-teal-600"><span className="underline">Latest</span> features</h2>
                <div className="mt-6 space-y-6">
                    {latestPressData?.length>0 &&latestPressData?.map((article) => (
                        <div
                            key={article._id}
                            className="flex flex-col sm:flex-row items-center gap-4 py-4 px-4 border border-primary-color rounded-lg shadow-sm"
                        >
                            {/* Profile Image */}
                            <div className="p-2 bg-[#EBF7F6] rounded-full">
                                <Image
                                    src={article.image}
                                    alt={"Author image"}
                                    width={50}
                                    height={50}
                                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                                />
                            </div>
                            
                            {/* Author and Link */}
                            <div className="text-center sm:text-left">
                                <p className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg">{article.title}</p>
                                <a
                                    href={article.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-teal-600 text-xs sm:text-sm md:text-base flex justify-center sm:justify-start items-center gap-1"
                                >
                                    {article.link}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Help Section */}
            <div className="flex flex-col items-center bg-[#FAFAFA] py-8 px-4 mb-10 text-center space-y-2">
                <p className="font-bold text-2xl sm:text-3xl md:text-4xl">We&apos;re here to help</p>
                <p className="font-medium text-sm sm:text-base md:text-lg">Get in touch for any queries or specific needs</p>
                <button className="py-2 px-6 bg-primary-color text-white rounded-md text-sm sm:text-base">Contact Us</button>
            </div>

            {/* Below Banner */}
            <BelowBanner title={"Learning. Simplified."} />

            {/* Payment Bar */}
            <PaymentBar />
        </div>
    );
};

export default PressCentre;
