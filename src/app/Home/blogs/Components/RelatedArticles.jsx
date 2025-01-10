import React from 'react';
import { FaChevronRight, FaEllipsisV } from 'react-icons/fa';
import Link from 'next/link';
import DOMPurify from "dompurify";



const RelatedArticles = ({ articles=[] }) => {

  const sanitizeAndRender = (content) => {
    const cleanContent = DOMPurify.sanitize(content);
    return <div dangerouslySetInnerHTML={{ __html: cleanContent }} />;
  };
    return (
        <div className="pt-6">
            <h2 className="text-xl font-semibold text-primary-color mb-6">Related Articles</h2>
            
            <div className="space-y-6">
                {articles?.map((article, index) => (
                    <div key={index} className="flex items-start bg-white shadow-md rounded-lg p-4">
                        {/* Image Section */}
                        <div className="flex-shrink-0 w-32 h-32">
                            <img
                                src={article?.image}
                                alt={article?.title}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="flex-grow ml-4">
                            <h3 className="text-lg font-semibold text-gray-900">{article.title}</h3>
                            
                            {/* Author Info */}
                            <div className="flex items-center text-gray-500 text-sm mt-2">
                                <img
                                    src={article?.author?.profileImage}
                                    alt={article?.author?.name}
                                    className="w-6 h-6 rounded-full mr-2"
                                />
                                <span>{article?.authorName}</span>
                            </div>

                            {/* Article Description */}
                            <p className="text-gray-600 text-sm mt-2">
                            {sanitizeAndRender(article?.content)}
                            </p>

                            {/* Read More Button */}
                           
                            <Link href={`/blogs/${article?.slug}`}>
                            <button className="mt-4 flex items-center text-teal-600 font-medium">
                                Read more <FaChevronRight className="ml-2" />
                            </button>
                            </Link>
                        </div>

                        {/* More Options Icon */}
                        <div className="flex-shrink-0 ml-auto">
                            <FaEllipsisV className="text-gray-500 cursor-pointer" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RelatedArticles;
