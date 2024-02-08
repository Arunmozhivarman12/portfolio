import React, { useState, useContext, createContext } from "react";

const Themecontext = createContext();
    const Updatecontext = createContext();

export function useTheme() {
    return useContext(Themecontext);
}
export function useThemeUpdate() {
    return useContext(Updatecontext);
}


export function ThemeProvider({ children }) {
    
    const [darkTheme, setDarkTheme] = useState(true);

    function Toggle() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }
    return (
        <Themecontext.Provider value={darkTheme}>
            <Updatecontext.Provider value={Toggle}>
                {children}
            </Updatecontext.Provider>
        </Themecontext.Provider>
    )
} 