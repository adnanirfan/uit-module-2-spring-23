## React with Context API Example

This is an example of a React component that uses the Context API.

```jsx
import React, { createContext, useContext, useState } from "react";

// Create a new context object
const ThemeContext = createContext();

// A component that provides the context data
function ThemeProvider(props) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

// A custom hook that allows components to access the context data
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// A component that consumes the context data
function MyComponent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

// A component that renders the entire app
function App() {
  return (
    <ThemeProvider>
      <MyComponent />
    </ThemeProvider>
  );
}

export default App;
```

This code defines a `ThemeContext` object using the `createContext` function. The `ThemeProvider` component provides the context data by setting the value of `ThemeContext.Provider` to an object with a theme property and a `toggleTheme` function. The `useTheme` hook allows other components to access the context data, and the `MyComponent` component demonstrates how to use the `useTheme` hook to toggle the theme.

When the `toggleTheme` function is called, it updates the state of the theme property, which causes any components that use the `useTheme` hook to re-render with the new theme.

Overall, this code demonstrates how to use the Context API in React to share data and functionality across multiple components in a simple and scalable way.
