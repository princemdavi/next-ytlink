import React from "react";
import "../node_modules/video-react/dist/video-react.css";
import css from "styled-jsx/css";
import { Player } from "video-react";
import "../node_modules/video-react/dist/video-react.css";

const VideoPLayer = ({ videoStreamUrl, setVideoStreamUrl }) => {
  const handleContainerClick = (e) => {
    if (e.target.getAttribute("cont")) setVideoStreamUrl(null);
  };

  return (
    <div className="container" cont="cont" onClick={handleContainerClick}>
      <div className="playerWrapper">
        <Player
          playsInline
          src={videoStreamUrl}
          autoPlay
          fluid={false}
          width={`100%`}
          height={`auto`}
        />
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default VideoPLayer;

const styles = css`
  .container {
    position: fixed;
    inset: 0;
    min-height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.725);
    display: flex;
    justify-content: center;
  }

  .playerWrapper {
    position: relative;
    width: 90%;
    max-width: 780px;
    height: 480px;
    display: flex;
    justify-content: center;
    border: 10px solid #fff;
    border-radius: 5px;
    margin-top: 10vh;
  }
`;
