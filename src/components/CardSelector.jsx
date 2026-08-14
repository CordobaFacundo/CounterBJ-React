import { cards } from '../data/values'

export const CardSelector = ({ onCardClick }) => {
  const firstRowCards = cards.slice(0, 7)
  const secondRowCards = cards.slice(7)

  const handleCardClick = (card) => {
    onCardClick(card);
  };

  const renderCardButton = (card) => (
    <button key={card} onClick={() => handleCardClick(card)} className="card-selector-button btn btn-outline-dark">
      {card}
    </button>
  )

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-column align-items-center gap-2">
        <div className="d-flex flex-wrap justify-content-center gap-2">
          {firstRowCards.map(renderCardButton)}
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-2">
          {secondRowCards.map(renderCardButton)}
        </div>
      </div>
    </div>
  )
}
