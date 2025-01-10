import React from "react";
import Image from "next/image";
import header_image from "../../../../../Assets/ContentCreators/header_image.png";

import {InterFont} from "../../../../../Utilities/Font"
const Header = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 sm:px-6">
          <div className=" sm:p-1 py-4  text-black">
            <div className="flex flex-col py-10  justify-around items-start gap-3  h-full">
              <h4 className="text-3xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl  font-semibold   py-4 md:py-1">
                Create With Us
              </h4>
              <p className="text-lg">
                Calling all content creators, thought leaders, and influencers!
                Join forces with The Language Network to spread the joy of
                language learning far and wide. Together, let&apos;s create
                captivating content across YouTube, Instagram, LinkedIn,
                podcasts, blogs, and beyond. Join our vibrant community and
                ignite a passion for languages worldwide!
              </p>
              <button className="block w-full max-w-xs text-xl border bg-primary-color  hover:bg-transparent hover:border-primary-color hover:text-primary-color  focus:bg-indigo-700 text-white rounded-lg px-2 font-semibold py-3 my-3 sm:my-1 ">
                Get in touch
              </button>
            </div>
          </div>
          <div className="    text-white">
            <div className="flex items-center justify-center h-full">
              <Image src={header_image} className="w-full " alt="Form Image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
