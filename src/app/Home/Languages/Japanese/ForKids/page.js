"use client";
import { useEffect, useState } from "react";
import SharedKidsPage from "../../../../../Shared/SharedKidsPage";
import { useGetFilteredFAQsQuery } from "../../../../../store/apiSlice";
import { data } from "../../../../../Utilities/data/japanese/KidData";
const JapaneseForKidsPage = () => {
  const { data: faqData } = useGetFilteredFAQsQuery({
    language: "Japanese",
    context: "Kids",
    category: "General",
  });
  const { data: everyData } = useGetFilteredFAQsQuery({
    language: "Japanese",
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
      <SharedKidsPage Data={content} language={"Japanese"} context={"Kids"} />
    </div>
  );
};
export default JapaneseForKidsPage;
