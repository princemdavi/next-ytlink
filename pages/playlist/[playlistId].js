import { useEffect, useState } from "react";
import css from "styled-jsx/css";
import { useRouter } from "next/router";
import {
  FeaturesSection,
  IntroSection,
  PlaylistVideos,
  SearchResultSkeletonLoader,
} from "../../components";
import { getPlaylist } from "../../services";

const PlaylistDetails = () => {
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
      {/* searched videos skeleton loading */}
      {searchingVideo && <SearchResultSkeletonLoader playlistVideos={true} />}
      {/* playlist videos */}
      {playlistDetails && <PlaylistVideos playlist={playlistDetails} />}
      {/* intro section */}
      <IntroSection />
      {/* Features section */}
      <FeaturesSection />
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
