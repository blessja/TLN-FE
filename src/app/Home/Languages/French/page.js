"use client";
import SharedMainLanuagePage from "../../../../Shared/SharedMainLanguagePage/SharedMainLanuagePage";
import { FrenchLanguageData } from "../../../../Utilities/data/french/MainData";

import { useGetFilteredFAQsQuery } from "../../../../store/apiSlice";
import { useEffect, useState } from "react";
const FrenchPage = () => {
  const { data: faqData } = useGetFilteredFAQsQuery({
    language: "French",
    context: "Language",
    category: "General",
  });
  const { data: everyData } = useGetFilteredFAQsQuery({
    language: "French",
    context: "Language",
    category: "Everything you need to know",
  });

  const [content, setContent] = useState(FrenchLanguageData);
  useEffect(() => {
    if (!faqData) return;
    if (!everyData) return;
    setContent((prev) => ({
      ...prev,
      FaqsData: faqData,
      EveryThingYouNeedToKnowAbout: {
        ...prev.EveryThingYouNeedToKnowAbout,
        CardData: everyData,
      },
    }));
  }, [faqData, everyData]);
  return (
    <div>
      <SharedMainLanuagePage Data={content} language={"French"} context={""} />
    </div>
  );
};

export default FrenchPage;
