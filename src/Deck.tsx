import { Box, ButtonBase } from "@mui/material";
import back from "../src/img/back.png";
import React from "react";

const Deck = () => {
  return (
    <ButtonBase
      onClick={() => {
        console.log("add card");
      }}
    >
      <Box
        component="img"
        className="name"
        sx={{
          width: "200px",
          height: "270px",
          border: "5px solid black",
          borderRadius: "20px",
        }}
        src={back}
        alt=""
      />
    </ButtonBase>
  );
};

export default Deck;
