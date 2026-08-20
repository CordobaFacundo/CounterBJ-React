import { useEffect, useRef, useState } from 'react'
import { DECK_STEP, INITIAL_DECKS } from '../data/values'

const MIN_DECKS = 0.5
const SLIDER_CLOSE_DELAY = 900

export const Navbar = ({
  runningCount,
  decksRemaining,
  onDecksRemainingChange,
  onNewShoe
}) => {
  const [isDeckSliderOpen, setIsDeckSliderOpen] = useState(false)
  const closeTimerRef = useRef(null)

  const trueCount = decksRemaining > 0
    ? runningCount / decksRemaining
    : 0

  const handleDecksChange = (event) => {
    onDecksRemainingChange(Number(event.target.value))

    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
    }

    closeTimerRef.current = setTimeout(() => {
      setIsDeckSliderOpen(false)
    }, SLIDER_CLOSE_DELAY)
  }

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current)
      }
    }
  }, [])

  return (
    <nav className="d-flex justify-content-between align-items-center p-3 border-bottom">

      <div className="d-flex align-items-center gap-2">
        <span>RC</span>

        <span className="border px-3 py-1">
          {runningCount}
        </span>
      </div>

      <div className="d-flex align-items-center gap-2">
        <span>TC</span>

        <span className="border px-3 py-1">
          {trueCount.toFixed(1)}
        </span>
      </div>

      <div className="position-relative">
        <button
          className="btn btn-outline-secondary d-flex align-items-center gap-2"
          type="button"
          aria-expanded={isDeckSliderOpen}
          onClick={() => setIsDeckSliderOpen((isOpen) => !isOpen)}
        >
          <span>Decks</span>

          <span className="border-start ps-2">
            {decksRemaining}
          </span>
        </button>

        {isDeckSliderOpen && (
          <div className="position-absolute top-100 start-50 translate-middle-x mt-2 p-3 bg-white border rounded shadow z-3">
            <input
              className="form-range"
              type="range"
              min={MIN_DECKS}
              max={INITIAL_DECKS}
              step={DECK_STEP}
              value={decksRemaining}
              aria-label="Decks remaining"
              style={{ width: 220 }}
              onChange={handleDecksChange}
            />

            <div className="d-flex justify-content-between align-items-center small text-secondary">
              <span>{MIN_DECKS}</span>
              <strong className="text-body">{decksRemaining}</strong>
              <span>{INITIAL_DECKS}</span>
            </div>
          </div>
        )}
      </div>

      <div>
        <button className="btn btn-outline-secondary" onClick={onNewShoe}>
          New Shoe
        </button>
      </div>
    </nav>
  )
}
