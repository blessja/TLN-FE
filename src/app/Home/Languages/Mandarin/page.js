"use client";
import SharedMainLanuagePage from "../../../../Shared/SharedMainLanguagePage/SharedMainLanuagePage";
import { MandarinLanguageData } from "../../../../Utilities/data/mandarin/MainData";
import { useGetFilteredFAQsQuery } from "../../../../store/apiSlice";
import { useEffect, useState } from "react";

const MandarinPage = () => {
  const { data: faqData } = useGetFilteredFAQsQuery({
    language: "Mandarin",
    context: "Language",
    category: "General",
  });
  const { data: everyData } = useGetFilteredFAQsQuery({
    language: "Mandarin",
    context: "Language",
    category: "Everything you need to know",
  });

  const [content, setContent] = useState(MandarinLanguageData);
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
        language={"Mandarin"}
        context={""}
      />
    </div>
  );
};

export default MandarinPage;
