import { Box, Divider, Grid, Stack } from "@mui/material";
import { Card } from "../Card";
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
          sx={{
            width: "300px",
            height: "350px",
          }}
        >
          <Stack direction="row">
            <Box className="prizeOne">
              <Card supertype={CARD_TYPE.POKEMON} name="charmander" image="" />
            </Box>
            <Box className="prizeTwo">
              <Card supertype={CARD_TYPE.POKEMON} name="charmander" image="" />
            </Box>
          </Stack>
          <Stack
            direction="row"
            sx={{ zIndex: 1, position: "relative", mt: "-85px" }}
          >
            <Box className="prizeThree">
              <Card supertype={CARD_TYPE.POKEMON} name="charmander" image="" />
            </Box>
            <Box className="prizeFour">
              <Card supertype={CARD_TYPE.POKEMON} name="charmander" image="" />
            </Box>
          </Stack>
          <Stack
            direction="row"
            sx={{ zIndex: 1, position: "relative", mt: "-85px" }}
          >
            <Box className="prizeFive">
              <Card supertype={CARD_TYPE.POKEMON} name="charmander" image="" />
            </Box>
            <Box className="prizeSix">
              <Card supertype={CARD_TYPE.POKEMON} name="charmander" image="" />
            </Box>
          </Stack>
        </Box>
        <Box className="bench"></Box>
        <Box className="active"></Box>
        <Box className="deck"></Box>
        <Box className="discard"></Box>
      </Box>
    </Grid>
  );
}

export default Play;
