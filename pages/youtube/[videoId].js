import { useEffect, useState } from "react";
import css from "styled-jsx/css";
import { useRouter } from "next/router";
import {
  FeaturesSection,
  IntroSection,
  VideoDetails,
  VideoDetailsSkeleton,
} from "../../components";
import { getVideo } from "../../services";

const YoutubeVideoDetails = () => {
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
      {videoDetails && <VideoDetails video={videoDetails} />}
      {/* skeleton when getting video details */}
      {(showSkeleton || !videoDetails) && <VideoDetailsSkeleton />}
      {/* intro section */}
      <IntroSection />
      {/* Features section */}
      <FeaturesSection />
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
