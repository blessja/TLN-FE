'use client'
import Heading from '../../../Components/Common/Heading';
import Newsletter from '../../../Components/HomeComp/Newsletter';
import OurAlumni from '../../../Components/HomeComp/OurAlumni';
import Banner from '../../../Shared/Banner'
import WhyChooseComp from '../../../Components/Common/WhyChooseComp'
import SliderComp from '../../../Components/Common/SliderComp';
import ProficiencyExams from '../../../Components/HomeComp/ProficiencyExams';
import EducationPartners from '../../../Components/HomeComp/EducationPartners';
import StudentsTestomony from '../../../Shared/SharedMainLanguagePage/Components/StudentTestomony/StudentsTestomony';
import FaqComp from '../../../Shared/FaqComp';
import DynamicForm from '../../../Components/Common/DynamicForm';
import BelowBanner from '../../../Components/Common/BelowBanner';
import PaymentBar from '../../../Components/HomeComp/PaymentBar';
import PlansComp from '../../../Components/Common/PlansComp';
import { FaChartBar } from 'react-icons/fa';
import StyledSlider from '../../../Components/Common/StyledSlider';
import GetStartedHomeBannerButton from '../../../Shared/buttons/GetStartedHomeBannerButton';
import { useGetBannerQuery} from "../../../store/apiSlice"
const SlideComponent  = ({slide})=>{

    return (
        <div className="bg-[#D9F1EE] rounded-xl p-6 flex flex-col items-center shadow-md max-w-xs mx-auto h-full">
            {/* Icon */}
            <div className="text-green-800 mb-4">
                {slide.icon}
            </div>
    
            {/* Text Content */}
            <div className="bg-white border border-primary-color rounded-md p-4 text-center">
                <p className="text-green-800 font-medium">
                    {slide.description}
                </p>
            </div>
      </div>
    )
}

const CorporateTraining = ()=>{
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
        { id: 1, type: 'text', placeholder: 'Your Full Name' },
        { id: 2, type: 'text', placeholder: 'Contact No.' },
        { id: 3, type: 'email', placeholder: 'Email Address' },
        { id: 4, type: 'text', placeholder: 'Instagram Username' },
      ];
    const plansData = [
    {
        title: "Preparatory",
        level: "A1 Level",
        duration: "Duration - 50 Classes",
        description: "Build a strong foundation with our A1 level course aimed to make you proficient at the basics of the language",
        bulletPoints: [
        "Develop basic reading skills to comprehend simple texts and messages.",
        "Learn to write basic sentences and short paragraphs to express simple ideas.",
        "Introduce oneself, ask simple questions and talk about hobbies and preferences.",
        "Enhance listening skills to understand common phrases and simple conversations.",
        "Gain awareness of basic cultural norms and customs relevant to social interactions.",
        "Develop basic comprehension skills to understand straightforward spoken and written language.",
        "Access free study material worth ₹2,000/-"
        ],
        buttonText: "Learn more"
    },
    {
        title: "Prime",
        level: "A1 + A2 Level",
        duration: "Duration - 100 Classes",
        description: "Advance your language proficiency with our A1-A2 level course and excel in corporate communication.",
        bulletPoints: [
        "Expand reading proficiency to comprehend a wider range of texts and messages.",
        "Develop writing skills to compose more complex sentences and short compositions.",
        "Can discuss various topics, express opinions and handle routine tasks confidently.",
        "Strengthen listening skills to understand more complex conversations and instructions.",
        "Increase awareness of cultural nuances for effective communication in various contexts.",
        "Enhance comprehension skills to understand detailed information in spoken and written formats.",
        "Access free study material worth ₹5,000/-"
        ],
        buttonText: "Learn more"
    },
    {
        title: "Proficient",
        level: "A1 to B2 Level",
        duration: "Duration - 260 Classes",
        description: "Conquer your communication skills with our A1-B2 level course for superior proficiency in diverse corporate contexts.",
        bulletPoints: [
        "Master reading comprehension skills to understand complex texts and academic materials.",
        "Acquire advance writing skills to produce reports, essays and formal documents with clarity and coherence.",
        "Achieve fluency and confidence in expressing opinions, negotiating and delivering presentations.",
        "Attain proficiency in understanding native speakers and complex discussions in various contexts.",
        "Develop cultural competence to navigate diverse cultural settings and understand nuances in communication.",
        "Enhance high-level comprehension skills to grasp intricate details and abstract concepts in both spoken and written language.",
        "Access free study material worth ₹10,000/-"
        ],
        buttonText: "Learn more"
    }
    ];
    const factCheckData = [
        {
            icon:<FaChartBar size={40}/>,
            description:"Multilingual individuals have a competitive edge in the job market"
        },
        {
            icon:<FaChartBar size={40}/>,
            description:"Demand for bilingual workers more than doubled in the US between 2010 and 2015"
        },
        {
            icon:<FaChartBar size={40}/>,
            description:"89% believe multilingual workers add value to companies."
        },
        {
            icon: <FaChartBar size={40} />,
            description: "89% Language learners report improved self-confidence."
        },
        {
            icon: <FaChartBar size={40} />,
            description: "Bilingual employees earn 5-20% more on average than monolinguals."
        },
        {
            icon: <FaChartBar size={40} />,
            description: "Multilingual individuals have a competitive edge in the job market."
        },
        {
            icon: <FaChartBar size={40} />,
            description: "Demand for bilingual workers more than doubled in the US between 2010 and 2015."
        },
        {
            icon: <FaChartBar size={40} />,
            description: "89% believe multilingual workers add value to companies."
        },
        {
            icon: <FaChartBar size={40} />,
            description: "88% prefer to hire multilingual individuals."
        },
        {
            icon: <FaChartBar size={40} />,
            description: "Bilinguals outperform monolinguals by 12.5% in easy math tasks."
        },
    ];
    
    const { data } = useGetBannerQuery({
        context: "CorporateTraining",
        language: "Others", 
      });

    return(
        <div>
            {/* hero section */}
            <Banner title={data?.length>0 &&  data[0]?.bannerTitle|| "title"}
             description= {data?.length>0 && data[0]?.bannerDescription}
             buttonText={data?.length>0 && data[0]?.buttonText}  />
            {/* our alumini */}
            <div className='mt-20'>
                <OurAlumni/>
            </div>
            {/* newsletter */}
            <div>
                <Newsletter/>
            </div>
            {/* why choose us section */}
            <WhyChooseComp cards={whyChooseUsData}/>
            {/* how it works section */}
            <SliderComp data={howItWorksData}/>
            {/* plans section */}
            <PlansComp cardsData={plansData}/>
            {/* fact check section */}
            <div className='mt-8'>
                <Heading title={"Fact Check"}/>
                <StyledSlider slidesData={factCheckData}>
                    <SlideComponent/>
                </StyledSlider>
                <div className='flex justify-center'>
                    <GetStartedHomeBannerButton/>
                </div>

            </div>
            {/* we prepare section */}
            <ProficiencyExams/>
            {/* our eductational partners */}
            <EducationPartners/>
            {/* testimonials */}
            <StudentsTestomony language={"French"} context={"Adult"} title={"Hear it from Our Learners"}/>
            {/* faq */}
            <FaqComp FaqsData={faqData}/>
            {/* start your jouney form */}
            <div>
                <Heading title={"Start Your Journey "}/>
                <DynamicForm showAttachCV={false} showTextarea={false} inputFields={inputFields}/>
            </div>
            {/* below banner */}
            <BelowBanner title={"Your gateway to seamless opportunities!"}/>
            {/* paymentbar */}
            <PaymentBar/>
        </div>
    )
}

export default CorporateTraining;