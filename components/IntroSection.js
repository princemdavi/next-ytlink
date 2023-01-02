import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const IntroSection = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Container theme={resolvedTheme}>
      <Content>
        <Title theme={resolvedTheme}>best youtube video downloader</Title>
        <Text theme={resolvedTheme}>
          Ylink is the best, fast and free Youtube downloader that allows you to
          download Youtube videos in high quality. Ytlink downloader allows you
          to download Youtube videos in any web browser without the installation
          of any software. The only thing needed to download videos from youtube
          is a web browser such as chrome, opera, safari e.t.c and internet
          connection.
        </Text>
      </Content>
    </Container>
  );
};

export default IntroSection;

const Container = styled.div`
  padding-block: 5rem;
  background-color: ${(props) => props.theme == "dark" && "hsl(209, 74%, 12%)"};
`;

const Content = styled.div`
  width: 90%;
  max-width: 1024px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  text-transform: capitalize;
  font-size: 24px;
  margin-bottom: 1rem;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 400;
  color: ${(props) => props.theme == "dark" && "#0086e7"};

  @media (min-width: 600px) {
    font-size: 2.5em;
  }
`;

const Text = styled.p`
  text-align: center;
  line-height: 2.1;
  color: ${(props) => props.theme == "dark" && "#c2c8cc"};

  @media (min-width: 600px) {
    font-size: 1.25em;
  }
`;
