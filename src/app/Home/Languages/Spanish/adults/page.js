"use client";
import { useEffect, useState } from "react";
import { useGetFilteredFAQsQuery } from "../../../../../store/apiSlice";

import { data } from "../../../../../Utilities/data/spanish/AdultData";
import React from "react";
import SharedAdultsPage from "../../../../../Shared/SharedAdultsPage";

const Page = () => {
  const { data: faqData } = useGetFilteredFAQsQuery({
    language: "Spanish",
    context: "Adult",
    category: "General",
  });
  const { data: everyData } = useGetFilteredFAQsQuery({
    language: "Spanish",
    context: "Adult",
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
      <SharedAdultsPage Data={content} language={"Spanish"} context={"Adult"} />
    </div>
  );
};

export default Page;
