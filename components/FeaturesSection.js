import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { FaCheck, FaUserAlt } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { ImMobile } from "react-icons/im";
import { MdHealthAndSafety } from "react-icons/md";
import css from "styled-jsx/css";
import FeatureItem from "./FeatureItem";

const FeaturesSection = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const feature__items = [
    {
      title: "unlimited downloads",
      text: "We offer unlimited downloads of youtube videos in mp4, webm and mp3 format.",
      image: <HiOutlineDownload size={48} />,
    },
    {
      title: "playlist download",
      text: "Our site can be used to download and search for any playlist on youtube",
      image: <HiOutlineDownload size={48} />,
    },
    {
      title: "no registration required",
      text: "You don't need to register to convert and download youtube videos in mp4, webm and mp3 format.",
      image: <FaUserAlt size={48} />,
    },
    {
      title: "browser compatibility",
      text: "Our web app is fully compatible with the latest browsers like Chrome, Firefox, Safari, Microsoft Edge, etc.",
      image: <FaCheck size={48} />,
    },
    {
      title: "completely mobile friendly",
      text: "Our site can be used on any device to download your favorite youtube videos in mp4, webm and mp3 format.",
      image: <ImMobile size={48} />,
    },
    {
      title: "100% safe",
      text: "Our site does not collect or ask for any personal information. The downloaded file is free of viruses.",
      image: <MdHealthAndSafety size={48} />,
    },
  ];

  return (
    <section className="container" data-theme={resolvedTheme}>
      <div className="content">
        <h2 className="title">youtube downloader features</h2>

        <div className="feature__items">
          {feature__items.map((feature_item, i) => (
            <FeatureItem
              key={i}
              title={feature_item.title}
              text={feature_item.text}
              image={feature_item.image}
            />
          ))}
        </div>
      </div>
      <style jsx>{styles}</style>
    </section>
  );
};

export default FeaturesSection;

const styles = css`
  .container {
    padding-block: 3rem;
    background-color: #ebeced;
    color: #555;
  }

  .container[data-theme="dark"] {
    background-color: #0e1525;
    color: #c2c8cc;
  }

  .content {
    width: 90%;
    max-width: 1024px;
    margin: 0 auto;
  }

  .feature__items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 1rem;
    row-gap: 2rem;
  }

  .title {
    text-align: center;
    font-size: 24px;
    text-transform: capitalize;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 400;
    margin-bottom: 1rem;
  }

  .container[data-theme="light"] .title {
    color: #555;
  }

  @media (min-width: 600px) {
    .title {
      font-size: 32px;
    }
  }
`;
