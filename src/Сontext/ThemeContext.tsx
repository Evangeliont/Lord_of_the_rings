import { createContext, useState, useMemo, ReactNode } from "react";
import PropTypes from "prop-types";

interface ThemeContextProps {
  children: ReactNode;
}

interface ThemeContextInterface {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: "black",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: ThemeContextProps) => {
  const [theme, setTheme] = useState("black");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "black" ? "white" : "black"));
  };

  const themeContextValue = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
