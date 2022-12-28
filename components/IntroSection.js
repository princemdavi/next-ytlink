import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import css from "styled-jsx/css";

const IntroSection = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="container" data-theme={resolvedTheme}>
      <div className="content">
        <h2 className="title">best youtube video downloader</h2>
        <div className="texts">
          <p className="text">
            Ylink is the best, fast and free Youtube downloader that allows you
            to download Youtube videos in high quality. Ytlink downloader allows
            you to download Youtube videos in any web browser without the
            installation of any software. The only thing needed to download
            videos from youtube is a web browser such as chrome, opera, safari
            e.t.c and internet connection.
          </p>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default IntroSection;

const styles = css`
  .container {
    padding-block: 5rem;
  }

  .container[data-theme="dark"] {
    background-color: hsl(209, 74%, 12%);
  }

  .content {
    width: 90%;
    max-width: 1024px;
    margin: 0 auto;
  }
  .title {
    text-align: center;
    text-transform: capitalize;
    font-size: 24px;
    margin-bottom: 1rem;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 400;
    color: #555;
  }

  .texts {
    text-align: center;
    line-height: 2.1;
    color: #555;
  }

  .container[data-theme="dark"] .title {
    color: #c2c8cc;
  }

  .container[data-theme="dark"] .texts {
    color: #c2c8cc;
  }

  @media (min-width: 600px) {
    .title {
      font-size: 32px;
    }
  }
`;
