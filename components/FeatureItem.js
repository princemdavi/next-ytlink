import React from "react";
import styled from "styled-components";

const FeatureItem = ({ title, text, image, theme }) => {
  return (
    <Container>
      <ImageWrapper>{image}</ImageWrapper>
      <Title theme={theme}>{title}</Title>
      <Text theme={theme}>{text}</Text>
    </Container>
  );
};

export default FeatureItem;

const Container = styled.div`
  width: 20rem;
`;

const ImageWrapper = styled.div`
  text-align: center;
`;

const Title = styled.h3`
  text-transform: capitalize;
  text-align: center;
  font-size: 20px;
  margin-bottom: 5px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 400;
  color: ${(props) => props.theme == "dark" && "#4e91c8"};

  @media (min-width: 600px) {
    font-size: 1.5em;
  }
`;

const Text = styled.p`
  color: ${(props) => props.theme == "dark" && "#c2c8cc"};
  @media (min-width: 600px) {
    font-size: 1.125em;
  }
`;
