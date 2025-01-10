"use client";
import { useEffect, useState } from "react";
import { useGetFilteredFAQsQuery } from "../../../../../store/apiSlice";
import SharedAdultsPage from "../../../../../Shared/SharedAdultsPage";
import { AdultsData } from "../../../../../Utilities/data/english/AdultData";
const Page = () => {
  const { data: faqData } = useGetFilteredFAQsQuery({
    language: "English",
    context: "Adult",
    category: "General",
  });
  const { data: everyData } = useGetFilteredFAQsQuery({
    language: "English",
    context: "Adult",
    category: "Everything you need to know",
  });

  const [content, setContent] = useState(AdultsData);
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
      <SharedAdultsPage Data={content} language={"English"} context={"Adult"} />
    </div>
  );
};
export default Page;
