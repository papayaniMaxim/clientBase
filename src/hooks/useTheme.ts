import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (body != null) {
      if (theme === "light") {
        body.classList.remove("dark-mode");
      } else {
        body.classList.add("dark-mode");
      }
    }
  }, [theme]);

    return { theme, toggleTheme };
};

export default useTheme;
