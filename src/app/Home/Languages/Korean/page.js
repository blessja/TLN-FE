"use client";
import SharedMainLanuagePage from "../../../../Shared/SharedMainLanguagePage/SharedMainLanuagePage";
import { KoreanLanguageData } from "../../../../Utilities/data/korean/MainData";
import { useGetFilteredFAQsQuery } from "../../../../store/apiSlice";
import { useEffect, useState } from "react";

const KoreanPage = () => {
  const { data: faqData } = useGetFilteredFAQsQuery({
    language: "Korean",
    context: "Language",
    category: "General",
  });
  const { data: everyData } = useGetFilteredFAQsQuery({
    language: "Korean",
    context: "Language",
    category: "Everything you need to know",
  });

  const [content, setContent] = useState(KoreanLanguageData);
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
      <SharedMainLanuagePage Data={content} language={"Korean"} context={""} />
    </div>
  );
};

export default KoreanPage;
