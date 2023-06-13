import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Alert, Typography } from "@mui/material";

const Banner = () => {
  //   const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        const auth = getAuth();
        signOut(auth)
          .then(() => {
            // navigate("/");
            console.log("hello");
          })
          .catch((error) => {
            Alert(error);
          });
      }}
    >
      <Typography
        variant="body2"
        sx={{ color: "black", backgroundColor: "white" }}
      >
        Sign Out
      </Typography>
    </div>
  );
};

export default Banner;
