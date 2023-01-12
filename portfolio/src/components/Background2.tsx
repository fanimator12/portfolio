import { CardMedia } from "@mui/material";
import neon2 from "../videos/neon_2.mp4";

const Background2 = () => {
    return (
      <div className="full-screen-container">
        <CardMedia
          component="video"
          className="backgroundVideo2"
          src={neon2}
          autoPlay
          muted
          loop
        />
      </div>
    );
  };

  export default Background2;