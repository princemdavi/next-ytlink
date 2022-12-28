import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { HiLightBulb } from "react-icons/hi";
import { IoMdMoon } from "react-icons/io";
import css from "styled-jsx/css";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={(e) => setTheme(resolvedTheme == "dark" ? "light" : "dark")}
      className="btn"
    >
      {resolvedTheme == "dark" ? (
        <HiLightBulb size={24} />
      ) : (
        <IoMdMoon size={24} />
      )}
      <style jsx>{styles}</style>
    </button>
  );
};

export default ThemeSwitcher;

const styles = css`
  .btn {
    display: inline-block;
    cursor: pointer;
    background-color: transparent;
    border: none;
    margin: 0 10px;
  }
`;
