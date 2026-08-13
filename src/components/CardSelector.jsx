import React from 'react'
import { cards, HI_LO } from '../data/values'

export const CardSelector = () => {

  const handleCardClick = (card) => {
    const hiLoValue = HI_LO[card];
    console.log(`Card: ${card}, Hi-Lo Value: ${hiLoValue}`);
  };

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap justify-content-center gap-2">
        {cards.map((card) => (
          <button key={card} onClick={() => handleCardClick(card)} className="btn btn-outline-dark px-3 py-2">
            {card}
          </button>
        ))}
      </div>
    </div>
  )
}
