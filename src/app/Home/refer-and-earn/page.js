"use client"
import BelowBanner from '../../../Components/Common/BelowBanner';
import DynamicForm from '../../../Components/Common/DynamicForm';
import SliderComp from '../../../Components/Common/SliderComp';
import PaymentBar from '../../../Components/HomeComp/PaymentBar';
import Banner from '../../../Shared/Banner'
import FaqComp from '../../../Shared/FaqComp';
import Heading from '../../../Components/Common/Heading'
import { useGetBannerQuery} from "../../../store/apiSlice"

const ReferAndEarn = ()=>{
    const { data } = useGetBannerQuery({
        context: "ReferNEarn",
        language: "Others", 
      });
    const howitWorksData = {
        Title:"How It Works?",
        CardData:[
            {
                img:"",
                title:"STEP 1",
                description:"Start your language journey with The Language Network."
            },
            {
                img:"",
                title:"STEP 2",
                description:"Refer a friend by filling out our form."
            },
            {
                img:"",
                title:"STEP 3",
                description:"Your friend signs up, gets a 10% discount, and you receive ₹1,000/- cashback."
            },
            {
                img:"",
                title:"STEP 4",
                description:"Refer more friends, earn ₹1,000 each time. It's a win-win situation for both you and your friends!"
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
    const inputFields = [
        { id: 1, type: 'text', placeholder: 'Name' },
        { id: 2, type: 'text', placeholder: 'Your Student ID' },
        { id: 3, type: 'text', placeholder: 'Contact No' },
        { id: 4, type: 'email', placeholder: 'Email ID(optional)' },
        { id: 5, type: 'text', placeholder: 'Name (To whom you are referring to) ' },
      ];
    return (
        <div>
            {/* hero */}
            <Banner title={data?.length>0 &&  data[0]?.bannerTitle|| "title"} 
            description= {data?.length>0 && data[0]?.bannerDescription}
            buttonText={data?.length>0 && data[0]?.buttonText}  />
            {/* how it works */}
            <div>
                <SliderComp data={howitWorksData}/>
            </div>
            {/* faq */}
            <FaqComp FaqsData={faqData}/>

            {/* form */}
            <Heading title={"Start Your Journey"}/>
            <DynamicForm  showAttachCV={false} showTextarea={false}>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:outline-none focus:border-teal-500"
                        />
                        <input
                            type="text"
                            placeholder="Your Student ID"
                            className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:outline-none focus:border-teal-500"
                        />
                        <input
                            type="text"
                            placeholder="Contact No."
                            className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:outline-none focus:border-teal-500"
                        />
                        <input
                            type="email"
                            placeholder="Email ID (Optional)"
                            className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:outline-none focus:border-teal-500"
                        />
                    </div>

                    <input
                        type="text"
                        placeholder="Name (To whom you are referring to)"
                        className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:outline-none focus:border-teal-500"
                    />
            </DynamicForm>
            {/* below banner */}
            <BelowBanner title={"Learn and earn in a new language!"}/>
            {/* payment bar */}
            <PaymentBar/>
        </div>
    )
}

export default ReferAndEarn;