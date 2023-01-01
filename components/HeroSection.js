import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import css from "styled-jsx/css";
import { SearchInput } from ".";

const HeroSection = ({
  setVideoDetails,
  setSongDetails,
  setSearchedVideos,
  format,
  playlist,
  setPlaylist,
  setSearchedPlaylists,
  setVideoSearching,
  setGettingSongDetails,
  setGettingVideoDetails,
  setSearchingPlaylists,
}) => {
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
        <p className="title">Youtube downloader</p>
        <p className="subtitle">
          The best, fast and reliable youtube{" "}
          {playlist ? "playlist" : format == "mp3" ? "audio" : "video"}{" "}
          downloader
        </p>
        <div className="search">
          <SearchInput
            setVideoDetails={setVideoDetails}
            setSongDetails={setSongDetails}
            setSearchedVideos={setSearchedVideos}
            format={format}
            playlist={playlist}
            setPlaylist={setPlaylist}
            setSearchedPlaylists={setSearchedPlaylists}
            setSearchingPlaylists={setSearchingPlaylists}
            setVideoSearching={setVideoSearching}
            setGettingSongDetails={setGettingSongDetails}
            setGettingVideoDetails={setGettingVideoDetails}
          />
        </div>
        <p className="terms">
          By using our service you are accepting our{" "}
          <span className="terms__link">
            <Link href="/terms">Terms of Use.</Link>
          </span>
        </p>
      </div>

      <style jsx>{styles}</style>
    </div>
  );
};

export default HeroSection;

const styles = css`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 320px;
  }

  .container[data-theme="dark"] {
    background-color: #09233c;
  }

  .content {
    width: 90%;
    max-width: 1024px;
    margin: 0 auto;
    padding-block: 1.5rem;
    border-radius: 8px;
  }

  .container[data-theme="dark"] .content {
    box-shadow: unset;
  }

  .title {
    margin-bottom: 0.5rem;
    text-align: center;
    text-transform: capitalize;
    font-size: 32px;
    color: #0086e7;
    font-family: "Roboto Condensed", sans-serif;
  }

  .subtitle {
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 18px;
    letter-spacing: 0.5px;
    font-family: "Roboto Condensed", sans-serif;
    color: #555;
  }

  .container[data-theme="dark"] .subtitle {
    color: #c2c8cc;
  }

  .search {
    max-width: 700px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 1.5rem;
  }

  .terms {
    text-align: center;
    font-size: 14px;
  }

  .container[data-theme="dark"] .terms {
    color: #c2c8cc;
  }

  .terms__link {
    color: #0086e7;
  }

  .terms__link:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (min-width: 481px) {
    .title {
      font-size: 3em;
    }

    .subtitle {
      font-size: 20px;
    }
  }

  @media (min-width: 1024px) {
    .container {
      min-height: 360px;
    }
  }
`;
