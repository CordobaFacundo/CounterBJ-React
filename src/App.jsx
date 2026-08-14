
import { useState } from 'react'
import { HI_LO } from './data/values'
import { CardSelector } from './components/CardSelector'
import { Navbar } from './components/Navbar'
import { StrategyRecommendation } from './components/StrategyRecommendation'

function App() {
  const [runningCount, setRunningCount] = useState(0)
  const [cardsHistory, setCardsHistory] = useState([])

  const handleCardClick = (card) => {
    setRunningCount((currentRunningCount) => currentRunningCount + HI_LO[card])
    setCardsHistory((currentCardsHistory) => {
      const nextHistory = [...currentCardsHistory, card];
      return nextHistory.slice(-6);
    })
  };


  return (
    <div className="container py-4">
      <div className="border rounded-4 overflow-hidden">

        <Navbar runningCount={runningCount} />
        Cards history: {cardsHistory.map((card, index) => (
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

              <button className="btn btn-outline-danger px-4 py-2">
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
