import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

// Dark is the default. Light = class "light" on <html>; tokens.css switches every color.
export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(localStorage.getItem('theme') || 'dark');

  const setTheme = (mode) => {
    document.documentElement.classList.toggle('light', mode === 'light');
    localStorage.setItem('theme', mode);
    setThemeState(mode);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
