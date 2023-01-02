import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import styled from "styled-components";
import { SearchInput } from ".";

const HeroSection = ({
  setVideoDetails,
  setSongDetails,
  setSearchedVideos,
  format,
  playlist,
  setPlaylist,
  setSearchedPlaylists,
  setVideoSearching,
  setGettingSongDetails,
  setGettingVideoDetails,
  setSearchingPlaylists,
}) => {
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
        <Title theme={resolvedTheme}>Youtube downloader</Title>
        <Subtitle theme={resolvedTheme}>
          The best, fast and reliable youtube{" "}
          {playlist ? "playlist" : format == "mp3" ? "audio" : "video"}{" "}
          downloader
        </Subtitle>
        <SearchContainer>
          <SearchInput
            setVideoDetails={setVideoDetails}
            setSongDetails={setSongDetails}
            setSearchedVideos={setSearchedVideos}
            format={format}
            playlist={playlist}
            setPlaylist={setPlaylist}
            setSearchedPlaylists={setSearchedPlaylists}
            setSearchingPlaylists={setSearchingPlaylists}
            setVideoSearching={setVideoSearching}
            setGettingSongDetails={setGettingSongDetails}
            setGettingVideoDetails={setGettingVideoDetails}
          />
        </SearchContainer>
        <Terms theme={resolvedTheme}>
          By using our service you are accepting our{" "}
          <Link href="/terms" passHref legacyBehavior>
            <StyledLink>Terms of Use.</StyledLink>
          </Link>
        </Terms>
      </Content>
    </Container>
  );
};

export default HeroSection;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
  background-color: ${(props) => props.theme == "dark" && "#09233c"};

  @media (min-width: 1024px) {
    min-height: 360px;
  }
`;

const Content = styled.div`
  width: 90%;
  max-width: 1024px;
  margin: 0 auto;
  padding-block: 1.5rem;
  border-radius: 8px;
`;

const Title = styled.h1`
  margin-bottom: 0.5rem;
  text-align: center;
  text-transform: capitalize;
  font-size: 32px;
  color: ${(props) => props.theme == "dark" && "#0086e7"};
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 400;

  @media (min-width: 600px) {
    font-size: 4em;
  }
`;

const Subtitle = styled.h3`
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 18px;
  letter-spacing: 0.5px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 400;
  color: ${(props) => props.theme == "dark" && "#c2c8cc"};
  @media (min-width: 600px) {
    font-size: 1.45em;
  }
`;

const SearchContainer = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 1.5rem;
`;

const Terms = styled.p`
  text-align: center;
  font-size: 14px;
  color: ${(props) => props.theme == "dark" && "#c2c8cc"};
`;

const StyledLink = styled.a`
  color: #0086e7;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
