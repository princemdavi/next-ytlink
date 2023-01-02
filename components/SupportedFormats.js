import { useEffect, useState } from "react";
import styled from "styled-components";
import { useTheme } from "next-themes";
import Image from "next/image";
import { nanoid } from "nanoid";

const SupportedFormats = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const formats = [
    {
      image: require(`../assets/${
        resolvedTheme == "light" ? "mp4" : "mp4-dark"
      }.svg`),
      name: "mp4",
    },
    {
      image: require(`../assets/${
        resolvedTheme == "light" ? "webm" : "webm-dark"
      }.svg`),
      name: "webm",
    },
    {
      image: require(`../assets/${
        resolvedTheme == "light" ? "3gp" : "3gp-dark"
      }.svg`),
      name: "3gp",
    },
    {
      image: require(`../assets/${
        resolvedTheme == "light" ? "mp3" : "mp3-dark"
      }.svg`),
      name: "mp3",
    },
    {
      image: require(`../assets/${
        resolvedTheme == "light" ? "m4a" : "m4a-dark"
      }.svg`),
      name: "m4a",
    },
  ];

  return (
    <Container theme={resolvedTheme}>
      <Content>
        <Title theme={resolvedTheme}>supported formats</Title>
        <FormatsContainer>
          {formats.map((format) => (
            <ImageWrapper key={nanoid()}>
              <Image alt={format.name} src={format.image} fill />
            </ImageWrapper>
          ))}
        </FormatsContainer>
      </Content>
    </Container>
  );
};

export default SupportedFormats;

const Container = styled.div`
  background-color: ${(props) => props.theme == "dark" && "#09233c"};
  padding-block: 2rem;
`;

const Content = styled.div`
  width: 90%;
  max-width: 1024px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 24px;
  color: ${(props) => props.theme == "dark" && "#0086e7"};
  text-align: center;
  text-transform: capitalize;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 400;
  margin-bottom: 1rem;

  @media (min-width: 600px) {
    & {
      font-size: 2.5em;
    }
  }
`;

const FormatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const ImageWrapper = styled.div`
  height: 180px;
  width: 130px;
  position: relative;
`;
