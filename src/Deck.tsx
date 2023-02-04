import { Box, ButtonBase } from "@mui/material";
import back from "../src/img/back.png";
import deckData from "./data/decks.json";
import cardData from "./data/cards.json";
import React, { useState } from "react";
import { Card } from "./Card";

function createCard(data: any) {
  switch (data.supertype) {
    case "Pokémon": {
      return (
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
    }
    case "Trainer": {
      return (
        <Card
          name={data.name}
          supertype={data.supertype}
          image={data.images.small}
          rules={data.rules}
        />
      );
    }
    case "Energy": {
      return (
        <Card
          name={data.name}
          supertype={data.supertype}
          image={data.images.small}
          types={data.name.split(" ")[0]}
          double={data.subtypes.includes("Special") ? true : false}
          rules={data.rules ? data.rules : []}
        />
      );
    }
    default: {
      break;
    }
  }
}

function loadDeck() {
  let newDeck = new Array<React.ReactElement>();
  deckData.forEach((deck) => {
    if (deck.id === "d-base1-1") {
      deck.cards.forEach((deckCard) => {
        let newCard;
        cardData.forEach((cardCard) => {
          if (deckCard.id === cardCard.id) {
            newCard = createCard(cardCard);
            newDeck.push(newCard!);
          }
        });
      });
    }
  });
  return newDeck;
}

const Deck = () => {
  loadDeck();
  const [deck, setDeck] = useState<Array<React.ReactElement>>(loadDeck);
  return (
    <ButtonBase
      onClick={() => {
        deck.map((card) => {
          console.log(
            "card name: ",
            card.props.name,
            ", card type: ",
            card.props.supertype
          );
        });
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
