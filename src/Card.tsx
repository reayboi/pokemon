import { Box, ButtonBase } from "@mui/material";
import React from "react";
import Draggable from "react-draggable";
import Charmander from "./img/charmander.png";

export interface ICard {
  supertype: string;
  name: string;
  image: string;
  rules?: Array<string>;
  description?: string;
  hp?: number;
  types?: Array<string>;
  stage?: Array<string>;
  retreatCost?: Array<string>;
  weakness?: Array<string>;
  resistance?: Array<string>;
  ability?: Array<Object>;
  moves?: Array<Object>;
  double?: boolean;
}

export const Card = (
  { supertype, name, image, ...props }: ICard,
  draggable: boolean
) => {
  return (
    <Draggable {...props}>
      <ButtonBase
        onMouseOver={() => {
          console.log("name: ", name, " type: ", supertype);
        }}
      >
        <Box
          component="img"
          className="name"
          sx={{
            width: "140px",
            height: "189px",
            border: "5px solid black",
            borderRadius: "5px",
          }}
          src={Charmander}
          alt=""
        />
      </ButtonBase>
    </Draggable>
  );
};
