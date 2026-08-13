import React from 'react'
import { cards, HI_LO } from '../data/values'

export const CardSelector = () => {

  const handleCardClick = (card) => {
    const hiLoValue = HI_LO[card];
    console.log(`Card: ${card}, Hi-Lo Value: ${hiLoValue}`);
  };

  return (
    <div>
      {cards.map((card) => (
        <button key={card} onClick={() => handleCardClick(card)}>
          {card}
        </button>
      ))}
    </div>
  )
}
