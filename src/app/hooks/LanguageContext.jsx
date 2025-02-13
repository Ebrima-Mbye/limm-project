"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

// Create the context
const LanguageContext = createContext();

const LANGUAGE_TIME_STAMP = "languageTimestamp";
const LANGUAGE = "language";

// Export the context provider
export const LanguageProvider = ({ children, defaultLanguage = "en" }) => {
  // Get language from cookie or fallback to default
  const savedLanguage = Cookies.get(LANGUAGE) || defaultLanguage;
  const [language, setLanguage] = useState(savedLanguage);

  useEffect(() => {
    const savedTimestamp = Cookies.get(LANGUAGE_TIME_STAMP);

    if (savedTimestamp) {
      const elapsedTime = Date.now() - parseInt(savedTimestamp, 10);

      if (elapsedTime >= 60 * 60 * 1000) {
        // 1 hour in milliseconds
        resetLanguage();
      } else {
        // Set a timeout to reset the language exactly after 1 hour
        const remainingTime = 60 * 60 * 1000 - elapsedTime;
        const timeout = setTimeout(() => resetLanguage(), remainingTime);
        return () => clearTimeout(timeout); // Cleanup on unmount
      }
    }
  }, [language]);

  // Function to update language and store timestamp
  const updateLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    Cookies.set(LANGUAGE, newLanguage, { path: "/" });
    Cookies.set(LANGUAGE_TIME_STAMP, Date.now().toString(), { path: "/" });
  };

  // Function to reset language to English
  const resetLanguage = () => {
    setLanguage("en");
    Cookies.set(LANGUAGE, "en", { path: "/" });
    Cookies.remove(LANGUAGE_TIME_STAMP);
  };

  return (
    <LanguageContext.Provider value={{ language, updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Export a hook to use the context
export const useLanguage = () => useContext(LanguageContext);
