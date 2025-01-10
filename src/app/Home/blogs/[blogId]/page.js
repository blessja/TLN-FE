"use client"

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import DOMPurify from 'dompurify';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaShareAlt } from 'react-icons/fa';
import Image from 'next/image';
import RelatedArticles from '../Components/RelatedArticles';
import BreadCrumbs from '../../../../Components/BlogComp/BreadCrumbs';
import { useGetBlogByIdQuery, useGetAllBlogsQuery } from '../../../../store/apiSlice';
import formatDate from "../../about-us/components/FormateDate";

const BlogPage = () => {
  const { blogId } = useParams();
  const [sanitizedContent, setSanitizedContent] = useState('');


  const { data: blogsByIdData, isLoading: blogLoading } = useGetBlogByIdQuery(blogId);
  const { data: blogsData, isLoading: blogsLoading } = useGetAllBlogsQuery({
    language: blogsByIdData?.language,
    categories: blogsByIdData?.categories,
  });

  const sanitizeAndRender = (content) => {
    const cleanContent = DOMPurify.sanitize(content);
    return <div dangerouslySetInnerHTML={{ __html: cleanContent }} />;
  };

  // Conditional render to avoid hydration errors
  if (blogLoading || blogsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <head>
        {/* Title Tag */}
        <title>{blogsByIdData?.meta.title}</title>

        {/* Meta Description */}
        <meta name="description" content={blogsByIdData?.meta?.description} />

        {/* Meta Keywords */}
        <meta name="keywords" content={blogsByIdData?.meta?.keywords.join(", ")} />

        {/* Open Graph Tags */}
        <meta property="og:type" content={blogsByIdData?.meta.og.type} />
        <meta property="og:title" content={blogsByIdData?.meta.title} />
        <meta property="og:description" content={blogsByIdData?.meta.description} />
      </head>
      <div className="p-4 sm:p-6 lg:px-24 lg:py-12">
        {/* Breadcrumbs */}
        <BreadCrumbs items={["French", "Travel and Exploration"]} />

        {/* Title and Author Section */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
          {blogsByIdData?.title}
        </h1>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="flex items-center text-gray-600 text-xs sm:text-sm gap-2 mb-4">
            <Image
              src={blogsByIdData?.author?.profileImage}
              alt={"blog specific"}
              className="w-8 h-8 rounded-full mr-2"
              width={32}
              height={32}
            />
            <span>{blogsByIdData?.author?.name}</span>
            <span>|</span>
            <span>{formatDate(blogsByIdData?.publishedDate)}</span>
          </div>

          {/* Social Share Icons */}
          <div className="flex gap-4 mb-6 text-primary-color">
            <FaShareAlt size={20} className="hover:text-blue-600 cursor-pointer" />
            <FaFacebook size={20} className="hover:text-blue-600 cursor-pointer" />
            <FaTwitter size={20} className="hover:text-blue-400 cursor-pointer" />
            <FaInstagram size={20} className="hover:text-pink-500 cursor-pointer" />
            <FaLinkedin size={20} className="hover:text-blue-700 cursor-pointer" />
          </div>
        </div>

        {/* Blog Image */}
        <div className="mb-6">
          <Image
            src={blogsByIdData?.image}
            alt="Blog Image"
            width={600}
            height={100}
            className="rounded-md w-full object-cover"
          />
        </div>

        {/* Blog Content */}
        <div
          className="prose prose-sm sm:prose lg:prose-lg max-w-full">
          {sanitizeAndRender(blogsByIdData?.content)}
        </div>
        {/* Related Articles Section */}
        <RelatedArticles articles={blogsData} />
      </div>
    </>
  );
};

export default BlogPage;
