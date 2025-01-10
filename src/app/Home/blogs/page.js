'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import bannerImg from '../../../Assets/Blogs/banner.png';
import blogPlaceholderImg from '../../../Assets/Blogs/blogPlaceholder.png';
import { FaArrowRight } from 'react-icons/fa';
import { AiOutlineRight } from 'react-icons/ai';
import Image from 'next/image';
import BannerAd from '../../../Components/BlogComp/BannerAd'
import Breadcrumbs from '../../../Components/BlogComp/BreadCrumbs';
import { useGetBlogByIdQuery, useGetAllBlogsQuery } from "../../../store/apiSlice"
import formatDate from "../about-us/components/FormateDate";
import DOMPurify from 'dompurify';

const languages = ['French', 'German', 'Spanish', 'Mandarin', 'English', 'Korean', 'Japanese'];

const categories = [
    "Cultural Insights",
    "Festivals & Celebrations",
    "Language & Technology",
    "Music & Arts",
    "Travel & Exploration",
    "Current Events & Social Issues",
    "Motivation and Mindset",
];


const Blogs = () => {
    const [activeLanguage, setActiveLanguage] = useState('French');
    const [activeCategory, setActiveCategory] = useState('Travel & Exploration');

    const { data: blogsData } = useGetAllBlogsQuery({
        language: activeLanguage,
        categories: activeCategory
    });

    const FeaturedBlogsData =
        blogsData?.find((blog) => blog?.isFeatured === true) ||
        blogsData?.[0];

    const sanitizeAndTruncateContent = (content, maxLength) => {
        const sanitizedContent = DOMPurify.sanitize(content || "");
        const truncatedContent =
            sanitizedContent.length > maxLength
                ? sanitizedContent.slice(0, maxLength) + "..."
                : sanitizedContent;

        return (
            <div dangerouslySetInnerHTML={{ __html: truncatedContent }} />
        );
    };

    const maxContentLength = 200;

    return (
        <div className="bg-gray-100">
            {/* Hero Section */}
            <div className="relative bg-cover bg-center h-64 sm:h-80 md:h-96 flex items-center justify-start text-white"
                style={{ backgroundImage: `url('${blogsData?.image}')` }}>
                <div className="absolute inset-0 bg-[#373a4d7c]"></div>
                <div className='absolute left-5 w-[200px] h-[200px] md:w-[344px] md:h-[344px] rounded-full bg-[#ffffff41]'></div>
                <div className="relative p-4 sm:p-6 md:p-8 text-start w-full md:w-[894px] h-auto md:h-[418px] md:pl-[101px] md:py-[47px]">
                    <h2 className="text-base sm:text-lg font-semibold">Featured</h2>
                    {FeaturedBlogsData ? (
                        <p className="text-xs sm:text-sm pt-2 flex gap-4">
                            <span className="relative">
                                {`${FeaturedBlogsData.title} | By ${FeaturedBlogsData.author?.name} | ${formatDate(FeaturedBlogsData.publishedDate)}`}
                            </span>
                        </p>
                    ) : (
                        <p className="text-xs sm:text-sm pt-2">Loading...</p>
                    )}

                    <h1 className="text-3xl sm:text-4xl md:text-[40px]/[80px] font-bold">{FeaturedBlogsData?.title}</h1>
                    {FeaturedBlogsData?.content && (
                        <p className="mt-2 mb-4 text-sm sm:text-base md:text-[20px]/[28px] font-normal">
                            {sanitizeAndTruncateContent(FeaturedBlogsData.content, maxContentLength)}
                        </p>
                    )}

                    <Link href={`/blogs/${FeaturedBlogsData?.slug}`}>

                        <button className="bg-white text-primary-color px-4 sm:px-6 py-2 sm:py-3 rounded-[8px] w-full md:w-[313px] h-[53px] font-semibold flex gap-2 justify-center items-center">
                            Read more
                            <FaArrowRight />
                        </button>
                    </Link>
                </div>
            </div>

            {/* Language Tabs */}
            <div className="mt-6 flex justify-center space-x-4 overflow-x-auto  sm:space-x-4">
                <div className='bg-primary-color w-fit rounded-none md:rounded-[48px] flex gap-4 md:gap-0 overflow-x-auto py-4 px-6 sm:px-8' style={{ scrollbarWidth: "none" }}>
                    {languages.map((language, i) => (
                        <button
                            key={language}
                            onClick={() => setActiveLanguage(language)}
                            className={`px-2 sm:px-4 py-2 rounded-[16px] md:rounded-none bg-[#004D37] md:bg-transparent relative font-semibold text-white ${activeLanguage === language ? 'underline' : ''} ${i !== (languages.length - 1) && 'after:absolute after:right-[-8px] md:after:right-[-2px] after:w-[1px] after:h-[70%] after:bg-[#ffffff62]'}`}
                        >
                            {language}
                        </button>
                    ))}
                </div>
            </div>

            {/* Sidebar and Content */}
            <div className="flex flex-col lg:flex-row mt-8 px-4 sm:px-[45px]">
                {/* Sidebar */}
                <aside className="w-full lg:w-1/4 lg:pr-4 text-gray-700">
                    <ul className="space-y-2">
                        {categories.map((category, i) => (
                            <li
                                key={i}
                                onClick={() => setActiveCategory(category)}
                                className={`cursor-pointer ${activeCategory === category ? 'text-primary-color font-semibold' : ''}`}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Main Content */}
                <section className="w-full lg:w-3/4 flex flex-col gap-4">
                    {/* Breadcrumbs */}
                    <Breadcrumbs items={[activeLanguage, activeCategory]} />
                    {/* Articles Grid */}
                    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {blogsData?.length > 0 && blogsData.map((article) => (
                            <div key={article.id} className="bg-white shadow-md">
                                <Image src={article?.image} alt="Blog" className="w-full h-[400px] object-cover" width={1000} height={500} />
                                <div className="p-4">
                                    <div className="flex items-center mb-4">
                                        <img src={article?.author?.profileImage} alt="Author" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full mr-4" />
                                        <div>
                                            <h3 className="text-xs sm:text-sm font-semibold">{article?.author?.name}</h3>
                                            <p className="text-xs text-gray-500">{formatDate(article?.publishedDate)}</p>
                                        </div>
                                    </div>
                                    <h4 className="text-base sm:text-lg font-semibold mb-2">{article?.title}</h4>
                                    <p className="text-xs sm:text-sm text-gray-700 mb-4">{sanitizeAndTruncateContent(article?.content, maxContentLength)}</p>
                                    <Link href={`/blogs/${article?.slug}`}>
                                        <button className="text-green-500 font-semibold border-[1px] border-primary-color py-2 px-4 sm:py-[14px] sm:px-[16px] rounded-[8px] w-full sm:w-[168px] h-[53px] flex items-center gap-2 justify-center">
                                            Read more
                                            <FaArrowRight />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </section>
                </section>
            </div>
            <section className='w-full pt-4'>
                <BannerAd />
            </section>
        </div>
    );
};

export default Blogs;
