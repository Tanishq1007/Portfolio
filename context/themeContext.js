"use client";
import React, { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    const setThemeFun = () => {
        if (theme === "dark") {
            setTheme("light");
            localStorage.setItem("myPortfolioProfileTheme", "light");
        } else {
            setTheme("dark");
            localStorage.setItem("myPortfolioProfileTheme", "dark");
        }
    };

    useEffect(() => {
        const getTheme = localStorage.getItem("myPortfolioProfileTheme");
        if (!getTheme) {
            return
        }
        setTheme(getTheme);
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setThemeFun }}>
            <div className={theme === "dark" ? "dark" : ""}>
                <div className='dark:text-white dark:bg-black'>{children}</div>
            </div>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;