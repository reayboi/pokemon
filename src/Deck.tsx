import { Box, ButtonBase } from "@mui/material";
import back from "../src/img/back.png";
import deckData from "./data/decks.json";
import cardData from "./data/cards.json";
import React, { useState } from "react";
import CARD_TYPE from "./enums/cardTypes";
import { Card, ICard } from "./Card";

function createCard(data: any) {
  switch (data.supertype) {
    case "Pokémon": {
      <Card
        name={data.name}
        supertype={CARD_TYPE.POKEMON}
        image={data.images.small}
        hp={data.hp}
        stage={data.supertype[0]}
        type={data.types[0]}
        weakness={data.weaknesses ? data.weaknesses : null}
        moves={data.attacks}
        retreatCost={data.retreatCost ? data.retreatCost : null}
        description={data.flavorText}
      />;
      break;
    }
    case "Trainer": {
      <Card
        name={data.name}
        supertype={CARD_TYPE.TRAINER}
        image={data.images.small}
        rules={data.rules}
      />;
      break;
    }
    case "Energy": {
      <Card
        name={data.name}
        supertype={CARD_TYPE.ENERGY}
        image={data.images.small}
        type={data.name.split(" ")[0]}
        double={data.subtypes[0] === "Special" ? true : false}
        rules={data.rules ? data.rules : null}
      />;
      break;
    }
    default: {
      break;
    }
  }
}

function loadDeck() {
  deckData.forEach((deck) => {
    if (deck.id === "d-base1-1") {
      deck.cards.forEach((deckCard) => {
        cardData.forEach((cardCard) => {
          if (deckCard.id == cardCard.id) {
            createCard(cardCard);
          }
        });
      });
    }
  });
}

const Deck = () => {
  const [deck, setDeck] = useState<Array<ICard>>([]);
  return (
    <ButtonBase
      onClick={() => {
        loadDeck();
        // console.log(deck.length);
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
