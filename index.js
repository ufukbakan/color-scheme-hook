const { useEffect, useState } = require("react");

export function useDarkMode() {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const [isDarkMode, setIsDarkMode] = useState(isPreferredColorScheme("dark"));

    function toggleColorScheme() {
        const newValue = isDarkMode ? "light" : "dark";
        setIsDarkMode(!isDarkMode);
        localStorage.setItem("preferred-color-scheme", newValue);
    }

    function resetPreference() {
        localStorage.removeItem("preferred-color-scheme");
        setIsDarkMode(isPreferredColorScheme("dark"));
    }

    const eventListener = () => {
        setIsDarkMode(isPreferredColorScheme("dark"));
    }

    useEffect(() => {
        mql.addEventListener("change", eventListener);
        return () => mql.removeEventListener("change", eventListener);
    }, []);

    return [isDarkMode, toggleColorScheme, resetPreference];
}

export function useLightMode() {
    const mql = window.matchMedia("(prefers-color-scheme: light)");
    const [isLightMode, setIsLightMode] = useState(isPreferredColorScheme("light"));

    function toggleColorScheme() {
        const newValue = isLightMode ? "dark" : "light";
        setIsLightMode(!isLightMode);
        localStorage.setItem("preferred-color-scheme", newValue);
    }

    function resetPreference() {
        localStorage.removeItem("preferred-color-scheme");
        setIsLightMode(isPreferredColorScheme("light"));
    }

    const eventListener = () => {
        setIsLightMode(isPreferredColorScheme("light"));
    }

    useEffect(() => {
        mql.addEventListener("change", eventListener);
        return () => mql.removeEventListener("change", eventListener);
    }, []);

    return [isLightMode, toggleColorScheme, resetPreference];
}

function isPreferredColorScheme(value) {
    return localStorage.getItem("preferred-color-scheme") ?
        localStorage.getItem("preferred-color-scheme") == value :
        window.matchMedia(`(prefers-color-scheme: ${value})`).matches
}