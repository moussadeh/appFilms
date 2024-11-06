/*import React, { Children, createContext, useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";

const ThemeContext = createContext();

export const ThemeProvider = ({ children } : any) => {
    const systemTheme = useColorScheme();
    const [theme, setTheme] = useState(systemTheme);

    const toggleTheme = () => {
        setTheme((themeAvant) => (themeAvant === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        setTheme(systemTheme);
    }, [systemTheme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);*/