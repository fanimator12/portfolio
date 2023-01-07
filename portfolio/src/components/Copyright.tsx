import { Typography } from "@mui/material";

function Copyright() {
    return (
      <Typography variant="body2" color="#fff">
        {"Copyright © "}
          Franciska Torok
        {" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

export default Copyright;