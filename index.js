const { useEffect, useState } = require("react");

function initGlobal() {
    let newGlobal = { window: undefined, localStorage: undefined };
    if(typeof global !== "undefined"){
        newGlobal = global;
    }
    if (typeof window !== "undefined" && typeof newGlobal.window === "undefined") {
        newGlobal.window = window ?? undefined;
        newGlobal.localStorage = window.localStorage ?? undefined;
    }
    return newGlobal;
}


function useDarkMode() {
    var global = initGlobal();
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
    var global = initGlobal();
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
    var global = initGlobal();
    return global.localstorage?.getItem("preferred-color-scheme") ?
        global.localstorage?.getItem("preferred-color-scheme") == value :
        global.window?.matchMedia(`(prefers-color-scheme: ${value})`).matches
}

module.exports = {
    useDarkMode,
    useLightMode
}