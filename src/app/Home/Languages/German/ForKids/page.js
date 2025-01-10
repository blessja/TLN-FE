"use client";
import { useEffect, useState } from "react";
import SharedKidsPage from "../../../../../Shared/SharedKidsPage";
import { useGetFilteredFAQsQuery } from "../../../../../store/apiSlice";
import { data } from "../../../../../Utilities/data/german/KidData";

const GermanForKidsPage = () => {
  const { data: faqData } = useGetFilteredFAQsQuery({
    language: "German",
    context: "Kids",
    category: "General",
  });
  const { data: everyData } = useGetFilteredFAQsQuery({
    language: "German",
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
      <SharedKidsPage Data={content} language={"German"} context={"Kids"} />
    </div>
  );
};

export default GermanForKidsPage;
