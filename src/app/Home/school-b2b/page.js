"use client"
import Banner from '../../../Shared/Banner'
import WhyChooseComp from '../../../Components/Common/WhyChooseComp'
import Newsletter from '../../../Components/HomeComp/Newsletter'
import SliderComp from '../../../Components/Common/SliderComp'
import PlansComp from '../../../Components/Common/PlansComp'
import ProficiencyExams from '../../../Components/HomeComp/ProficiencyExams'
import EducationPartners from '../../../Components/HomeComp/EducationPartners'
import FaqComp from '../../../Shared/FaqComp'
import BelowBanner from '../../../Components/Common/BelowBanner'
import PaymentBar from '../../../Components/HomeComp/PaymentBar'
import { useGetBannerQuery} from "../../../store/apiSlice"

const SchoolB2B = ()=>{
    const whyChooseUsData = [
        {
            title:"Tailored Curriculum",
            description:"Our language programs are customized to meet the specific needs and goals of working professionals, ensuring relevance and effectiveness in language acquisition."
        },
        {
            title:"Experienced Educators",
            description:"Our team of skilled language educators delivers engaging lessons tailored to corporate-level learners, catering to diverse learning styles and abilities."
        },
        {
            title:"Flexible Deliveries",
            description:"We offer flexible options, including offline and online classes, to accommodate working professionals' scheduling preferences and logistical constraints seamlessly."
        },
        {
            title:"Comprehensive Support",
            description:"From curriculum development to ongoing assistance, we provide you and your company with comprehensive support to integrate language learning into your corporate framework effortlessly."
        },
        {
            title:"Enhanced Global Competency",
            description:"Our programs equip working professionals with the linguistic skills and cultural competence needed to thrive in an interconnected world, preparing them to become global citizens and master communicators."
        },
        {
            title:"Cost Effective",
            description:"Our programs offer top-quality education at affordable rates, maximizing company resources for professional learning."
        },
    ]
    const howItWorksData = 
        {
            Title:"How It Works?",
            CardData:[
                {
                    img:"",
                    title:"STEP 1",
                    description:"Connect with us to share your needs and preferences"
                },
                {
                    img:"",
                    title:"STEP 2",
                    description:"Get a tailored proposal crafted just for you. "
                },
                {
                    img:"",
                    title:"STEP 3",
                    description:"Seal the deal! "
                },
            ]
    }
    const plansData = [
        {
          "title": "Starter",
          "level": "A1 Level",
          "description": "Dive into the essentials in just 10 days with our intensive workshop, covering everything from basics to practical communication.",
          "bulletPoints": [
            "Learn greetings, self-introductions, and polite expressions.",
            "Build vocabulary on colours, numbers, days, and months.",
            "Engaging role-plays, games, and discussions for experiential learning.",
            "Improve spoken communication through guided exercises and audio files.",
            "Explore cultural aspects for better understanding and communication.",
            "Assess participant progress and offer feedback for improvement."
          ],
          "buttonText": "Learn more"
        },
        {
          "title": "Scholar",
          "level": "A1 Level",
          "description": "In just 36 classes, acquire essential A1 level language skills with our comprehensive course, covering vocabulary, grammar, and communication.",
          "bulletPoints": [
            "Scholar's 36-class program ensures adept handling of daily tasks at A1 level.",
            "Students proficiently express needs and engage in simple interactions.",
            "A1 learners grasp common expressions and essential phrases.",
            "Students confidently engage in basic conversations.",
            "Engaging sessions and games enhance learning and curiosity.",
            "Includes tracking and free study materials for improvement."
          ],
          "buttonText": "Learn more"
        },
        {
          "title": "Stellar",
          "level": "A1 to B1 Level",
          "description": "3-year program covering A1 to B1 levels, integrating seamlessly into your curriculum.",
          "bulletPoints": [
            "Stellar's 3-year program, spanning A1 to B1 levels, offers interactive learning with games, activities, and presentations.",
            "Students understand and create text, handle travel scenarios, and articulate experiences and aspirations.",
            "Students will deliver clear directives, grasp instructions, and communicate effectively.",
            "Progressing to B1 level opens career prospects and equips learners for advancement.",
            "Stellar instills confidence in verbal expression and proficiency in communication.",
            "The program tracks progress and provides personalized feedback to ensure continuous improvement."
          ],
          "buttonText": "Learn more"
        }
    ]
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
    const { data } = useGetBannerQuery({
        context: "SchoolB2B",
        language: "Others", 
      });
    return (
        <div>
            {/* hero section */}
            <Banner title={data?.length>0 &&  data[0]?.bannerTitle|| "title"} 
            description= {data?.length>0 && data[0]?.bannerDescription}
            buttonText={data?.length>0 && data[0]?.buttonText}  />
            {/* why should comp */}
            <WhyChooseComp cards={whyChooseUsData} title='Why Schools Should Include Foreign Languages In Their Curriculum?'/>
            {/* newsletter section */}
            <Newsletter/>
            {/* why choose us */}
            <WhyChooseComp cards={whyChooseUsData}/>
            {/* how it works */}
            <SliderComp data={howItWorksData}/>
            {/* plans section */}
            <PlansComp cardsData={plansData}/>
            {/* we prepare section */}
            <ProficiencyExams/>
            {/* our educational partners */}
            <EducationPartners/>
            {/* faq */}
            <FaqComp FaqsData={faqData}/>
            {/* below banner */}
            <BelowBanner title={"Elevating education, effortlessly!"}/>
            {/* payment bar */}
            <PaymentBar/>


        </div>
    )
}

export default SchoolB2B;