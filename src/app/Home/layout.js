"use client";
import { Provider } from "react-redux";
import HomeFooter from "../../Components/HomeComp/HomeFooter";
import Nav from "../../Utilities/Nav";
import "../../css/Custom.css";
import { createContext, useEffect, useState } from "react";
import { store } from "../../store/store";
import Contact from "../../Shared/Contact";

export const LanguageOptionContext = createContext("");
const Homelayout = ({ children }) => {
  const [Language, setLanguage] = useState("English");
  const data = {
    Language,
    setLanguage,
  };
  useEffect(() => {
    setLanguage(localStorage.getItem("Language") || "English");
  }, []);
  return (
    <Provider store={store}>
      <LanguageOptionContext.Provider value={data} className="">
        <Provider store={store}>
          <Contact/>
          <Nav />
          {children}
          <HomeFooter />
        </Provider>
      </LanguageOptionContext.Provider>
    </Provider>
  );
};

export default Homelayout;
