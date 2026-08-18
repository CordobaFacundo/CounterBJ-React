import { HI_LO } from '../data/values'

export const calculateRunningCount = (cardsHistory) => {
  return cardsHistory.cards.reduce(
    (runningCount, historyItem) => {
      const card = historyItem.card ?? historyItem

      return runningCount + HI_LO[card]
    },
    0
  )
}
