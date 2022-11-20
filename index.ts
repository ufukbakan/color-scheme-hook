import { useEffect, useState } from "react";

export function useDarkMode(): [boolean, () => void, () => void] {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const [isDarkMode, setIsDarkMode] = useState(mql.matches);

    const toggleColorScheme = () => {
        const newValue = isDarkMode ? "light" : "dark";
        setIsDarkMode(!isDarkMode);
        localStorage.setItem("preferred-color-scheme", newValue);
    }

    const resetPreference = () => {
        localStorage.removeItem("preferred-color-scheme");
        setIsDarkMode(isPreferredColorScheme("dark"));
    }

    const eventListener = () => {
        setIsDarkMode(isPreferredColorScheme("dark"));
    }

    useEffect(() => {
        mql.removeEventListener("change", eventListener);
        mql.addEventListener("change", eventListener);
    }, []);

    return [isDarkMode, toggleColorScheme, resetPreference];
}

export function useLightMode(): [boolean, () => void, () => void] {
    const mql = window.matchMedia("(prefers-color-scheme: light)");
    const [isLightMode, setIsLightMode] = useState(mql.matches);

    const toggleColorScheme = () => {
        const newValue = isLightMode ? "dark" : "light";
        setIsLightMode(!isLightMode);
        localStorage.setItem("preferred-color-scheme", newValue);
    }

    const resetPreference = () => {
        localStorage.removeItem("preferred-color-scheme");
        setIsLightMode(isPreferredColorScheme("light"));
    }

    const eventListener = () => {
        setIsLightMode(isPreferredColorScheme("light"));
    }

    useEffect(() => {
        mql.removeEventListener("change", eventListener);
        mql.addEventListener("change", eventListener);
    }, []);

    return [isLightMode, toggleColorScheme, resetPreference];
}

function isPreferredColorScheme(value: string) {
    return localStorage.getItem("preferred-color-scheme") ?
        localStorage.getItem("preferred-color-scheme") == value :
        window.matchMedia(`(prefers-color-scheme: ${value})`).matches
}