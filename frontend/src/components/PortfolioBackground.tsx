import neon2 from "../videos/neon_2.mp4";
import { useEffect } from "react";

interface PortfolioBackgroundProps {
  loading: boolean;
  onBackgroundLoad: () => void;
}

const PortfolioBackground = ({
  loading,
  onBackgroundLoad,
}: PortfolioBackgroundProps) => {
  useEffect(() => {
    if (!loading) {
      onBackgroundLoad();
    }
  }, [loading, onBackgroundLoad]);

  return !loading ? (
    <div className="full-screen-container">
      <video
        className="backgroundVideo2"
        src={neon2}
        autoPlay
        muted
        loop
        onLoadedData={onBackgroundLoad}
      />
    </div>
  ) : null;
};

export default PortfolioBackground;
