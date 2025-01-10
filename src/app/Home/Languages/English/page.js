"use client";
import SharedMainLanuagePage from "../../../../Shared/SharedMainLanguagePage/SharedMainLanuagePage";
import { EnglishLanguageData } from "../../../../Utilities/data/english/MainData";
import { useGetFilteredFAQsQuery } from "../../../../store/apiSlice";
import { useEffect, useState } from "react";

const EnglishPage = () => {
  const { data: faqData } = useGetFilteredFAQsQuery({
    language: "English",
    context: "Language",
    category: "General",
  });
  const { data: everyData } = useGetFilteredFAQsQuery({
    language: "English",
    context: "Language",
    category: "Everything you need to know",
  });

  const [content, setContent] = useState(EnglishLanguageData);
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
      <SharedMainLanuagePage Data={content} language={"English"} context={""} />
    </div>
  );
};

export default EnglishPage;
