import { Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Logo from "../img/logo.png";

const Menu = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <img src={Logo} alt="Pokemon TCG Logo" width={700} height={358.75} />
      <Link to="/play">
        <IconButton sx={{ color: "#9DE34C", fontSize: "150px", mt: "30px" }}>
          <PlayCircleIcon fontSize="inherit" />
        </IconButton>
      </Link>
    </Grid>
  );
};

export default Menu;
