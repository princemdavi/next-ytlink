import css from "styled-jsx/css";
import Lottie from "lottie-react";
import processing from "../assets/animations/processing.json";

const Loader = () => {
  return (
    <div className="container">
      <Lottie animationData={processing} loop style={{ height: "280px" }} />
      <style jsx>{styles}</style>
    </div>
  );
};

export default Loader;

const styles = css`
  .container {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 9999;
    background-color: #fff;
    display: grid;
    place-items: center;
    width: 100%;
    height: 100vh;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;
