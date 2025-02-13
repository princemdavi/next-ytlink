import React, { useState } from "react";
import css from "styled-jsx/css";
import {
  HeroSection,
  SearchedPlaylists,
  SearchResultSkeletonLoader,
  IntroSection,
  FeaturesSection,
} from "../components";

const Playlist = () => {
  const [searchedPlaylists, setSearchedPlaylists] = useState(null);
  const [searchingVideo, setVideoSearching] = useState(false);
  const [searchingPlaylists, setSearchingPlaylists] = useState(false);

  return (
    <div className="container">
      {/* hero section */}
      <HeroSection
        playlist={true}
        setSearchedPlaylists={setSearchedPlaylists}
        setVideoSearching={setVideoSearching}
        setSearchingPlaylists={setSearchingPlaylists}
      />
      {/* searched videos skeleton loading */}
      {searchingVideo && <SearchResultSkeletonLoader playlistVideos={true} />}
      {/* skeleton loader when searching for playlists */}
      {searchingPlaylists && <SearchResultSkeletonLoader playlists={true} />}

      {searchedPlaylists && (
        <SearchedPlaylists
          playlists={searchedPlaylists}
          setSearchedPlaylists={setSearchedPlaylists}
          setVideoSearching={setVideoSearching}
        />
      )}
      {/* intro section */}
      <IntroSection />
      {/* Features section */}
      <FeaturesSection />
      <style jsx>{styles}</style>
    </div>
  );
};

export default Playlist;

const styles = css`
  .container {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  .content {
    width: 90%;
    max-width: 1024px;
    margin: 0 auto;
  }
`;
