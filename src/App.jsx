
import { useState } from 'react'
import { INITIAL_DECKS } from './data/values'
import { CardSelector } from './components/CardSelector'
import { Navbar } from './components/Navbar'
import { StrategyRecommendation } from './components/StrategyRecommendation'
import { calculateRunningCount } from './utils/calculateRunningCount'

function App() {
  const [cardsHistory, setCardsHistory] = useState({
    cards: [],
    target: null
  })
  const [decksRemaining, setDecksRemaining] = useState(INITIAL_DECKS)

  const runningCount = calculateRunningCount(cardsHistory)
  const visibleCardsHistory = cardsHistory.cards.slice(-6)

  const handleCardClick = (card) => {
    setCardsHistory((currentCardsHistory) => {
      return {
        ...currentCardsHistory,
        cards: [...currentCardsHistory.cards, card]
      }
    })
  }

  const handleUndoClick = () => {
    setCardsHistory((currentCardsHistory) => {
      return {
        ...currentCardsHistory,
        cards: currentCardsHistory.cards.slice(0, -1)
      }
    })
  }

  const handleNewShoe = () => {
    setCardsHistory({
      cards: [],
      target: null
    })
    setDecksRemaining(INITIAL_DECKS)
  }

  return (
    <div className="container py-4">
      <div className="border rounded-4 overflow-hidden">

        <Navbar
          runningCount={runningCount}
          decksRemaining={decksRemaining}
          onNewShoe={handleNewShoe}
        />
        Cards history: {visibleCardsHistory.map((card, index) => (
          <span key={index} className="me-2">{card}</span>
        ))}

        <div className="p-4">

          <div className="d-flex flex-wrap justify-content-center align-items-start gap-5 mb-4">
            <div className="text-center">
              <h5 className="mb-2">Dealer</h5>

              <div className="blackjack-card-slot border rounded fs-5">
                ?
              </div>
            </div>

            <div className="text-center">
              <h5 className="mb-2">Others</h5>

              <div className="d-flex justify-content-center gap-2">
                <div className="blackjack-card-slot border rounded fs-5">
                  ?
                </div>

                <div className="blackjack-card-slot border rounded fs-5">
                  ?
                </div>

                <div className="blackjack-card-slot border rounded fs-5">
                  ?
                </div>
              </div>
            </div>
          </div>

          <CardSelector onCardClick={handleCardClick} />

          <div className="d-flex justify-content-center align-items-center gap-4 mt-4">
            <div className="text-center mt-4">
              <h5 className="mb-2">Player</h5>

              <div className="d-flex justify-content-center gap-2">
                <div className="blackjack-card-slot border rounded fs-5">
                  ?
                </div>

                <div className="blackjack-card-slot border rounded fs-5">
                  ?
                </div>
              </div>
            </div>
            <div className="d-flex flex-column gap-2 mt-4">
              <button className="btn btn-outline-secondary px-4 py-2">
                Next Hand
              </button>

              <button
                className="btn btn-outline-danger px-4 py-2"
                onClick={handleUndoClick}
                disabled={cardsHistory.cards.length === 0}
              >
                <span aria-hidden="true" className="me-2">&larr;</span>
                Undo
              </button>
            </div>
          </div>
          <StrategyRecommendation />
        </div>
      </div>
    </div>
  )
}

export default App
