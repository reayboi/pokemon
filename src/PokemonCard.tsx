import { Box, ButtonBase } from "@mui/material";
import React from "react";
import Draggable from "react-draggable";

interface IPokemonCard {
  imageSrc: string;
}

const PokemonCard = ({ imageSrc }: IPokemonCard) => {
  return (
    <Draggable>
      <ButtonBase
        onMouseOver={() => {
          console.log("hello World");
        }}
      >
        <Box
          component="img"
          className="name"
          sx={{
            width: "200px",
            height: "270px",
            border: "5px solid black",
            borderRadius: "15px",
          }}
          src={imageSrc}
          alt=""
        />
      </ButtonBase>
    </Draggable>
  );
};

export default PokemonCard;
