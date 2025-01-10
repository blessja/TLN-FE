"use client";
import SharedMainLanuagePage from "../../../../Shared/SharedMainLanguagePage/SharedMainLanuagePage";
import { SpanishLanguageData } from "../../../../Utilities/data/spanish/MainData";
import { useGetFilteredFAQsQuery } from "../../../../store/apiSlice";
import { useEffect, useState } from "react";

const SpanishPage = () => {
  const { data: faqData } = useGetFilteredFAQsQuery({
    language: "Spanish",
    context: "Language",
    category: "General",
  });
  const { data: everyData } = useGetFilteredFAQsQuery({
    language: "Spanish",
    context: "Language",
    category: "Everything you need to know",
  });

  const [content, setContent] = useState(SpanishLanguageData);
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
      <SharedMainLanuagePage Data={content} language={"Spanish"} context={""} />
    </div>
  );
};

export default SpanishPage;
