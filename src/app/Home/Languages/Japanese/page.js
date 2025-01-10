"use client";
import SharedMainLanuagePage from "../../../../Shared/SharedMainLanguagePage/SharedMainLanuagePage";
import { JapaneseLanguageData } from "../../../../Utilities/data/japanese/MainData";
import { useGetFilteredFAQsQuery } from "../../../../store/apiSlice";
import { useEffect, useState } from "react";

const JapanesePage = () => {
  const { data: faqData } = useGetFilteredFAQsQuery({
    language: "Japanese",
    context: "Language",
    category: "General",
  });
  const { data: everyData } = useGetFilteredFAQsQuery({
    language: "Japanese",
    context: "Language",
    category: "Everything you need to know",
  });

  const [content, setContent] = useState(JapaneseLanguageData);
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
      <SharedMainLanuagePage
        Data={content}
        language={"Japanese"}
        context={""}
      />
    </div>
  );
};

export default JapanesePage;
