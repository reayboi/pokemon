import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import { Card } from "./Card";
import trainer from "./img/card.jpg";
import charmander from "./img/charmander.png";
import Deck from "./Deck";
import CARD_TYPE from "./enums/cardTypes";

function App() {
  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h1">Pokémon</Typography>
        <br />
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          sx={{ border: "5px solid black" }}
        >
          <Card supertype={CARD_TYPE.POKEMON} name="charmander" image="" />
        </Grid>
        <br />

        <Deck />
      </Grid>
    </div>
  );
}

export default App;
