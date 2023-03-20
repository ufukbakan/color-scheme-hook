const { useEffect, useState } = require("react");

function useDarkMode() {
    const mql = global.window?.matchMedia("(prefers-color-scheme: dark)");
    const [isDarkMode, setIsDarkMode] = useState(isPreferredColorScheme("dark"));

    function toggleColorScheme() {
        const newValue = isDarkMode ? "light" : "dark";
        setIsDarkMode(!isDarkMode);
        global.localstorage?.setItem("preferred-color-scheme", newValue);
    }

    function resetPreference() {
        global.localstorage?.removeItem("preferred-color-scheme");
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

function useLightMode() {
    const mql = global.window?.matchMedia("(prefers-color-scheme: light)");
    const [isLightMode, setIsLightMode] = useState(isPreferredColorScheme("light"));

    function toggleColorScheme() {
        const newValue = isLightMode ? "dark" : "light";
        setIsLightMode(!isLightMode);
        global.localstorage?.setItem("preferred-color-scheme", newValue);
    }

    function resetPreference() {
        global.localstorage?.removeItem("preferred-color-scheme");
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
    return global.localstorage?.getItem("preferred-color-scheme") ?
        global.localstorage?.getItem("preferred-color-scheme") == value :
        global.window?.matchMedia(`(prefers-color-scheme: ${value})`).matches
}

module.exports = {
    useDarkMode,
    useLightMode
}