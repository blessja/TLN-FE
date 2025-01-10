"use client";
import { useEffect, useState } from "react";
import { useGetFilteredFAQsQuery } from "../../../../../store/apiSlice";

import SharedStudyAbroad from "../../../../../Shared/SharedStudyAbroad";
import { data } from "../../../../../Utilities/data/german/StudyAbroadData";

const Page = () => {
  const { data: faqData } = useGetFilteredFAQsQuery({
    language: "German",
    context: "StudyAbroad",
    category: "General",
  });
  const { data: everyData } = useGetFilteredFAQsQuery({
    language: "German",
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
        language={"German"}
        context={"StudyAbroad"}
      />
    </div>
  );
};

export default Page;
