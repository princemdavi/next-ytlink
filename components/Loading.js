import css from "styled-jsx/css";
import Lottie from "lottie-react";
import processing from "../assets/animations/processing.json";

const Loading = () => {
  return (
    <div className="container">
      <Lottie
        animationData={processing}
        loop
        style={{ height: "200px", marginTop: "-120px" }}
      />
      <style jsx>{styles}</style>
    </div>
  );
};

export default Loading;

const styles = css`
  .container {
    height: 40px;
  }
`;
