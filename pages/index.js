import { useEffect, useState } from "react";
import css from "styled-jsx/css";
import {
  HeroSection,
  SearchedVideos,
  VideoDetails,
  SearchResultSkeletonLoader,
  VideoDetailsSkeleton,
  FeaturesSection,
  IntroSection,
  SupportedFormats,
  SupportedPlatforms,
  FAQS,
} from "../components";

function HomePage() {
  const [videoDetails, setVideoDetails] = useState(null);
  const [searchedVideos, setSearchedVideos] = useState(null);
  const [searchingVideo, setVideoSearching] = useState(false);
  const [gettingVideoDetails, setGettingVideoDetails] = useState(false);

  return (
    <div className="container">
      {/* hero section */}
      <HeroSection
        setVideoDetails={setVideoDetails}
        setSearchedVideos={setSearchedVideos}
        setVideoSearching={setVideoSearching}
        setGettingVideoDetails={setGettingVideoDetails}
      />

      {/* searched videos skeleton loading */}
      {searchingVideo && <SearchResultSkeletonLoader />}
      {/* skeleton when getting video details */}
      {gettingVideoDetails && <VideoDetailsSkeleton />}
      {/* searched videos */}
      {searchedVideos && <SearchedVideos searchedVideos={searchedVideos} />}
      {videoDetails && <VideoDetails video={videoDetails} />}
      {/* intro section */}
      <IntroSection />
      {/* Features section */}
      <FeaturesSection />
      {/* supported formats section */}
      <SupportedFormats />
      {/* supported formats section */}
      <SupportedPlatforms />
      {/* frequently asked questions section */}
      <FAQS />
      {/* confetti */}
      <style jsx>{styles}</style>
    </div>
  );
}

export default HomePage;

const styles = css`
  .container {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
`;
