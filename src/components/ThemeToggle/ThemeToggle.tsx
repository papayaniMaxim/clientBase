import useTheme from "../../hooks/useTheme";

export function ThemeToggle(props: { className?: string }) {
    const { theme, toggleTheme } = useTheme();
  return (
    <button className={props.className} onClick={toggleTheme}>
      {theme === "dark" ? "Dark" : "Light"}
    </button>
  );
}

export default ThemeToggle;
