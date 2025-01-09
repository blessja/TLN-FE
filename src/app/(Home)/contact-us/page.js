"use client";
import React from "react";
import { FiPhone, FiMail, FiClock } from "react-icons/fi";
import { FaCalendarAlt, FaBusinessTime } from "react-icons/fa";
import BelowBanner from "../../../Components/Common/BelowBanner";
import PaymentBar from "../../../Components/HomeComp/PaymentBar";
import bannerImg from "../../../Assets/contact-us/banner.png";

const ContactSection = () => {
  const contactDetails = [
    {
      icon: <FiPhone className="text-teal-500 w-6 h-6" />,
      title: "Contact No",
      subTitle: "8389123184",
    },
    {
      icon: <FiMail className="text-teal-500 w-6 h-6" />,
      title: "Mail",
      subTitle: "info@thelanguagenetwork.com",
    },
    {
      icon: <FiClock className="text-teal-500 w-6 h-6" />,
      title: "Business Hours",
      subTitle: "10:00 am to 7:00 pm",
    },
    {
      icon: <FaCalendarAlt className="text-teal-500 w-6 h-6" />,
      title: "Support Days",
      subTitle: "Monday to Saturday",
    },
    {
      icon: <FaBusinessTime className="text-teal-500 w-6 h-6" />,
      title: "Opening Hours",
      subTitle: "10:00 am to 7:00 pm",
    },
  ];

  const inputFields = [
    { type: "text", placeholder: "Full Name" },
    { type: "email", placeholder: "Email ID" },
    { type: "text", placeholder: "Mobile Number" },
    { type: "text", placeholder: "Preferred Language To Learn With Us" },
    { type: "textarea", placeholder: "Message", rows: 3 },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {/* top section */}
      <div className="bg-gray-100 py-10 relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `url('${bannerImg.src}')`,
            clipPath: "polygon(0 0, 100% 0%, 100% 57%, 0 58%)",
          }}
        ></div>
        <div
          className="absolute inset-0 bg-[#0000008f] z-10"
          style={{ clipPath: "polygon(0 0, 100% 0%, 100% 57%, 0 58%)" }}
        ></div>
        <div className="relative max-w-6xl mx-auto px-6 z-20">
          <h1 className="text-[32px] md:text-[60px] font-bold text-center mb-8 text-white">
            Get In Touch!
          </h1>

          <div className="flex gap-2 flex-col md:flex-row overflow-hidden p-2">
            {/* Left Section: Contact Details */}
            <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-[32px] font-semibold mb-6">
                Connect with us
              </h2>
              <div className="space-y-4">
                {contactDetails.map((item, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    {" "}
                    {/* Added key here */}
                    <div className="p-2 rounded-full border-[1px] border-teal-500">
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-700">{item.title}</span>
                      <span className="text-gray-700 font-bold">
                        {item.subTitle}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section: Form */}
            <div className="flex-1 bg-gray-50 p-8 rounded-lg shadow-md">
              <form className="space-y-4" onSubmit={onSubmit}>
                {inputFields.map((field, index) => {
                  if (field.type === "textarea") {
                    return (
                      <textarea
                        key={index}
                        placeholder={field.placeholder}
                        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-teal-500"
                        rows={field.rows || 3}
                      ></textarea>
                    );
                  }
                  return (
                    <input
                      key={index}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-teal-500"
                    />
                  );
                })}
                <button
                  type="submit"
                  className="w-fit border-2 border-teal-500 text-teal-500 rounded-md py-[14px] px-[32px] font-semibold hover:bg-teal-600 hover:text-white focus:outline-none"
                >
                  Send enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* below banner */}
      <BelowBanner title={"Learning starts with us!"} />
      {/* payment bar */}
      <PaymentBar />
    </div>
  );
};

export default ContactSection;
