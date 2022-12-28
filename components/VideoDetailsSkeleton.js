import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import css from "styled-jsx/css";

const VideoDetailsSkeleton = () => {
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
        <div className="left">
          <div className="image skeleton__loader__background">
            <span className="skeleton__loader"></span>
          </div>
        </div>

        <div className="video__formats">
          <div className="video_format">
            <div className="video_format_title skeleton__loader__background">
              <span className="skeleton__loader"></span>
            </div>
            <div className="items">
              {Array.from({ length: 6 }).map((_u, i) => (
                <div className="btn skeleton__loader__background" key={i}>
                  <span className="skeleton__loader"></span>
                </div>
              ))}
            </div>
          </div>
          <div className="video_format">
            <div className="video_format_title skeleton__loader__background">
              <span className="skeleton__loader"></span>
            </div>
            <div className="items">
              {Array.from({ length: 8 }).map((_u, i) => (
                <div className="btn skeleton__loader__background" key={i}>
                  <span className="skeleton__loader"></span>
                </div>
              ))}
            </div>
          </div>
          <div className="video_format">
            <div className="video_format_title skeleton__loader__background">
              <span className="skeleton__loader"></span>
            </div>
            <div className="items">
              {Array.from({ length: 4 }).map((_u, i) => (
                <div className="btn skeleton__loader__background" key={i}>
                  <span className="skeleton__loader"></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default VideoDetailsSkeleton;

const styles = css`
  .container {
    padding-block: 2rem;
    background-color: #ebeced;
  }

  .container[data-theme="dark"] {
    background-color: #0e1525;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    background: #f0f1f2;
    border: 1px solid #d2d4d6;
    border-radius: 10px;
    padding: 0.5rem;
    width: 90%;
    max-width: 1024px;
    margin: 0 auto;
  }

  .container[data-theme="dark"] .content {
    background: radial-gradient(100% 100% at 0% 0%, #212839 0%, #1c2333 100%);
    border: 1px solid #2b3245;
  }

  .skeleton__loader__background {
    width: 100%;
    height: 15px;
    display: block;
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
      background-position: 100% 0, /* move highlight to video__formats */ 0 0;
    }
  }

  .image {
    width: 100%;
    height: 180px;
    margin-bottom: 10px;
    border-radius: 8px;
    overflow: hidden;
  }

  /* video formats */
  .items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .video_format_title {
    margin-bottom: 0.75rem;
    width: 150px;
    height: 30px;
  }

  .btn {
    height: 40px;
    border-radius: 4px;
  }

  @media (min-width: 781px) {
    .content {
      grid-template-columns: 1.5fr 2fr;
    }

    .image {
      height: 230px;
    }

    .video__formats {
      height: 100%;
    }
  }
`;
