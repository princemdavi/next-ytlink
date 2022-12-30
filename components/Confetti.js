import ReactConfetti from "react-confetti";
import { useWindowSize, useScrollbarWidth } from "react-use";

const Confetti = () => {
  const { width, height } = useWindowSize();
  const sbw = useScrollbarWidth();

  return (
    <ReactConfetti width={width - sbw} height={height} tweenDuration={1000} />
  );
};

export default Confetti;
