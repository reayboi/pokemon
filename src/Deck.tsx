import { Box, ButtonBase } from "@mui/material";
import back from "../src/img/back.png";
import deckData from "./data/decks.json";
import cardData from "./data/cards.json";
import React, { useState } from "react";
import { Card } from "./Card";

function createCard(data: any) {
  let card: React.ReactNode;
  switch (data.supertype) {
    case "Pokémon": {
      card = (
        <Card
          name={data.name}
          supertype={data.supertype}
          image={data.images.small}
          hp={data.hp ? parseInt(data.hp) : 0}
          stage={data.subtypes}
          types={data.types}
          weakness={data.weaknesses}
          moves={data.attacks}
          retreatCost={data.retreatCost}
          description={data.flavorText}
        />
      );
      break;
    }
    case "Trainer": {
      card = (
        <Card
          name={data.name}
          supertype={data.supertype}
          image={data.images.small}
          rules={data.rules}
        />
      );
      break;
    }
    case "Energy": {
      let type;
      if (data.name) {
        type = data.name.split(" ")[0];
      }
      card = (
        <Card
          name={data.name}
          supertype={data.supertype}
          image={data.images.small}
          types={data.types}
          double={
            data.subtypes && data.name === "Double Colorless Energy"
              ? true
              : false
          }
          rules={data.rules ? data.rules : []}
        />
      );
      break;
    }
    default: {
      break;
    }
  }
  return card;
}

function loadDeck(): Array<React.ReactNode> {
  let newDeck = new Array<React.ReactNode>();
  deckData.forEach((deck) => {
    if (deck.id === "d-base1-1") {
      deck.cards.forEach((deckCard) => {
        let newCard;
        cardData.forEach((cardCard) => {
          if (deckCard.id === cardCard.id) {
            newCard = createCard(cardCard);
            newDeck.push(newCard);
          }
        });
      });
    }
  });
  return newDeck;
}

const Deck = () => {
  loadDeck();
  const [deck, setDeck] = useState<Array<React.ReactNode>>(loadDeck);
  return (
    <ButtonBase
      onClick={() => {
        console.log(deck);
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
