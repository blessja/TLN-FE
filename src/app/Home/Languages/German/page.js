"use client";
import { GermanLanguageData } from "../../../../Utilities/data/german/MainData";
import SharedMainLanuagePage from "../../../../Shared/SharedMainLanguagePage/SharedMainLanuagePage";
import { useGetFilteredFAQsQuery } from "../../../../store/apiSlice";
import { useEffect, useState } from "react";

const GermanPage = () => {
  const { data: faqData } = useGetFilteredFAQsQuery({
    language: "German",
    context: "Language",
    category: "General",
  });
  const { data: everyData } = useGetFilteredFAQsQuery({
    language: "German",
    context: "Language",
    category: "Everything you need to know",
  });

  const [content, setContent] = useState(GermanLanguageData);
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
      <SharedMainLanuagePage Data={content} language={"German"} context={""} />
    </div>
  );
};

export default GermanPage;
