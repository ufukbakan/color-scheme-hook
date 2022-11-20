<center>
    <h1 align="center"> use-dark-mode-hook </h1>
    <img style="display: inline-block" src="coverage/badge-functions.svg">
    <img style="display: inline-block" src="coverage/badge-lines.svg">
    <img style="display: inline-block" src="coverage/badge-statements.svg">
    <p>Returns the system's preferred scheme by default. It's going to be overridden when toggled.</p>
    <br/>
</center>

## Installation
```bash
npm install use-dark-mode-hook
```

## Usage
```jsx
import { useDarkMode, useLightMode } from "use-dark-mode-hook";

export default function MyReactComponent(){
    const [isDarkMode, toggleColorScheme] = useDarkMode();  
    const [isLightMode, toggleColorScheme] = useLightMode();
}
```