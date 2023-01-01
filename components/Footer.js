import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { RxCaretUp } from "react-icons/rx";
import css from "styled-jsx/css";
import { useWindowScroll } from "react-use";
import useStore from "../store";

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  const { y } = useWindowScroll();

  useEffect(() => {
    !mounted && setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="container" data-theme={resolvedTheme}>
      <div className="content">
        <div className="footer__menu">
          <Link href="/contact" className="link">
            Contact
          </Link>
          <Link href="/about" className="link">
            About
          </Link>

          <Link href="/faqs" className="link">
            FAQs
          </Link>

          <Link href="/terms" className="link">
            Terms of Use
          </Link>

          <Link href="/privacy_policy" className="link">
            Privacy Policy
          </Link>

          <Link href="/terms" className="link">
            Copyright
          </Link>
        </div>
        <p className="copyright">&copy;2022 ytlink. All Rights Reserved.</p>
      </div>
      {y > 350 && (
        <button className="scroll__btn" onClick={() => scroll.scrollToTop()}>
          <RxCaretUp size={36} />
        </button>
      )}
      {/* styles */}
      <style jsx>{styles}</style>
    </div>
  );
};

export default Footer;

const styles = css`
  .container {
    height: 170px;
    margin-top: auto;
    color: #555;
    border-top: 1px solid #d2d4d6;
  }

  .container[data-theme="dark"] {
    background-color: hsl(209, 74%, 12%);
    color: #c2c8cc;
    border: unset;
  }

  .content {
    width: 90%;
    height: 100%;
    max-width: 920px;
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }

  .footer__menu {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .footer__menu .divider {
    border-left: 1px solid #fff;
  }

  .footer__menu .link {
    display: inline-block;
    position: relative;
    margin: 0 15px;
    font-size: 15px;
    cursor: pointer;
    color: inherit;
  }

  .footer__menu .link::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #0087ca;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .footer__menu .link:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  .copyright {
    font-size: 13px;
  }

  .scroll__btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 50;
    background-color: #0086e7;
    color: #fff;
  }
`;
