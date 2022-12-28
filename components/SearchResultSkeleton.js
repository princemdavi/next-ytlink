import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import css from "styled-jsx/css";

const SearchResultSkeleton = ({ playlistVideos, playlists, songs }) => {
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
      <div className="image skeleton__loader__background">
        <span className="skeleton__loader"></span>
      </div>
      <div className="content">
        <div className="info title skeleton__loader__background">
          <span className="skeleton__loader"></span>
        </div>
        {!playlistVideos && (
          <div className="info author skeleton__loader__background">
            <span className="skeleton__loader"></span>
          </div>
        )}
        {!playlistVideos && !playlists && (
          <div className="info published skeleton__loader__background">
            <span className="skeleton__loader"></span>
          </div>
        )}
        {!playlists && (
          <div className="info timestamp skeleton__loader__background">
            <span className="skeleton__loader"></span>
          </div>
        )}
        {playlistVideos && (
          <div className="info index skeleton__loader__background">
            <span className="skeleton__loader"></span>
          </div>
        )}
        {!playlistVideos && (
          <div className="info views skeleton__loader__background">
            <span className="skeleton__loader"></span>
          </div>
        )}
        <div className="buttons">
          <div className="btn skeleton__loader__background">
            <span className="skeleton__loader"></span>
          </div>
          {!playlists && (
            <div className="btn skeleton__loader__background">
              <span className="skeleton__loader"></span>
            </div>
          )}
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default SearchResultSkeleton;

const styles = css`
  .container {
    background: #f0f1f2;
    border-radius: 10px;
    border: 1px solid #d2d4d6;
    overflow: hidden;
    /* box-shadow: 0 4px 6px 0 rgb(32 33 36 / 28%); */
    padding: 0.5rem;
  }

  .container[data-theme="dark"] {
    background: radial-gradient(100% 100% at 0% 0%, #212839 0%, #1c2333 100%);
    border: 1px solid #2b3245;
  }

  .skeleton__loader__background {
    width: 100%;
    height: 15px;
    display: inline-block;
    background: hsl(210, 7%, 80%);
  }

  .container[data-theme="dark"] .skeleton__loader__background {
    background: hsl(222, 29%, 25%);
  }

  .skeleton__loader {
    width: 100%;
    height: 100%;
    display: block;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 80%
    );
    background-repeat: repeat-y;
    background-size: 50px 500px;
    background-position: 0 0;
    animation: shine 1s infinite;
  }

  @keyframes shine {
    to {
      background-position: 100% 0, /* move highlight to right */ 0 0;
    }
  }

  .image {
    width: 100%;
    height: 180px;
    border-radius: 8px;
    overflow: hidden;
  }

  .info {
    height: 30px;
  }

  .author {
    width: 80%;
  }

  .published {
    width: 60%;
  }

  .timestamp {
    width: 25%;
  }
  .index {
    width: 15%;
  }

  .views {
    width: 40%;
  }

  .buttons {
    display: flex;
    gap: 10px;
  }

  .btn {
    width: 100%;
    height: 35px;
    border: none;
    border-radius: 1rem;
    overflow: hidden;
  }
`;
