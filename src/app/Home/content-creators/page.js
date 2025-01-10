'use client'
import Heading from '../../../Components/Common/Heading';
import SliderComp from '../../../Components/Common/SliderComp';
import PaymentBar from '../../../Components/HomeComp/PaymentBar';
import Banner from '../../../Shared/Banner'
import FaqComp from '../../../Shared/FaqComp';
import "swiper/css";
import "swiper/css/pagination";
import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import DynamicForm from '../../../Components/Common/DynamicForm';
import StyledSlider from '../../../Components/Common/StyledSlider'
import BannerImg from '../../../Assets/ContentCreators/header_image.png'
import FormImg from '../../../Assets/ContentCreators/form.png'
import { useGetBannerQuery,useGetAllCommunityQuery,useGetFilteredFAQsQuery} from "../../../store/apiSlice"

const FormComponent = () => {
  return (
    <div className="flex justify-center items-center">
      <form className="bg-white p-6 rounded-lg shadow-md w-full  space-y-4">
        {/* Full Name and Contact No. */}
        <div className="flex gap-4 flex-col md:flex-row">
          <input
            type="text"
            placeholder="Your Full Name"
            className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="text"
            placeholder="Contact No."
            className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Email Address */}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />

        {/* Instagram Username */}
        <input
          type="text"
          placeholder="Instagram Username"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};



const SlideComponent = ({slide})=>{
  const [isPlaying, setIsPlaying] = useState(false);
  

  const handlePlayClick = () => {
      setIsPlaying(true);
  };
    return   (
      <div className="relative">
          {!isPlaying ? (
              <>
                
                  <img src={slide.thumbnail} alt={"video tumbnail"} className="w-full h-92 object-cover relative z-0" />
                 
                  <div className="absolute inset-0 bg-[#00000033] z-10"></div>
                
                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center z-20">
                      <button onClick={handlePlayClick} className="bg-white rounded-full p-2">
                          <FaPlay className="text-black" />
                      </button>
                  </div>
              </>
          ) : (
              
              <video className="w-full h-92 object-cover" controls autoPlay>
                  <source src={slide.video} type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
          )}
          </div>
    );
};


const BelowBanner = ({ title }) => {
    return (
      <div className="text-[20px] md:text-[40px] bg-primary-color text-white px-[100px] py-[50px] md:px-[250px] md:py-[130px] font-extrabold text-center overflow-hidden">
        <span className="hover-animation">{title}</span>
        <style jsx>{`
          .hover-animation {
            display: inline-block;
            font-size: 40px; 
            opacity: 1; 
            transform: translateY(0);
            transition: opacity 0.5s ease; 
          }
  
          .hover-animation:hover {
            animation: hoverEffectIn 0.2s ease forwards; 
          }
  
          .hover-animation {
            animation: hoverEffectOut 0.8s ease forwards;
          }
  
        
          @keyframes hoverEffectIn {
            0% {
              transform: translateY(0);
              font-size: 40px;         
              opacity: 1;          
            }
            100% {
              font-size: 60px;         
              transform: translateY(-5px); 
              opacity: 0.9;            
            }
          }
  
        
          @keyframes hoverEffectOut {
            0% {
              font-size: 60px; 
              transform: translateY(-5px); 
              opacity: 0.9; 
            }
              50% {
              font-size: 45px;
              transform: translateY(-5px);
              opacity: 0.2; 
            }
            100% {
              font-size: 40px;
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}</style>
      </div>
    );
  };
  
const ContentCreatorPage = ()=>{
    const [currentPage, setCurrentPage] = useState(0);

    const {data:communityData}=useGetAllCommunityQuery();
    
   
    const { data } = useGetBannerQuery({
        context: "ContentCreator",
        language: "Others", 
      });
      const { data: faqData } = useGetFilteredFAQsQuery({
        language: "Others",
        context: "ContentCreator",
        category: "General",
      });
    
    const navigationPrevRef = React.useRef(currentPage);
     const navigationNextRef = React.useRef(currentPage);
    const howItWorksData = {
        Title:"How It Works?",
        CardData:[
            {
                img:"",
                title:"STEP 1",
                description:"Connect with us by filling out our simple application form on the website. "
            },
            {
                img:"",
                title:"STEP 2",
                description:"Our team will promptly reach out to you to discuss potential content ideas and partnership opportunities. "
            },
            {
                img:"",
                title:"STEP 3",
                description:"Start creating and sharing engaging content to enhance language learning with us! "
            },
        ]
    }
    
    const inputFields = [
        { id: 1, type: 'text', placeholder: 'Your Full Name' },
        { id: 2, type: 'text', placeholder: 'Contact No.' },
        { id: 3, type: 'email', placeholder: 'Email Address' },
        { id: 4, type: 'text', placeholder: 'Instagram Username' },
      ];
    

    return (
        <div>
            {/* hero section */}
            {
               data && data.length > 0 &&    <Banner title={data[0]?.bannerTitle|| "title"} 
               description={data[0]?.bannerDescription}   buttonText={data[0]?.buttonText} imageSrc={data[0]?.bannerImage}/>
            }
         
            {/* community section */}
            <div className='mb-[112px]'>
                <Heading title={"Our community"}/>
                <StyledSlider slidesData={communityData}>
                    <SlideComponent/>
                </StyledSlider>
            </div>
            {/* how it works section */}
            <SliderComp data={howItWorksData}/>
            {/* faq section */}
            <FaqComp FaqsData={faqData}/>
            {/* start your journey form */}
            <div>
                <Heading title={"Start Your Journey "}/>
                <DynamicForm showAttachCV={false} showTextarea={false} imageSrc={FormImg} showSubmitBtn={false}>
                    <FormComponent/>
                </DynamicForm>
            </div>
            {/* below banner */}
            <BelowBanner title={"Spread the joy of learning with us!"}/>
            {/* payment bar */}
            <PaymentBar/>
        </div>
    )
}

export default ContentCreatorPage;