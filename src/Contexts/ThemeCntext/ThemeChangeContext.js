import React, { createContext, useEffect, useState } from "react";

export const MyThemeContext = createContext();
const ThemeChangeContext = ({ children }) => {
  const [lightMode, setLightMode] = useState(true);
  useEffect(() => {
    if (lightMode) {
      document
        .getElementsByTagName("html")[0]
        .setAttribute("data-theme", "light");
    } else {
      document
        .getElementsByTagName("html")[0]
        .setAttribute("data-theme", "dark");
    }
  }, [lightMode]);

  const changeMode = () => {
    setLightMode(!lightMode);
  };
  return (
    <div>
      <MyThemeContext.Provider value={{ lightMode, changeMode }}>
        {children}
      </MyThemeContext.Provider>
    </div>
  );
};

export default ThemeChangeContext;
