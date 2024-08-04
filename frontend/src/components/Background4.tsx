import { CardMedia } from "@mui/material";
import neon from "../videos/neon.mp4";

const Background3 = () => {
    return (
      <div className="full-screen-container">
        <CardMedia
          component="video"
          className="backgroundVideo4"
          src={neon}
          autoPlay
          muted
          loop
        />
      </div>
    );
  };

  export default Background3;