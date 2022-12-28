import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import css from "styled-jsx/css";
import SearchedVideo from "./SearchedVideo";
import VideoFormats from "./VideoFormats";
import VideoPLayer from "./VideoPLayer";

const SearchedVideos = ({ searchedVideos, format }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoId, setVideoId] = useState(null);
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const onVideoSelect = (vid) => {
    setSelectedVideo(vid);
    setShowModal(!showModal);
  };

  return (
    <div className="container" data-theme={resolvedTheme}>
      <div className="videos">
        {searchedVideos?.map((video) => (
          <SearchedVideo
            video={video}
            key={video.videoId}
            onVideoSelect={onVideoSelect}
            setVideoId={setVideoId}
            format={format}
          />
        ))}
      </div>
      {showModal && (
        <VideoFormats
          selectedVideo={selectedVideo}
          setShowModal={setShowModal}
          format={format}
        />
      )}
      {videoId && <VideoPLayer videoId={videoId} setVideoId={setVideoId} />}
      <style jsx>{styles}</style>
    </div>
  );
};

export default SearchedVideos;

const styles = css`
  .container {
    padding-block: 2rem;
    background-color: #ebeced;
  }

  .container[data-theme="dark"] {
    background-color: #0e1525;
  }

  .videos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    gap: 10px;
    width: 90%;
    max-width: 1024px;
    margin: 0 auto;
  }
`;
