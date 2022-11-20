import { useEffect, useState } from "react";

export function useDarkMode(): [boolean, ()=>void] {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleColorScheme = ()=>{
        const newValue = isDarkMode ? "light" : "dark";
        setIsDarkMode(!isDarkMode);
        localStorage.setItem("preferred-color-scheme", newValue);
    }
    useEffect(() => {
        setIsDarkMode(isPreferredColorScheme("dark"))
    }, [window.matchMedia("(prefers-color-scheme: dark)"), localStorage.getItem("preferred-color-scheme")]);

    return [isDarkMode, toggleColorScheme];
}

export function useLightMode(): [boolean, ()=>void ] {
    const [isLightMode, setIsLightMode] = useState(true);
    const toggleColorScheme = ()=>{
        const newValue = isLightMode ? "dark" : "light";
        setIsLightMode(!isLightMode);
        localStorage.setItem("preferred-color-scheme", newValue);
    }

    useEffect(() => {
        setIsLightMode(isPreferredColorScheme("light"))
    }, [window.matchMedia("(prefers-color-scheme: light)"), localStorage.getItem("preferred-color-scheme")]);


    return [isLightMode, toggleColorScheme];
}

function isPreferredColorScheme(value: string) {
    return localStorage.getItem("preferred-color-scheme") ?
        localStorage.getItem("preferred-color-scheme") == value :
        window.matchMedia(`(prefers-color-scheme: ${value})`).matches
}