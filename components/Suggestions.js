import { nanoid } from "nanoid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import css from "styled-jsx/css";

const Suggestions = ({ suggestions, handleSuggestionSelected }) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleClick = (e) => {
    let data = e.target.getAttribute("data-text");
    handleSuggestionSelected(data);
  };
  return (
    <div className="container" data-theme={resolvedTheme}>
      {suggestions.map((suggestion) => (
        <div
          data-text={suggestion}
          key={nanoid()}
          className="suggestion"
          onClick={handleClick}
          data-theme={resolvedTheme}
        >
          {suggestion}
        </div>
      ))}
      <style jsx>{styles}</style>
    </div>
  );
};

export default Suggestions;

const styles = css`
  .container {
    max-height: 230px;
    overflow-y: auto;
    padding-block: 0.65rem;
    width: 100%;
    position: absolute;
    top: 5.5rem;
    left: 0;
    z-index: 999;
    box-shadow: 0 4px 6px 0 rgb(32 33 36 / 28%);
    background-color: #fff;
    border-radius: 4px;
  }

  .container[data-theme="dark"] {
    background-color: hsl(209, 65%, 25%);
  }

  .container::-webkit-scrollbar {
    width: 5px;
  }

  .container::-webkit-scrollbar-thumb {
    background-color: darkgrey;
  }

  .suggestion {
    padding: 0.35rem 0.75rem;
  }

  .suggestion:hover {
    background-color: lightgrey;
  }

  .suggestion[data-theme="dark"]:hover {
    background: #09233c;
    color: #fff;
  }

  @media (min-width: 481px) {
    .container {
      top: 3.7rem;
    }
  }
`;
