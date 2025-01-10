"use client";
import { useEffect, useState } from "react";
import SharedStudyAbroad from "../../../../../Shared/SharedStudyAbroad";
import { useGetFilteredFAQsQuery } from "../../../../../store/apiSlice";
import { data } from "../../../../../Utilities/data/english/StudyAbroadData";
const Page = () => {
  const { data: faqData } = useGetFilteredFAQsQuery({
    language: "English",
    context: "StudyAbroad",
    category: "General",
  });
  const { data: everyData } = useGetFilteredFAQsQuery({
    language: "English",
    context: "StudyAbroad",
    category: "Everything you need to know",
  });

  const [content, setContent] = useState(data);
  useEffect(() => {
    if (!faqData) return;
    if (!everyData) return;
    setContent((prev) => ({
      ...prev,
      Faqs: faqData,
      EveryThingYouNeedToKnowAbout: {
        ...prev.EveryThingYouNeedToKnowAbout,
        CardData: everyData,
      },
    }));
  }, [faqData, everyData]);
  return (
    <div>
      <SharedStudyAbroad
        Data={content}
        language={"English"}
        context={"StudyAbroad"}
      />
    </div>
  );
};

export default Page;
