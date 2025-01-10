'use client'
import BelowBanner from "../../../Components/Common/BelowBanner";
import ProficiencyExams from "../../../Components/HomeComp/ProficiencyExams";
import States from "../../../Shared/SharedAdultsPage/Components/States";
import SliderComp from '../../../Components/Common/SliderComp'
import FaqComp from '../../../Shared/FaqComp'
import PaymentBar from "../../../Components/HomeComp/PaymentBar";
import Banner from "../../../Shared/Banner";
import DynamicForm from '../../../Components/Common/DynamicForm';
import Image from "next/image";
import { useGetAllOpenPositionQuery, useGetSpecificPositionQuery,useGetBannerQuery } from "../../../store/apiSlice";


const WhyShouldSliderCard = ({data}) => {
    console.log("Data is this.-----------------------." , data)
    return (
        <div className="w-full border shadow-md transition duration-300 hover:shadow-xl shadow-neutral-color/15 rounded-xl max-h-[460px] min-h-[442px] flex-col justify-start items-center gap-8  inline-flex max-md:p-3 p-6 ">
            <div className="self-stretch h-[212px]  rounded-xl flex-col justify-start  items-center gap-2.5 flex">
                <Image
                    alt="levelImages"
                    className="w-20 h-40 rounded-xl object-cover"
                    src={data?.img || ""}
                ></Image>
            </div>

            <div className="w-full  h-full   lg:min-h-[149px] flex-col justify-start items-center gap-2 flex">
                <div className="self-stretch text-center text-neutral-800 max-lg:text-lg text-xl 2xl:text-2xl font-medium ">
                    {data?.title}
                </div>
                <div className="self-stretch max-h-[170px] h-full max-lg:max-h-[240px] min-h-[130px]  flex-col mb-3 justify-start items-center gap-2 flex">
                    <div className="self-stretch text-center text-neutral-500 lg:text-lg 2xl:text-xl  font-normal leading-7">
                        {data?.description}
                    </div>
                </div>
            </div>
        </div>
    )
}

const TeachWithUs = ()=>{
    const whyShouldData = {
        Title:"Why You Should Teach With Us",
        Description:"lsjfsld",
        autoplay:true,
        CardData:[
            {
                img:"",
                title:"Professional Development Opportunities",
                description:"Engage in continuous learning and growth through workshops, seminars, and training sessions designed to enhance your teaching skills and expand your expertise in language education."
            },
            {
                img:"",
                title:"Flexibility",
                description:"Enjoy the freedom to set your own schedule and teaching hours for a better work-life balance. Teach online from anywhere, providing flexibility and convenience in your teaching journey."
            },
            {
                img:"",
                title:"Competitive Compensation",
                description:" Receive competitive compensation packages and benefits that recognize your contributions and ensure your efforts are valued and rewarded appropriately."
            },
            {
                img:"",
                title:"Professional Development Opportunities",
                description:"Engage in continuous learning and growth through workshops, seminars, and training sessions designed to enhance your teaching skills and expand your expertise in language education."
            },
            {
                img:"",
                title:"Professional Development Opportunities",
                description:"Engage in continuous learning and growth through workshops, seminars, and training sessions designed to enhance your teaching skills and expand your expertise in language education."
            },
        ]
    }
    const applySectionData = {
        Title:"Apply if you have these skills",
        CardData:[
            {
                img:"",
                title:"Qualifications",
                description:"Join our team if you are certified at advanced levels"
            },
            {
                img:"",
                title:"Presentation Skills",
                description:"Join our team if you are certified at advanced levels"
            },
            {
                img:"",
                title:"Teaching Skills",
                description:"Join our team if you are certified at advanced levels"
            },
            {
                img:"",
                title:"Teaching Skills",
                description:"Join our team if you are certified at advanced levels"
            },
        ]
    }
    const howItWorksData = {
        Title:"How It Works?",
        CardData:[
            {
                img:"",
                title:"Teach anytime, anywhere",
                description:"Empower your teaching journey by delivering lessons remotely from any location."
            },
            {
                img:"",
                title:"Choose a batch according to your flexibility ",
                description:"Select from flexible scheduling options tailored to your availability and commitments."
            },
            {
                img:"",
                title:"Elevate your teaching expertise",
                description:" Expand your skills, knowledge,career prospects as you become part of our dynamic team."
            },
            {
                img:"",
                title:"Elevate your teaching expertise",
                description:" Expand your skills, knowledge,career prospects as you become part of our dynamic team."
            },
            {
                img:"",
                title:"Elevate your teaching expertise",
                description:" Expand your skills, knowledge,career prospects as you become part of our dynamic team."
            },
        ]
    }
    const faqData = [
        {
            "_id": "6662a3c2834d6cb1800b9495",
            "question": "Why learn with The Language Network?",
            "answer": "Learn with us for personalised instruction, flexible scheduling, and immersive learning experiences tailored to your specific needs. Our expert tutors offer 1:1 and small group classes, ensuring personalised attention and effective learning. Additionally, we provide recordings of classes for your convenience and offer free study material worth ₹10,000+ to support your language learning journey.",
            "category": "General",
            "language": "French",
            "context": "Adult",
            "createdAt": "2024-06-07T06:08:02.346Z",
            "updatedAt": "2024-06-07T06:08:02.346Z",
            "__v": 0
        },
        {
            "_id": "6662a7a4834d6cb1800b94b5",
            "question": "Will I get a certificate after completing each level?",
            "answer": "Yes, you will receive a certificate upon completion of each level. We, as a language school are ISO-certified and our certificates are PAN India recognised. We also prepare for language proficiency exams, the certificates for which are recognised worldwide.",
            "category": "General",
            "language": "French",
            "context": "Adult",
            "createdAt": "2024-06-07T06:24:36.882Z",
            "updatedAt": "2024-06-07T06:24:36.882Z",
            "__v": 0
        },
        {
            "_id": "6662fc72834d6cb1800b94ff",
            "question": "What job opportunities will I get after completing my French course?",
            "answer": "Upon completing your French course, you'll gain access to job opportunities in fields like translation, tourism, international relations, and teaching.",
            "category": "General",
            "language": "French",
            "context": "Adult",
            "createdAt": "2024-06-07T12:26:26.001Z",
            "updatedAt": "2024-06-07T12:26:26.001Z",
            "__v": 0
        },
        {
            "_id": "666fe375a098ef75f6a4021c",
            "question": "Is French an easy language to learn?",
            "answer": "According to the Foreign Service Institute, French is considered one of the easiest languages for native English speakers to learn because it's more similar to English compared to other languages that are rated as harder to learn.",
            "category": "General",
            "language": "French",
            "context": "Adult",
            "createdAt": "2024-06-17T07:19:17.418Z",
            "updatedAt": "2024-06-17T07:19:17.418Z",
            "__v": 0
        },
        {
            "_id": "666fe41aa098ef75f6a40222",
            "question": "Is French useful in India?",
            "answer": "Learning French opens doors to diverse job opportunities in India and abroad, given its status as the second most learned and sixth most spoken language globally. French is particularly valuable in sectors such as hospitality, tourism, diplomacy, and multinational corporations, making it a highly sought-after skill in the Indian job market.",
            "category": "General",
            "language": "French",
            "context": "Adult",
            "createdAt": "2024-06-17T07:22:02.699Z",
            "updatedAt": "2024-06-17T07:22:02.699Z",
            "__v": 0
        },
        {
            "_id": "666fe500a098ef75f6a40227",
            "question": "How much time will it take to learn French?",
            "answer": "The time it takes to learn French depends on the level you aim to achieve. It typically takes around 5 months to clear A1-A2 level, about 8 months to complete B1-B2 level and approximately 11 months to clear C1-C2 level. Completing all levels up to C2 proficiency usually spans around 24 months. \n",
            "category": "General",
            "language": "French",
            "context": "Adult",
            "createdAt": "2024-06-17T07:25:52.018Z",
            "updatedAt": "2024-06-17T07:25:52.018Z",
            "__v": 0
        },
        {
            "_id": "666fe582a098ef75f6a4022b",
            "question": "What if I miss a class?",
            "answer": "Missing a class should not be a worry as you will have lifetime access to the recorded classes and can refer to them at your convenience.",
            "category": "General",
            "language": "French",
            "context": "Adult",
            "createdAt": "2024-06-17T07:28:02.899Z",
            "updatedAt": "2024-06-17T07:28:02.899Z",
            "__v": 0
        },
        {
            "_id": "666fe6cca098ef75f6a4022e",
            "question": "Will I be provided with study material?",
            "answer": "Yes, you'll be provided with comprehensive study material worth ₹10,000 + free of cost to supplement your learning and reinforce key concepts.",
            "category": "General",
            "language": "French",
            "context": "Adult",
            "createdAt": "2024-06-17T07:33:32.423Z",
            "updatedAt": "2024-06-17T07:33:32.423Z",
            "__v": 0
        },
        {
            "_id": "6690ab29e7d5ba1d26ea6ce3",
            "question": "Who will be teaching me?",
            "answer": "Your learning journey is guided by internationally certified trainers who are experienced and proficient in both French language and teaching methodologies.",
            "category": "General",
            "language": "French",
            "context": "Adult",
            "createdAt": "2024-06-17T07:33:32.423Z",
            "updatedAt": "2024-06-17T07:33:32.423Z",
            "__v": 0
        },
        {
            "_id": "6690ab54e7d5ba1d26ea6ce4",
            "question": "How many students are accommodated in one batch?",
            "answer": "Our batches are usually small in size, typically accommodating 5 students to ensure personalised attention.",
            "category": "General",
            "language": "French",
            "context": "Adult",
            "createdAt": "2024-06-17T07:33:32.423Z",
            "updatedAt": "2024-06-17T07:33:32.423Z",
            "__v": 0
        },
        {
            "_id": "6690ab86e7d5ba1d26ea6ce5",
            "question": "What is included in the curriculum?",
            "answer": "The curriculum includes grammar, vocabulary, listening, speaking, reading, and writing exercises tailored to each proficiency level, along with cultural insights and practical applications.",
            "category": "General",
            "language": "French",
            "context": "Adult",
            "createdAt": "2024-06-17T07:33:32.423Z",
            "updatedAt": "2024-06-17T07:33:32.423Z",
            "__v": 0
        }
    ]
    // const inputFields = [
    //     { id: 1, type: 'text', placeholder: 'Full Name' },
    //     { id: 2, type: 'text', placeholder: 'Contact No.' },
    //     { id: 3, type: 'email', placeholder: 'Email ID' },
    //     { id: 4, type: 'text', placeholder: 'Preferred Language to teach' },
    //     { id: 5, type: 'text', placeholder: 'Qualification' },
    //     { id: 6, type: 'number', placeholder: 'Teaching Experience (In Years)' },
    //   ];
    
      // Dynamic options for the dropdown
      const options = ['Website', 'Instagram', 'LinkedIn', 'Facebook', 'Medium'];
    const {data} = useGetAllOpenPositionQuery(); 
    const {data:SpecificData} = useGetSpecificPositionQuery("6722a08e584bdb64584bf027")
    console.log(data , "-------------this is data")
    console.log(SpecificData , "-------------this is specific data")

   
    const { data:baneerdata } = useGetBannerQuery({
        context: "TeachWithUs",
        language: "Others", 
      });
    return (
        <div>
            {/* hero section */}
            <Banner title={baneerdata?.length>0 &&  baneerdata[0]?.bannerTitle|| "title"} 
            description= {baneerdata?.length>0 && baneerdata[0]?.bannerDescription}
            />
            
              {/* stats */}
            <div className="px-12">
                <States/>
            </div>
            {/* why should  */}
            <div className="pt-20">
                <SliderComp data={whyShouldData}>
                    <WhyShouldSliderCard/>
                </SliderComp>
            </div>
            {/* apply section */}
            <div>
                <SliderComp data={applySectionData}/>
            </div>
            {/* how it works */}
            <div>
                <SliderComp data={howItWorksData}/>
            </div>
            {/* proficiency exam section */}
            <div>
                <ProficiencyExams/>
            </div>
            {/* faq */}
            <FaqComp FaqsData={faqData}/>
            {/* start your journey form */}
            <div>
                <div className="text-stone-900 text-[24px] leading-tight xl:text-[60px]/[80px] mb-12 text-center font-bold max-md:px-5">
                    Start Your Journey
                </div>
                <DynamicForm  howDidYouHearAboutoptions={options}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:outline-none focus:border-teal-500"
                            />
                            <input
                                type="text"
                                placeholder="Contact No."
                                className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:outline-none focus:border-teal-500"
                            />
                        </div>

                        <input
                            type="email"
                            placeholder="Email ID"
                            className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:outline-none focus:border-teal-500"
                        />
                        <input
                            type="text"
                            placeholder="Prefered Language to teach"
                            className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:outline-none focus:border-teal-500"
                        />
                        <input
                            type="text"
                            placeholder="Qualification"
                            className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:outline-none focus:border-teal-500"
                        />
                        <input
                            type="number"
                            placeholder="Teaching Experience (In Years)"
                            className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:outline-none focus:border-teal-500"
                        />
                </DynamicForm>
            </div>
            {/* below banner section */}
            <div>
                <BelowBanner title={"Make learning a breeze with us!"}/>
            </div>
            {/* payment bar */}
            <PaymentBar/>
        </div>
    )
}

export default TeachWithUs;