import { act, renderHook } from '@testing-library/react-hooks'
import { useDarkMode, useLightMode } from "..";

function setLightMode() {
    Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: (query: string) => {
            return {
                matches: query.includes("light")
            }
        }
    });
}

function setDarkMode() {
    Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: (query: string) => {
            return {
                matches: query.includes("dark")
            }
        }
    });
}

test("Light mode test", () => {
    setLightMode();

    const darkModeHook = renderHook(() => useDarkMode())
    const lightModeHook = renderHook(() => useLightMode())

    const [isDarkMode, toggleColorScheme] = darkModeHook.result.current;
    const [isLightMode, _] = lightModeHook.result.current;

    expect(isDarkMode).toEqual(false);
    expect(isLightMode).toEqual(true);

    act(() => toggleColorScheme());
    
    setTimeout(() => {
        expect(isDarkMode).toEqual(true);
        expect(isLightMode).toEqual(false);
    }, 1000);
});

test("Dark mode test", () => {
    setDarkMode();

    const darkModeHook = renderHook(() => useDarkMode())
    const lightModeHook = renderHook(() => useLightMode())

    const [isDarkMode, _] = darkModeHook.result.current;
    const [isLightMode, toggleColorScheme] = lightModeHook.result.current;

    expect(isDarkMode).toEqual(true);
    expect(isLightMode).toEqual(false);

    act(() => toggleColorScheme());

    setTimeout(() => {
        expect(isDarkMode).toEqual(false);
        expect(isLightMode).toEqual(true);
    }, 1000);
});