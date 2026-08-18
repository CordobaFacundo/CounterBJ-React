
import { useState } from 'react'
import { CARD_TARGETS } from './data/cardTargets'
import { INITIAL_DECKS } from './data/values'
import { CardSelector } from './components/CardSelector'
import { Dealer } from './components/Dealer'
import { Navbar } from './components/Navbar'
import { Others } from './components/Others'
import { Player } from './components/Player'
import { StrategyRecommendation } from './components/StrategyRecommendation'
import { calculateRunningCount } from './utils/calculateRunningCount'

const getNextActiveTarget = ({ activeTarget, dealerCards }) => {
  if (activeTarget === CARD_TARGETS.DEALER && dealerCards.length === 1) {
    return CARD_TARGETS.PLAYER
  }

  return activeTarget
}

const getCardsHistoryCards = (cardsHistory) => {
  return cardsHistory.cards.map((historyItem) => historyItem.card ?? historyItem)
}

function App() {
  const [cardsHistory, setCardsHistory] = useState({
    cards: []
  })
  const [decksRemaining, setDecksRemaining] = useState(INITIAL_DECKS)

  const runningCount = calculateRunningCount(cardsHistory)
  const visibleCardsHistory = getCardsHistoryCards(cardsHistory).slice(-6)

  const [dealerCards, setDealerCards] = useState([])
  const [playerCards, setPlayerCards] = useState([])
  const [othersCards, setOthersCards] = useState([])

  const [activeTarget, setActiveTarget] = useState(CARD_TARGETS.DEALER)

  const handleCardClick = (card) => {
    const target = activeTarget
    const nextDealerCards = target === CARD_TARGETS.DEALER
      ? [...dealerCards, card]
      : dealerCards
    const nextPlayerCards = target === CARD_TARGETS.PLAYER
      ? [...playerCards, card]
      : playerCards
    const nextOthersCards = target === CARD_TARGETS.OTHERS
      ? [...othersCards, card]
      : othersCards
    const nextActiveTarget = getNextActiveTarget({
      activeTarget: target,
      dealerCards: nextDealerCards
    })

    setCardsHistory((currentCardsHistory) => {
      return {
        ...currentCardsHistory,
        cards: [
          ...currentCardsHistory.cards,
          {
            card,
            target,
            activeTargetBefore: activeTarget,
            activeTargetAfter: nextActiveTarget
          }
        ]
      }
    })
    setDealerCards(nextDealerCards)
    setPlayerCards(nextPlayerCards)
    setOthersCards(nextOthersCards)
    setActiveTarget(nextActiveTarget)
  }

  const handleUndoClick = () => {
    const lastHistoryItem = cardsHistory.cards.at(-1)

    if (!lastHistoryItem) {
      return
    }

    setCardsHistory((currentCardsHistory) => {
      return {
        ...currentCardsHistory,
        cards: currentCardsHistory.cards.slice(0, -1)
      }
    })
    setActiveTarget(lastHistoryItem.activeTargetBefore)

    if (lastHistoryItem.target === CARD_TARGETS.DEALER) {
      setDealerCards((currentDealerCards) => currentDealerCards.slice(0, -1))
    }

    if (lastHistoryItem.target === CARD_TARGETS.PLAYER) {
      setPlayerCards((currentPlayerCards) => currentPlayerCards.slice(0, -1))
    }

    if (lastHistoryItem.target === CARD_TARGETS.OTHERS) {
      setOthersCards((currentOthersCards) => currentOthersCards.slice(0, -1))
    }
  }

  const handleNextHand = () => {
    setDealerCards([])
    setPlayerCards([])
    setOthersCards([])
    setActiveTarget(CARD_TARGETS.DEALER)
  }

  const handleNewShoe = () => {
    setCardsHistory({
      cards: []
    })
    setDecksRemaining(INITIAL_DECKS)
    handleNextHand()
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
            <Dealer
              cards={dealerCards}
              isActive={activeTarget === CARD_TARGETS.DEALER}
              onSelect={() => setActiveTarget(CARD_TARGETS.DEALER)}
            />

            <Others
              cards={othersCards}
              isActive={activeTarget === CARD_TARGETS.OTHERS}
              onSelect={() => setActiveTarget(CARD_TARGETS.OTHERS)}
            />
          </div>

          <CardSelector onCardClick={handleCardClick} />

          <div className="d-flex justify-content-center align-items-center gap-4 mt-4">
            <div className="text-center mt-4">
              <Player
                cards={playerCards}
                isActive={activeTarget === CARD_TARGETS.PLAYER}
                onSelect={() => setActiveTarget(CARD_TARGETS.PLAYER)}
              />
            </div>
            <div className="d-flex flex-column gap-2 mt-4">
              <button
                className="btn btn-outline-secondary px-4 py-2"
                onClick={handleNextHand}
              >
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
