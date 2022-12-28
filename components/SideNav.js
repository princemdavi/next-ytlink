import Link from "next/link";
import css from "styled-jsx/css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const SideNav = ({ setShowSideNav }) => {
  const [mounted, setMounted] = useState(false);

  const router = useRouter();

  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="container" data-theme={resolvedTheme}>
      <ul className="links">
        <span className="link">
          <Link href="/" style={{ color: router.pathname == "/" && "#0086e7" }}>
            single download
          </Link>
        </span>
        <span className="link">
          <Link
            href="/playlist"
            style={{ color: router.pathname == "/playlist" && "#0086e7" }}
          >
            playlist download
          </Link>
        </span>
        <span className="link">
          <Link
            href="/instrument_vocals"
            style={{
              color: router.pathname == "/instrument_vocals" && "#0086e7",
            }}
          >
            download instrument & vocals
          </Link>
        </span>
        <span className="link">
          <Link
            href="/howtouse"
            style={{ color: router.pathname == "/howtouse" && "#0086e7" }}
          >
            how to use
          </Link>
        </span>
      </ul>
      <style jsx>{styles}</style>
    </div>
  );
};

export default SideNav;

const styles = css`
  .container {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 60px;
    right: 0;
    z-index: 1000;
    padding: 0.5rem 0.7rem;
    background-color: #ebeced;
    box-shadow: 0 1px 0.625rem 0 hsla(210, 7%, 22%, 0.06),
      0 0.125rem 0.25rem 0 hsla(210, 7%, 22%, 0.08);
    -webkit-animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  .container[data-theme="dark"] {
    background-color: #09233c;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 90%;
    max-width: 1024px;
    margin: 0 auto;
  }

  .link {
    display: block;
    cursor: pointer;
    font-size: 16px;
    text-transform: capitalize;
    font-family: "Roboto Condensed", sans-serif;
    letter-spacing: 0.75px;
  }

  .link:hover {
    color: #0086e7;
  }

  @media (min-width: 780px) {
    .container {
      display: none;
    }
  }

  @-webkit-keyframes slide-left {
    0% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  @keyframes slide-left {
    0% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
`;
