import Image from "next/image";
import { useEffect, useState } from "react";
import { FiPlayCircle } from "react-icons/fi";
import { MdAccountCircle, MdDownloadForOffline } from "react-icons/md";
import { AiFillClockCircle, AiTwotoneCalendar } from "react-icons/ai";
import { HiPlay } from "react-icons/hi";
import { GiBrassEye } from "react-icons/gi";
import axios from "axios";
import TruncateMarkup from "react-truncate-markup";
import css from "styled-jsx/css";
import { AudioPlayer, VideoPLayer } from ".";
import { useTheme } from "next-themes";

const SearchedVideo = ({ video }) => {
  const [audioId, setAudioId] = useState(null);
  const [videoStreamUrl, setVideoStreamUrl] = useState(null);

  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const backend_url = "https://ytlinkapi.herokuapp.com";

  const getVideoStreamUrl = async () => {
    try {
      const { data } = await axios.get(
        `${backend_url}/stream/video/${video.videoId}`
      );
      setVideoStreamUrl(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container" data-theme={resolvedTheme}>
      <div className="image">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          style={{ objectFit: "cover" }}
        />
        <FiPlayCircle
          size={40}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            cursor: "pointer",
            zIndex: 2,
          }}
          color="#fff"
          onClick={getVideoStreamUrl}
        />
      </div>

      <div className="content">
        <TruncateMarkup lines={1}>
          <h4 className="title">{video.title}</h4>
        </TruncateMarkup>
        <div className="vid__info">
          <MdAccountCircle size={24} color="#184772" />
          <TruncateMarkup lines={1}>
            <span>{video.author.name}</span>
          </TruncateMarkup>
        </div>
        <div className="vid__info">
          <AiTwotoneCalendar size={24} color="#184772" />
          <TruncateMarkup lines={1}>
            <span>{video.ago || "unknown"}</span>
          </TruncateMarkup>
        </div>
        <div className="vid__info">
          <AiFillClockCircle size={24} color="#184772" />
          <span>{video.timestamp}</span>
        </div>
        <div className="vid__info">
          <GiBrassEye size={24} color="#184772" />
          <span>{video.views}</span>
        </div>
        <div className="buttons">
          <button className="btn" onClick={() => setAudioId(video.videoId)}>
            <HiPlay size={21} />
            <span>play now</span>
          </button>
          <button
            className="btn btn__d"
            onClick={(e) => window.open(`/youtube/${video.videoId}`, "_blank")}
          >
            <MdDownloadForOffline size={18} />
            <span>download</span>
          </button>
        </div>
      </div>
      {/* audio player */}
      {audioId && <AudioPlayer audioId={audioId} setAudioId={setAudioId} />}
      {/* video player */}
      {videoStreamUrl && (
        <VideoPLayer
          videoStreamUrl={videoStreamUrl}
          setVideoStreamUrl={setVideoStreamUrl}
        />
      )}
      <style jsx>{styles}</style>
    </div>
  );
};

export default SearchedVideo;

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
    color: #c2c8cc;
  }

  .container > p {
    margin-bottom: 0.25rem;
  }

  .image {
    width: 100%;
    height: 180px;
    position: relative;
    margin-bottom: 5px;
    border-radius: 8px;
    overflow: hidden;
  }

  .vid__info {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .title {
    margin-bottom: 0.5rem;
    font-size: 18px;
    color: #ea7030;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 400;
  }

  .buttons {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 100%;
    height: 35px;
    border: none;
    border-radius: 2rem;
    cursor: pointer;
    background-color: hsl(250, 54%, 40%);
    color: #fff;
    padding: 5px 10px;
    text-transform: capitalize;
    font-size: 16px;
    outline: none;
    transform: perspective(1px) translateZ(0);
    font-family: "Roboto Condensed", sans-serif;
  }

  .container[data-theme="dark"] .btn {
    color: #fff;
  }

  .btn__d {
    background-color: hsl(209, 70%, 40%);
    color: #fff;
  }

  .btn:first-of-type::before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    background: hsl(250, 54%, 50%);
    clip-path: inset(0 100% 0 0);
    transition: 0.4s;
    border-radius: 2rem;
  }

  .btn:last-of-type::before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    background: hsl(209, 80%, 50%);
    clip-path: polygon(50% 0, 50% 0, 50% 50%, 50% 100%, 50% 100%, 50% 50%);
    transition: 0.4s;
    border-radius: 2rem;
  }

  .btn:first-of-type:hover::before {
    clip-path: inset(0 0 0 0);
  }

  .btn:last-of-type:hover::before {
    clip-path: polygon(
      25% -70%,
      75% -70%,
      120% 50%,
      75% 170%,
      25% 170%,
      -20% 50%
    );
  }

  .playOptions {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    gap: 10px;
  }

  .playOptionsBtn {
    cursor: pointer;
    border: 1px solid #337ab7;
    background-color: #fff;
    color: #337ab7;
    padding: 6px 10px;
    border-radius: 6px;
    font-size: 15px;
    text-transform: capitalize;
    letter-spacing: 0.5px;
  }
`;
