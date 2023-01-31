import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import PokemonCard from "./PokemonCard";
import trainer from "./img/card.jpg";
import charmander from "./img/charmander.png";
import Deck from "./Deck";

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
          <PokemonCard imageSrc={trainer} />
          <PokemonCard imageSrc={charmander} />
        </Grid>
        <br />

        <Deck />
      </Grid>
    </div>
  );
}

export default App;
