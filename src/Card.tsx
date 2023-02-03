import { Box, ButtonBase } from "@mui/material";
import React from "react";
import Draggable from "react-draggable";
import Charmander from "./img/charmander.png";
import CARD_TYPE from "./enums/cardTypes";
import ENERGY_TYPE from "./enums/energy";
import STAGES from "./enums/stages";

export interface IMoves {
  convertedEnergyCost?: number;
  cost?: Array<ENERGY_TYPE>;
  damage?: string;
  name: string;
  text?: string;
}

export interface IWeakness {
  type: ENERGY_TYPE;
  value: string;
}

export interface IResistance {
  type: ENERGY_TYPE;
  value: string;
}

export interface IAbility {
  name: string;
  text: string;
  type: string;
}

export interface ICard {
  supertype: CARD_TYPE;
  name: string;
  image: string;
  rules?: Array<string>;
  description?: string;
  hp?: number;
  type?: ENERGY_TYPE;
  stage?: STAGES;
  retreatCost?: Array<ENERGY_TYPE>;
  weakness?: Array<IWeakness>;
  resistance?: Array<IResistance>;
  ability?: Array<IAbility>;
  moves?: Array<IMoves>;
  double?: boolean;
}

export const Card = ({ supertype, name, image, ...props }: ICard) => {
  return (
    <Draggable>
      <ButtonBase
        onMouseOver={() => {
          console.log("name: ", name, " type: ", supertype);
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
          src={Charmander}
          alt=""
        />
      </ButtonBase>
    </Draggable>
  );
};
