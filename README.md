<center>
    <h1> use-dark-mode-hook </h1>
    <img src="coverage/badge-functions.svg">
    <img src="coverage/badge-lines.svg">
    <img src="coverage/badge-statements.svg">
    <p>Returns the system's preferred scheme by default. It's going to be overridden when toggled.</p>
    <br/>
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