"use client";

import React, { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

// Create the context
const LanguageContext = createContext();

// Export the context provider
export const LanguageProvider = ({ children, defaultLanguage }) => {
  const [language, setLanguage] = useState(defaultLanguage); // Initialize with server-sent language

  // Function to update language
  const updateLanguage = (newLanguage) => {
    setLanguage(newLanguage); // Update state
    Cookies.set("language", newLanguage, { path: "/" }); // Update cookie
  };

  return (
    <LanguageContext.Provider value={{ language, updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Export a hook to use the context
export const useLanguage = () => useContext(LanguageContext);
