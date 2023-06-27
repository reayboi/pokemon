import React, { useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import { Alert, IconButton, Menu, MenuItem } from "@mui/material";
import AuthContext from "../utils/contexts/AuthContext";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link, useNavigate } from "react-router-dom";

const Banner = () => {
  const { userData } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  return (
    <>
      <IconButton
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "white" }}
      >
        <SettingsIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </MenuItem>
        <MenuItem
          onClick={() => {
            const auth = getAuth();
            signOut(auth)
              .then(() => {
                console.log("removing local storage item");
                localStorage.removeItem("userData");
                navigate("/");
              })
              .catch((error) => {
                Alert(error);
              });
          }}
        >
          Sign Out
        </MenuItem>
      </Menu>
    </>
  );
};

export default Banner;
