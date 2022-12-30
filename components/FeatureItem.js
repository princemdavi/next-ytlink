import React from "react";
import css from "styled-jsx/css";

const FeatureItem = ({ title, text, image }) => {
  return (
    <div className="container">
      <div className="image">{image}</div>
      <h3 className="title">{title}</h3>
      <p className="text">{text}</p>
      <style jsx>{styles}</style>
    </div>
  );
};

export default FeatureItem;

const styles = css`
  .container {
    width: 20rem;
  }

  .image {
    text-align: center;
  }
  .title {
    text-transform: capitalize;
    text-align: center;
    font-size: 20px;
    margin-bottom: 5px;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 400;
    color: #4e91c8;
  }
  .text {
    text-align: center;
  }
`;
