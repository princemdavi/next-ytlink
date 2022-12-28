import axios from "axios";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiFillClockCircle, AiOutlineNumber } from "react-icons/ai";
import { FiPlayCircle } from "react-icons/fi";
import { HiPlay } from "react-icons/hi";
import { MdDownloadForOffline } from "react-icons/md";
import TruncateMarkup from "react-truncate-markup";
import css from "styled-jsx/css";
import { AudioPlayer, VideoPLayer } from ".";

const PlaylistVideo = ({ video, index }) => {
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
          onClick={(e) => getVideoStreamUrl(video.videoId)}
        />
      </div>
      <div className="info">
        <TruncateMarkup lines={1}>
          <h3 className="title">
            {video.title.replace(/[^a-zA-Z0-9 ]/g, "").trim()}
          </h3>
        </TruncateMarkup>
        <div className="vid__info">
          <AiFillClockCircle size={24} color="#184772" />
          <span>{video.duration.timestamp}</span>
        </div>
        <div className="vid__info" style={{ marginBottom: "5px" }}>
          <AiOutlineNumber size={24} color="#184772" />
          <span>{index + 1}</span>
        </div>
        <div className="btns">
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

export default PlaylistVideo;

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
    position: relative;
    height: 200px;
    width: 100%;
    border-radius: 6px;
    overflow: hidden;
  }
  .vid__info {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .title {
    font-size: 18px;
    margin-bottom: 0.125rem;
    font-family: "Roboto Condensed", sans-serif;
    color: #ea7030;
  }
  .btns {
    display: flex;
    gap: 5px;
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
    border-radius: 1rem;
    cursor: pointer;
    background-color: #39298a;
    color: #fff;
    padding: 5px 10px;
    text-transform: capitalize;
    font-size: 16px;
    font-family: "Roboto Condensed", sans-serif;
    outline: none;
  }

  .btn__d {
    background-color: #184772;
    color: #fff;
  }
`;
