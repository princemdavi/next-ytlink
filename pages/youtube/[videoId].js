import { useEffect, useState } from "react";
import css from "styled-jsx/css";
import { useRouter } from "next/router";
import {
  FeaturesSection,
  Footer,
  IntroSection,
  Navbar,
  SideNav,
  VideoDetails,
  VideoDetailsSkeleton,
} from "../../components";
import { getVideo } from "../../services";

const YoutubeVideoDetails = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const [videoDetails, setVideoDetails] = useState(null);
  const [showSkeleton, setShowSkeleton] = useState(true);

  const router = useRouter();

  const { videoId } = router.query;

  useEffect(() => {
    (async () => {
      try {
        const video = await getVideo(videoId);
        setVideoDetails(video);
      } catch (error) {
        console.log(error.message);
      } finally {
        setShowSkeleton(false);
      }
    })();
  }, [videoId]);

  return (
    <div className="container">
      <Navbar setShowSideNav={setShowSideNav} />
      {showSideNav && <SideNav setShowSideNav={setShowSideNav} />}
      {videoDetails && <VideoDetails video={videoDetails} />}
      {/* skeleton when getting video details */}
      {(showSkeleton || !videoDetails) && <VideoDetailsSkeleton />}
      {/* intro section */}
      <IntroSection />
      {/* Features section */}
      <FeaturesSection />
      <Footer />
      <style jsx>{styles}</style>
    </div>
  );
};

export default YoutubeVideoDetails;

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
