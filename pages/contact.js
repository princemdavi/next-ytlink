import React, { useState } from "react";
import Link from "next/link";
import css from "styled-jsx/css";
import { Footer, Navbar, SideNav } from "../components";

const ContactUs = () => {
  const [showSideNav, setShowSideNav] = useState(false);

  return (
    <div className="container">
      <Navbar setShowSideNav={setShowSideNav} showSideNav={showSideNav} />
      {showSideNav && <SideNav />}
      <div className="content">
        <h2 className="title">Contact Us</h2>
        <p>
          For support, advertising and all other enquiries, please contact us
          at:
        </p>
        <Link href="mailto:ytlinkddr@gmail.com">
          <a className="link">ytlinkddr@gmail.com</a>
        </Link>
      </div>
      <Footer />
      <style jsx>{styles}</style>
    </div>
  );
};

export default ContactUs;

const styles = css`
  .container {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  .content {
    width: 90%;
    max-width: 1024px;
    margin: 0 auto;
    padding-block: 2rem;
  }

  .title {
    border-bottom: 2px dotted #000;
    margin-bottom: 10px;
    padding-bottom: 0.5rem;
  }

  .content p:first-of-type {
    font-size: 20px;
  }

  .content p:last-of-type {
  }

  .link {
    display: inline-block;
    color: #000;
    margin-top: 7px;
  }
  .link:hover {
    text-decoration: underline;
  }
`;
