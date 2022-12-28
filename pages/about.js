import css from "styled-jsx/css";

const AboutUs = () => {
  return (
    <div className="container">
      <h2 className="title">About Us</h2>
      <p className="text">
        Ytlink is a modern and cutting-edge YouTube downloader that can download
        and convert YouTube videos. Using Ytlink, you can go from YouTube to
        MP3, YouTube to MP4, or any of its supported formats. There is no
        software to be downloaded; all conversions are done through our online
        user interface.
      </p>
      <style jsx>{styles}</style>
    </div>
  );
};

export default AboutUs;

const styles = css`
  .container {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    padding-block: 2rem;
    width: 90%;
    max-width: 1024px;
    margin: 0 auto;
  }

  .title {
    text-align: center;
    font-size: 36px;
    margin-bottom: 2rem;
  }

  .text {
    font-size: 20px;
    text-align: center;
  }
`;
