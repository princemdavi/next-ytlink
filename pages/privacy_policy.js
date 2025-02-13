import { useState } from "react";
import css from "styled-jsx/css";

const PrivacyPoicy = () => {
  return (
    <div className="container">
      <div className="content">
        <h2 className="title">Privacy Policy</h2>
        <h3 className="subtitle">1. Logging IP Addresses</h3>
        <p className="text">
          Our different processes do not require us to know your IP so we do not
          log and do not collect any IP addresses.
        </p>
        <h3 className="subtitle">2. How we use cookies</h3>
        <p className="text">
          A cookie is a small file which asks permission to be placed on your
          computer&apos;s hard drive . Once you agree, the file is added and the
          cookie helps analyse web traffic or lets you know when you visit a
          particular site . Cookies allow web applications to respond to you as
          an individual . The web application can tailor its operations to your
          needs, likes and dislikes by gathering and remembering information
          about your preferences . We use traffic log cookies to identify which
          pages are being used . This helps us analyse data about webpage
          traffic and improve our website in order to tailor it to customer
          needs . We only use this information for statistical analysis purposes
          and then the data is removed from the system . Overall, cookies help
          us provide you with a better website by enabling us to monitor which
          pages you find useful and which you do not . A cookie in no way gives
          us access to your computer or any information about you, other than
          the data you choose to share with us . You can choose to accept or
          decline cookies . Most web browsers automatically accept cookies, but
          you can usually modify your browser setting to decline cookies if you
          prefer . This may prevent you from taking full advantage of the
          website .
        </p>
        <h3 className="subtitle">3. Advertising</h3>
        <p className="text">
          We use third-party advertising companies to serve ads when you visit
          our website . These companies may use information (not including your
          name, address, e - mail address or telephone number) about your visits
          to this and other websites in order to provide advertisements on this
          site and other sites about goods and services that may be of interest
          to you .
        </p>
        <h3 className="subtitle">4. Links to other websites</h3>
        <p className="text">
          ytink may contain links to other websites of interest . However, once
          you have used these links to leave our site, you should note that we
          do not have any control over that other website . Therefore, we cannot
          be responsible for the protection and privacy of any information which
          you provide whilst visiting such sites and such sites are not governed
          by this privacy statement . You should exercise caution and look at
          the privacy statement applicable to the website in question .
        </p>
        <h3 className="subtitle">5. Collected Information</h3>
        <p className="text">
          ytink respects the privacy of its users and does not collect any
          personal information about its users .
        </p>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default PrivacyPoicy;

const styles = css`
  .content {
    width: 90%;
    max-width: 1024px;
    margin: 0 auto;
    padding-block: 2rem;
  }
  .title {
    font-size: 36px;
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 2rem;
    text-decoration: underline;
  }

  .subtitle {
    margin-block: 0.5rem;
    font-size: 22px;
  }

  .text {
    margin-bottom: 0.5rem;
    font-size: 16px;
    line-height: 2.3;
  }
`;
