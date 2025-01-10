"use client";
import { useEffect, useState } from "react";
import SharedKidsPage from "../../../../../Shared/SharedKidsPage";
import { data } from "../../../../../Utilities/data/mandarin/KidData";
import { useGetFilteredFAQsQuery } from "../../../../../store/apiSlice";
const MandarinForKidsPage = () => {
  const { data: faqData } = useGetFilteredFAQsQuery({
    language: "Mandarin",
    context: "Kids",
    category: "General",
  });
  const { data: everyData } = useGetFilteredFAQsQuery({
    language: "Mandarin",
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
      <SharedKidsPage Data={content} language={"Mandarin"} context={"Kids"} />
    </div>
  );
};

export default MandarinForKidsPage;
