import css from "styled-jsx/css";
import Image from "next/image";
import TruncateMarkup from "react-truncate-markup";
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineNumber } from "react-icons/ai";
import { HiArrowLongRight } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const SearchedPlaylist = ({ playlist }) => {
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
        <div className="image">
          <Image
            src={playlist.thumbnail}
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            style={{ objectFit: "cover" }}
            alt={playlist.title}
          />
        </div>
        <div className="info">
          <TruncateMarkup lines={1}>
            <h4 className="title">{playlist.title}</h4>
          </TruncateMarkup>
          <div className="vid__info" style={{ marginBottom: "5px" }}>
            <MdAccountCircle size={24} color="#184772" />
            <TruncateMarkup lines={1}>
              <span>{playlist.author.name}</span>
            </TruncateMarkup>
          </div>
          <div className="vid__info" style={{ marginBottom: "5px" }}>
            <AiOutlineNumber size={24} color="#184772" />
            <span>{playlist.videoCount} videos</span>
          </div>
        </div>
        <button
          className="btn"
          onClick={() => window.open(`/playlist/${playlist.listId}`, "_blank")}
        >
          <HiArrowLongRight size={24} />
          <span>download</span>
        </button>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default SearchedPlaylist;

const styles = css`
  .container {
    background: #f0f1f2;
    border-radius: 10px;
    overflow: hidden;
    padding: 0.5rem;
    border: 1px solid #d2d4d6;
  }

  .container[data-theme="dark"] {
    background: radial-gradient(100% 100% at 0% 0%, #212839 0%, #1c2333 100%);
    border: 1px solid #2b3245;
  }
  .image {
    width: 100%;
    height: 180px;
    position: relative;
    margin-bottom: 5px;
    border-radius: 6px;
    overflow: hidden;
    margin-bottom: 10px;
  }

  .vid__info {
    display: flex;
    font-size: 15px;
    gap: 5px;
    align-items: center;
  }

  .title {
    font-size: 16px;
    color: #ea7030;
    margin-bottom: 8px;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 100%;
    height: 35px;
    border: none;
    border-radius: 1rem;
    cursor: pointer;
    background-color: #184772;
    color: #fff;
    padding: 5px 10px;
    text-transform: capitalize;
    font-size: 15px;
    font-weight: bold;
    transition: background-color 0.25s ease-out;
    margin-top: 10px;
    font-family: "Roboto Condensed", sans-serif;

    outline: none;
  }
  .btn:hover {
    opacity: 0.7;
  }
`;
