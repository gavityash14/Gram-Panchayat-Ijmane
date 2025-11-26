import { createContext, useState } from "react";


export const AppContext = createContext();


export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); 

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "mr" : "en"));
  };

  return (
    <AppContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </AppContext.Provider>
  );
};
