import { useTheme } from "next-themes";
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
} from "../components";

function HomePage() {
  const [videoDetails, setVideoDetails] = useState(null);
  const [searchedVideos, setSearchedVideos] = useState(null);
  const [searchingVideo, setVideoSearching] = useState(false);
  const [gettingVideoDetails, setGettingVideoDetails] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

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
