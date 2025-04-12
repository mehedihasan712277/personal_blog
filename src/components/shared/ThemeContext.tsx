"use client";

import { createContext, useEffect, useState, ReactNode, FC } from "react";

// Define the shape of the context value
interface ThemeContextType {
    theme: string;
    toggle: () => void;
}

// Create the context with an initial empty value (will be provided in the provider)
export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggle: () => { },
});

// Define props for the provider component
interface ThemeProviderProps {
    children: ReactNode;
}

// Get theme from localStorage
const getFromLocalStorage = (): string => {
    if (typeof window !== "undefined") {
        const value = localStorage.getItem("theme");
        return value || "light";
    }
    return "light"; // default fallback
};

// ThemeContextProvider component
export const ThemeContextProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>(() => getFromLocalStorage());

    const toggle = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
};
