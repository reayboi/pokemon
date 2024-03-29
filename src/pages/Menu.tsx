import { Grid, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Logo from "../images/logo.png";
import Banner from "../common/Banner";

const Menu = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <div style={{ position: "absolute", top: 0, left: 0 }}>
        <Banner />
      </div>
      <img src={Logo} alt="Pokemon TCG Logo" width={700} height={358.75} />
      <Link to="/SignIn">
        <IconButton sx={{ color: "#9DE34C", fontSize: "150px", mt: "30px" }}>
          <PlayCircleIcon fontSize="inherit" />
        </IconButton>
      </Link>
    </Grid>
  );
};

export default Menu;
