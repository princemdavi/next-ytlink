import Image from "next/image";
import { useEffect, useState } from "react";
import { FiPlayCircle } from "react-icons/fi";
import css from "styled-jsx/css";
import axios from "axios";
import { DownloadFile, VideoPLayer, Loader } from ".";
import TruncateMarkup from "react-truncate-markup";
import { MdAccountCircle } from "react-icons/md";
import { GiBrassEye } from "react-icons/gi";
import { AiFillClockCircle, AiTwotoneCalendar } from "react-icons/ai";
import { useTheme } from "next-themes";

const VideoDetails = ({ video, format }) => {
  const [loading, setLoading] = useState(false);
  const [videoStreamUrl, setVideoStreamUrl] = useState(null);
  const [downloadLink, setDownloadLink] = useState(null);
  const [error, setError] = useState(null);
  const [showDownloadFileModal, setShowDownloadFileModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const backend_url = "https://ytlinkapi.herokuapp.com";

  const downloadFile = async (itag, format) => {
    try {
      setShowDownloadFileModal(true);
      const { data } = await axios.get(
        `${backend_url}/download/${video.videoDetails.video_id}/${itag}/${format}`
      );
      setDownloadLink(data);
    } catch (error) {
      setError("Something went wrong, please try again later");
    }
  };

  const getVideoStreamUrl = async (videoId) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${backend_url}/stream/video/${videoId}`
      );
      setVideoStreamUrl(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container" data-theme={resolvedTheme}>
      <div className="content">
        <div className="left">
          <div className="image">
            <Image
              alt={video.videoDetails.title}
              src={video.videoDetails.thumbnail}
              fill
              sizes="100vw"
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
              onClick={(e) => getVideoStreamUrl(video.videoDetails.video_id)}
            />
          </div>
        </div>
        <div className="video__formats">
          {/* mp4 video formats */}
          <div className="video__format">
            <h3 className="title">MP4 formats:</h3>
            <div className="items">
              {video.formats["mp4"].map((videoFormat) => (
                <button
                  className="btn"
                  key={videoFormat.itag}
                  onClick={() => downloadFile(videoFormat.itag, "mp4")}
                >
                  {videoFormat.res} ({videoFormat.size})
                </button>
              ))}
            </div>
          </div>
          {/* webm video formats */}
          {!!video.formats["webm"].length && (
            <div className="video__format">
              <h3 className="title">WebM Formats:</h3>
              <div className="items">
                {video.formats["webm"].map((videoFormat) => (
                  <button
                    className="btn"
                    key={videoFormat.itag}
                    onClick={() => downloadFile(videoFormat.itag, "webm")}
                  >
                    {videoFormat.res} ({videoFormat.size})
                  </button>
                ))}
              </div>
            </div>
          )}
          {/* audio formats */}
          <div className="video__format">
            <h3 className="title">Audio Formats:</h3>
            <button
              className="btn"
              onClick={() => downloadFile(video.formats["mp3"].itag, "mp3")}
            >
              mp3 ({video.formats["mp3"].size})
            </button>
          </div>
        </div>
      </div>

      {/* download file modal */}
      {showDownloadFileModal && (
        <DownloadFile
          video={{
            title: video.videoDetails.title,
            thumbnail: video.videoDetails.thumbnail,
          }}
          downloadLink={downloadLink}
          setDownloadLink={setDownloadLink}
          setShowDownloadFileModal={setShowDownloadFileModal}
          error={error}
          setError={setError}
        />
      )}
      {/* video player */}
      {videoStreamUrl && (
        <VideoPLayer
          videoStreamUrl={videoStreamUrl}
          setVideoStreamUrl={setVideoStreamUrl}
        />
      )}
      {loading && <Loader />}
      {/* end of modal */}
      <style jsx>{styles}</style>
    </div>
  );
};

export default VideoDetails;

const styles = css`
  .container {
    padding-block: 2rem;
    background-color: #ebeced;
  }

  .container[data-theme="dark"] {
    background-color: #0e1525;
    color: #c2c8cc;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 10px;
    border-radius: 10px;
    background: #f0f1f2;
    border: 1px solid #d2d4d6;
    width: 90%;
    max-width: 1024px;
    margin: 0 auto;
  }

  .container[data-theme="dark"] .content {
    background: radial-gradient(100% 100% at 0% 0%, #212839 0%, #1c2333 100%);
    border: 1px solid #2b3245;
  }

  .image {
    position: relative;
    width: 100%;
    height: 188px;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 5px;
  }

  .items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .title {
    margin-bottom: 0.5rem;
    font-size: 18px;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 400;
  }

  .btn {
    display: inline-block;
    height: 40px;
    position: relative;
    cursor: pointer;
    border: none;
    outline: none;
    background-color: hsl(209, 65%, 50%);
    color: #fff;
    border-radius: 4px;
    font-size: 14px;
    padding: 0 0.5rem;
    transform: perspective(1px) translateZ(0);
    overflow: hidden;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 400;
  }

  .container[data-theme="dark"] .btn {
    background-color: #184772;
  }

  .btn::before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    clip-path: circle(0% at 50% 50%);
    background: #184772;
    transition: 0.4s;
  }

  .container[data-theme="dark"] .btn::before {
    background: hsl(209, 65%, 50%);
  }

  .btn:hover::before {
    clip-path: circle(100% at 50% 50%);
  }

  @media (min-width: 781px) {
    .content {
      grid-template-columns: 1.5fr 2fr;
    }

    .image {
      height: 230px;
    }
  }
`;
