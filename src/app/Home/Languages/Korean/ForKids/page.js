"use client";
import { useEffect, useState } from "react";
import SharedKidsPage from "../../../../../Shared/SharedKidsPage";
import { data } from "../../../../../Utilities/data/korean/KidData";
import { useGetFilteredFAQsQuery } from "../../../../../store/apiSlice";

const KoreanForKidsPage = () => {
  const { data: faqData } = useGetFilteredFAQsQuery({
    language: "Korean",
    context: "Kids",
    category: "General",
  });
  const { data: everyData } = useGetFilteredFAQsQuery({
    language: "Korean",
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
      <SharedKidsPage Data={content} language={"Korean"} context={"Kids"} />
    </div>
  );
};

export default KoreanForKidsPage;
