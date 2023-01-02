import { useEffect, useState } from "react";
import styled from "styled-components";
import { useTheme } from "next-themes";
import Image from "next/image";
import { nanoid } from "nanoid";

const SupportedPlatforms = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const platforms = [
    {
      image: require(`../assets/${
        resolvedTheme == "light" ? "windows" : "windows-dark"
      }.svg`),
      name: "windows",
    },
    {
      image: require(`../assets/${
        resolvedTheme == "light" ? "linux" : "linux-dark"
      }.svg`),
      name: "linux",
    },
    {
      image: require(`../assets/${
        resolvedTheme == "light" ? "apple" : "apple-dark"
      }.svg`),
      name: "apple",
    },
    {
      image: require(`../assets/${
        resolvedTheme == "light" ? "android" : "android-dark"
      }.svg`),
      name: "android",
    },
  ];

  return (
    <Container theme={resolvedTheme}>
      <Content>
        <Title theme={resolvedTheme}>supported platforms</Title>
        <PlatformsContainer>
          {platforms.map((platform) => (
            <ImageWrapper key={nanoid()}>
              <Image alt={platform.name} src={platform.image} fill />
            </ImageWrapper>
          ))}
        </PlatformsContainer>
      </Content>
    </Container>
  );
};

export default SupportedPlatforms;

const Container = styled.div`
  background-color: ${(props) => props.theme == "dark" && "#081f35"};
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
  margin-bottom: 2rem;

  @media (min-width: 600px) {
    font-size: 2.5em;
  }
`;

const PlatformsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const ImageWrapper = styled.div`
  height: 180px;
  width: 200px;
  position: relative;
`;
