import Image from "next/image";
import css from "styled-jsx/css";
import TruncateMarkup from "react-truncate-markup";
import { useState } from "react";
import { nanoid } from "nanoid";
import { MdDownloadForOffline } from "react-icons/md";

const VideoFormats = ({ video, setVideoFormats, downloadFile }) => {
  const [format, setFormat] = useState("mp4");

  const handleContainerClick = (e) => {
    if (e.target.getAttribute("container")) {
      setVideoFormats(null);
    }
  };

  return (
    <div container="true" className="container" onClick={handleContainerClick}>
      <div className="content">
        <div className="image">
          <Image
            alt={video.videoDetails.title}
            src={video.videoDetails.thumbnail}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <TruncateMarkup lines={1}>
          <h4 className="title">{video.videoDetails.title}</h4>
        </TruncateMarkup>
        <div className="btns">
          <button onClick={() => setFormat("mp4")}>mp4</button>
          {!!video.formats["webm"].length && (
            <button onClick={() => setFormat("webm")}>webm</button>
          )}
          <button onClick={() => setFormat("mp3")}>mp3</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th className="th">
                {format == "mp3" ? "File type" : "Resolution"}
              </th>
              <th className="th">File Size</th>
              <th className="th">Download</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {format !== "mp3" &&
              video.formats[format].map((vid) => (
                <tr key={nanoid()}>
                  <td className="td">
                    {vid.res} (.{format})
                  </td>
                  <td className="td">{vid.size}</td>
                  <td className="td">
                    <span
                      className="btnd"
                      onClick={() => downloadFile(vid.itag, format)}
                    >
                      <MdDownloadForOffline size={18} />
                      <span>download</span>
                    </span>
                  </td>
                </tr>
              ))}
            {format == "mp3" && (
              <tr>
                <td className="td">.mp3</td>
                <td className="td">{video.formats["mp3"].size}</td>
                <td className="td">
                  <span
                    className="btnd"
                    onClick={() =>
                      downloadFile(video.formats["mp3"].itag, format)
                    }
                  >
                    <MdDownloadForOffline size={18} />
                    <span>download</span>
                  </span>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default VideoFormats;

const styles = css`
  .container {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    min-height: 100vh;
    top: 0;
    left: 0;
    position: fixed;
    z-index: 2000;
  }

  .content {
    width: 90%;
    max-width: 380px;
    max-height: 98%;
    padding: 0.5rem;
    background-color: #fff;
    border-radius: 10px;
    position: fixed;
    top: 5px;
    left: 50%;
    overflow-y: auto;
    -webkit-animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  .content::-webkit-scrollbar {
    width: 5px;
  }

  .content::-webkit-scrollbar-thumb {
    background-color: darkgrey;
  }

  .image {
    width: 100%;
    height: 180px;
    position: relative;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    overflow: hidden;
  }

  .title {
    margin-bottom: 0.5rem;
    font-size: 18px;
    color: #ea7030;
  }

  .btns {
    display: flex;
    column-gap: 5px;
  }

  .btns button {
    border: none;
    padding: 8px 12px;
    background-color: #337ab7;
    color: #fff;
    border-radius: 4px;
    margin-bottom: 5px;
    font-size: 15px;
    cursor: pointer;
  }

  .table {
    width: 100%;
    border-collapse: collapse;
    overflow: auto;
  }

  .td,
  .th {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
  }

  .th {
    font-size: 17px;
    font-weight: 700;
  }

  .td {
    font-size: 14px;
  }

  .btnd {
    width: max-content;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    text-transform: capitalize;
    border: none;
    margin-inline: auto;
    padding: 2px 6px;
    background-color: #337ab7;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
    letter-spacing: 0.5px;
    font-family: "Roboto Condensed", sans-serif;
    outline: none;
  }

  .btnd:hover {
    opacity: 0.7;
  }

  @media (min-width: 381px) {
    .td {
      font-size: 16px;
    }
    .btnd {
      padding: 0.75rem;
      height: 32px;
    }
  }

  @-webkit-keyframes slide-bottom {
    0% {
      -webkit-transform: translate(-50%, -100%);
      transform: translate(-50%, -100%);
    }
    100% {
      -webkit-transform: translate(-50%, 0);
      transform: translate(-50%, 0);
    }
  }
  @keyframes slide-bottom {
    0% {
      -webkit-transform: translate(-50%, -100%);
      transform: translate(-50%, -100%);
    }
    100% {
      -webkit-transform: translate(-50%, 0);
      transform: translate(-50%, 0);
    }
  }
`;
