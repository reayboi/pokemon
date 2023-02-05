import { Box, Divider, Grid, Stack } from "@mui/material";
import React from "react";
import { Card } from "../Card";
import trainer from "./img/card.jpg";
import charmander from "./img/charmander.png";
import Deck from "../Deck";
import CARD_TYPE from "../enums/cardTypes";

function Play() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box
        className="opponent"
        width="97.5vw"
        height="47.5vh"
        sx={{ backgroundColor: "#f1f1ef", borderRadius: "10px" }}
      >
        <Deck />
      </Box>
      <Divider sx={{ borderBottomWidth: 5 }} />
      <Box
        className="player"
        width="97.5vw"
        height="47.5vh"
        sx={{ backgroundColor: "#f10013", borderRadius: "10px" }}
      >
        <Box
          className="prizes"
          sx={{ width: "150px", height: "202.5px", backgroundColor: "purple" }}
        ></Box>
        <Box className="bench"></Box>
        <Box className="active"></Box>
        <Box className="deck"></Box>
        <Box className="discard"></Box>
        <Card supertype={CARD_TYPE.POKEMON} name="charmander" image="" />
      </Box>
    </Grid>
  );
}

export default Play;
