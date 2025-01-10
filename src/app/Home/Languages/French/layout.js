"use client";

import Contact from "../../../../Shared/Contact";

const Homelayout = ({ children }) => {
  return (
    <>
      <section className="2xl:max-w-[1680px] lg:mx-10 mx-auto 2xl:mx-[100px]  relative 3xl:mx-auto  flex justify-center items-center flex-col ">
        <Contact />
      </section>
      {children}
    </>
  );
};

export default Homelayout;
