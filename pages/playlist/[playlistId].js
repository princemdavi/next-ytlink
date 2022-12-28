import { useEffect, useState } from "react";
import css from "styled-jsx/css";
import { useRouter } from "next/router";
import {
  FeaturesSection,
  Footer,
  IntroSection,
  Navbar,
  PlaylistVideos,
  SearchResultSkeletonLoader,
  SideNav,
} from "../../components";
import { getPlaylist } from "../../services";

const PlaylistDetails = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const [playlistDetails, setPlaylistDetails] = useState(null);
  const [searchingVideo, setVideoSearching] = useState(false);

  const router = useRouter();

  const { playlistId } = router.query;

  useEffect(() => {
    (async () => {
      try {
        setVideoSearching(true);
        const playlist = await getPlaylist(playlistId);
        setPlaylistDetails(playlist);
      } catch (error) {
        console.log("an error has occured");
      } finally {
        setVideoSearching(false);
      }
    })();
  }, [playlistId]);

  return (
    <div className="container">
      <Navbar setShowSideNav={setShowSideNav} />
      {showSideNav && <SideNav setShowSideNav={setShowSideNav} />}
      {/* searched videos skeleton loading */}
      {searchingVideo && <SearchResultSkeletonLoader playlistVideos={true} />}
      {/* playlist videos */}
      {playlistDetails && <PlaylistVideos playlist={playlistDetails} />}
      {/* intro section */}
      <IntroSection />
      {/* Features section */}
      <FeaturesSection />
      <Footer />
      <style jsx>{styles}</style>
    </div>
  );
};

export default PlaylistDetails;

const styles = css`
  .container {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  .content {
    padding-block: 2rem;
  }
`;
