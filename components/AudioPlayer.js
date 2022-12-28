import { useState } from "react";
import { Loader } from ".";
import css from "styled-jsx/css";

function AudioPlayer({ audioId, setAudioId }) {
  const [displayPlayer, setDisplayPlayer] = useState(false);

  const handleContainerClick = (e) => {
    if (e.target.getAttribute("cont")) {
      setAudioId(null);
      setDisplayPlayer(false);
    }
  };

  return (
    <>
      <div
        className="container"
        cont="cont"
        onClick={handleContainerClick}
        style={{ display: displayPlayer ? "flex" : "none" }}
      >
        <audio
          onError={() => setDisplayPlayer(false)}
          onCanPlayThrough={() => setDisplayPlayer(true)}
          src={`https://ytlinkapi.herokuapp.com/stream/audio/${audioId}`}
          controls
          autoPlay
        ></audio>
      </div>
      {!displayPlayer && <Loader />}
      <style jsx>{styles}</style>
    </>
  );
}

export default AudioPlayer;

const styles = css`
  .container {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.725);
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
`;
