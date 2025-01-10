"use client"
import React from "react";
import Image from "next/image";
import PaymentBar from "../../../../Components/HomeComp/PaymentBar";
import Faqs from "./components/Faq";
import Header from './components/Header'
import Form from './components/Form'
import Section1 from './components/Section1'
import Section2 from './components/Section2'


const page = () => {
	const FaqsData = [
		{
			question: "Who qualifies as a content creator for The Languages Network?",
			answer:
				"We welcome content creators, thought leaders, and influencers from diverse backgrounds who share our passion for language learning and cultural exchange.",
		},
		{
			question: "What kind of content can I produce?",
			answer:
				"We welcome content creators, thought leaders, and influencers from diverse backgrounds who share our passion for language learning and cultural exchange.",
		},
		{
			question: "How can I collaborate with The Language Network?",
			answer:
				"We welcome content creators, thought leaders, and influencers from diverse backgrounds who share our passion for language learning and cultural exchange.",
		},
		{
			question: "Are there any specific topics or guidelines for content creation?",
			answer:
				"We welcome content creators, thought leaders, and influencers from diverse backgrounds who share our passion for language learning and cultural exchange.",
		},
		{
			question: "Will I be compensated for my content?",
			answer:
				"We welcome content creators, thought leaders, and influencers from diverse backgrounds who share our passion for language learning and cultural exchange.",
		},
		
	];
	return (
		<>
		<Header/>
		<Section1/>
		<div className="pt-20 bg-[#F6F3F3]"><Faqs data={FaqsData} /> </div>			
<Form/>
	<Section2/>
		
			<PaymentBar />
		</>
	);
};

export default page;
