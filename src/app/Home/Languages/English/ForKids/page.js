"use client";
import { useEffect, useState } from "react";
import SharedKidsPage from "../../../../../Shared/SharedKidsPage";
import { useGetFilteredFAQsQuery } from "../../../../../store/apiSlice";
import { data } from "../../../../../Utilities/data/english/KidData";
const EnglishForKidsPage = () => {
  const { data: faqData } = useGetFilteredFAQsQuery({
    language: "English",
    context: "Kids",
    category: "General",
  });
  const { data: everyData } = useGetFilteredFAQsQuery({
    language: "English",
    context: "Kids",
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
      <SharedKidsPage Data={content} language={"English"} context={"Kids"} />
    </div>
  );
};

export default EnglishForKidsPage;
