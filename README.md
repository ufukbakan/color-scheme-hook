<center>
    <h1 align="center">color-scheme-hook</h1>
    <p align="center">
        <img style="display: inline-block" src="https://github.com/ufukbakan/color-scheme-hook/raw/main/coverage/badge-functions.svg">
        <img style="display: inline-block" src="https://github.com/ufukbakan/color-scheme-hook/raw/main/coverage/badge-lines.svg">
        <img style="display: inline-block" src="https://github.com/ufukbakan/color-scheme-hook/raw/main/coverage/badge-statements.svg">
    </p>
    <p>Returns the system's preferred scheme by default. It's going to be overridden when toggled.</p>
</center>

## Installation
```bash
npm install color-scheme-hook
```

## Usage
```jsx
import { useDarkMode, useLightMode } from "color-scheme-hook";

export default function MyReactComponent(){
    const [isDarkMode, toggleColorScheme, resetPreference] = useDarkMode();  
    const [isLightMode, toggleColorScheme, resetPreference] = useLightMode();
}
```