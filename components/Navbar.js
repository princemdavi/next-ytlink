import Link from "next/link";
import Image from "next/image";
import css from "styled-jsx/css";
import { FaBars } from "react-icons/fa";
import { useRouter } from "next/router";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import logo from "../public/logo.png";
import { MdClose } from "react-icons/md";
import styled from "styled-components";

const Navbar = ({ setShowSideNav, showSideNav }) => {
  const router = useRouter();

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
        <Link href="/">
          <div className="brand">
            {/* <div className="logo">
                <Image
                  src={logo}
                  objectFit="cover"
                  layout="fill"
                  priority
                  alt="logo"
                />
              </div> */}
            <span>ytlink</span>
          </div>
        </Link>
        <ul className="links">
          <Link
            href="/"
            passHref
            legacyBehavior
            style={{
              color:
                resolvedTheme == "dark" || router.pathname == "/"
                  ? "#fff"
                  : "#555",
              backgroundColor: router.pathname == "/" ? "#0086E7" : "",
            }}
          >
            <StyledLink>single</StyledLink>
          </Link>
          <Link
            href="/playlist"
            passHref
            legacyBehavior
            style={{
              color:
                resolvedTheme == "dark" || router.pathname == "/playlist"
                  ? "#fff"
                  : "#555",

              backgroundColor: router.pathname == "/playlist" ? "#0086E7" : "",
            }}
          >
            <StyledLink>playlist</StyledLink>
          </Link>
          <Link
            href="/instrument_vocals"
            passHref
            legacyBehavior
            style={{
              color:
                resolvedTheme == "dark" ||
                router.pathname == "/instrument_vocals"
                  ? "#fff"
                  : "#555",

              backgroundColor:
                router.pathname == "/instrument_vocals" ? "#0086E7" : "",
            }}
          >
            <StyledLink>instrument & vocals</StyledLink>
          </Link>
          <Link
            href="/howtouse"
            passHref
            legacyBehavior
            style={{
              color:
                resolvedTheme == "dark" || router.pathname == "/howtouse"
                  ? "#fff"
                  : "#555",
              backgroundColor: router.pathname == "/howtouse" ? "#0086E7" : "",
            }}
          >
            <StyledLink>how to use</StyledLink>
          </Link>
        </ul>
        <div style={{ display: "flex" }}>
          <ThemeSwitcher />
          <div className="menu">
            {!showSideNav && (
              <FaBars
                color="#0086E7"
                size={24}
                onClick={() => setShowSideNav(!showSideNav)}
              />
            )}
            {showSideNav && (
              <MdClose
                color="#0086E7"
                size={31}
                onClick={() => setShowSideNav(!showSideNav)}
              />
            )}
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default Navbar;

const StyledLink = styled.a`
  display: inline-block;
  font-family: "Roboto Condensed", sans-serif;
  cursor: pointer;
  font-size: 20px;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  border-radius: 6px;
  padding: 2px 10px;

  &:hover {
    border: 1px solid #0086e7;
  }
`;

const styles = css`
  .container {
    position: sticky;
    top: 0;
    z-index: 50;
    background-color: #fff;
    border-bottom: 1px solid #d2d4d6;
  }
  .container[data-theme="dark"] {
    background-color: hsl(209, 74%, 12%);
    border: unset;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    width: 90%;
    max-width: 1024px;
    margin: 0 auto;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .logo {
    position: relative;
    width: 40px;
    height: 40px;
  }

  .brand > span {
    font-size: 28px;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: bold;
    padding-inline: 8px;
    border-radius: 4px;
    color: #0086e7;
  }

  .links {
    display: none;
    align-items: center;
    margin-left: auto;
  }

  .menu {
    display: grid;
    place-items: center;
    cursor: pointer;
    margin-left: 5px;
  }

  @media (min-width: 780px) {
    .links {
      display: flex;
    }

    .menu {
      display: none;
    }
  }
`;
