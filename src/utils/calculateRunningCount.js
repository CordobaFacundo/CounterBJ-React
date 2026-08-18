import { HI_LO } from '../data/values'

export const calculateRunningCount = (cardsHistory) => {
  return cardsHistory.cards.reduce(
    (runningCount, card) => runningCount + HI_LO[card],
    0
  )
}
