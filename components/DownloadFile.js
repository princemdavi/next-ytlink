import Image from "next/image";
import css from "styled-jsx/css";
import TruncateMarkup from "react-truncate-markup";
import processing from "../assets/animations/processing.json";
import Lottie from "lottie-react";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Confetti } from ".";

const DownloadFile = ({
  video,
  error,
  downloadLink,
  setDownloadLink,
  setError,
  setShowDownloadFileModal,
}) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const onContainerClick = (e) => {
    if (e.target.getAttribute("cont")) {
      setDownloadLink(null);
      setShowDownloadFileModal(false);
      setError(null);
    }
  };

  return (
    <>
      <div
        cont="modal"
        className="container"
        onClick={onContainerClick}
        data-theme={resolvedTheme}
      >
        <div className="modal">
          <div className="modalContent">
            {video && (
              <div>
                <div className="modalImage">
                  <Image
                    alt={video.title}
                    src={video.thumbnail}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <TruncateMarkup lines={1}>
                  <h4 className="title">{video.title}</h4>
                </TruncateMarkup>
                <div>
                  {downloadLink && (
                    <div>
                      <button
                        className="btnd"
                        onClick={() => window.open(downloadLink, "_blank")}
                      >
                        <BsArrowDownCircleFill size={20} />
                        <span>Download</span>
                      </button>
                    </div>
                  )}
                  {!downloadLink && !error && (
                    <div>
                      <Lottie
                        animationData={processing}
                        loop
                        style={{
                          height: "180px",
                          width: "100%",
                          marginTop: "-3.2rem",
                        }}
                      />
                      <p style={{ marginTop: "-3.2rem" }}>
                        Please wait while we prepare your file for download
                      </p>
                    </div>
                  )}
                  {error && (
                    <div className="error">
                      <p>{error}</p>
                    </div>
                  )}
                  {downloadLink || error ? (
                    <p style={{ fontSize: "15px" }}>
                      Thank you for trusting us by using our service.
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        {downloadLink && <Confetti />}
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default DownloadFile;

const styles = css`
  .container {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 1000;
    width: 100%;
    min-height: 100vh;
    top: 0;
    left: 0;
  }

  .container[data-theme="dark"] {
    color: #c2c8cc;
  }

  .modal {
    width: 90%;
    max-width: 370px;
    max-height: 95%;
    padding: 0.5rem;
    background-color: #fff;
    border-radius: 10px;
    position: fixed;
    top: 10px;
    left: 50%;
    overflow-y: auto;
    -webkit-animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  .container[data-theme="dark"] .modal {
    background: radial-gradient(100% 100% at 0% 0%, #212839 0%, #1c2333 100%);
    border: 1px solid #2b3245;
  }

  .modalContent {
    position: relative;
  }

  .close {
    position: absolute;
    width: 20px;
    height: 20px;
    right: 0;
    z-index: 1000;
    background-color: #fff;
    border-radius: 50%;
    cursor: pointer;
  }

  .modalImage {
    width: 100%;
    height: 160px;
    position: relative;
    margin-bottom: 0.5rem;
    border-radius: 6px;
    overflow: hidden;
  }

  .title {
    color: #ea7030;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 400;
  }

  .btnd {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    height: 40px;
    width: 90%;
    max-width: 200px;
    border: none;
    background-color: #337ab7;
    color: #fff;
    cursor: pointer;
    border-radius: 6px;
    background-size: 42px;
    font-size: 18px;
    margin-block: 1rem;
    text-align: center;
    margin-inline: auto !important;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.25px;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 400;
  }

  .container[data-theme="dark"] .btnd {
    background-color: #184772;
  }

  .error {
    display: grid;
    place-items: center;
    min-height: 50px;
    background-color: #f2dede;
    border-color: #ebccd1;
    border-radius: 4px;
    color: #a94442;
    font-size: 14px;
    margin: 10px 1rem;
    padding: 10px;
    text-align: center;
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
  /* button vibrating animation */
`;
