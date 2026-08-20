import { deviations, DEVIATION_DIRECTIONS } from '../data/deviations'
import { calculateHand } from './calculateHand'

const FACE_CARDS = new Set(['J', 'Q', 'K'])

const normalizeCard = (card) => {
  if (card === 'A') {
    return 'A'
  }

  if (FACE_CARDS.has(card)) {
    return 10
  }

  return Number(card)
}

const getPairKey = (cards) => {
  const cardValue = normalizeCard(cards[0])

  if (cardValue === 'A') {
    return 'AA'
  }

  if (cardValue === 10) {
    return 'TT'
  }

  return `${cardValue}${cardValue}`
}

const isThresholdMet = (trueCount, deviation) => {
  if (deviation.direction === DEVIATION_DIRECTIONS.BELOW) {
    return trueCount < deviation.index
  }

  return trueCount >= deviation.index
}

const matchesDeviation = ({ deviation, hand, playerCards, dealerValue }) => {
  if (deviation.dealer !== dealerValue) {
    return false
  }

  if (deviation.type === 'insurance') {
    return true
  }

  if (deviation.type === 'pair') {
    return hand.isPair && getPairKey(playerCards) === deviation.pairKey
  }

  if (deviation.type === 'hard') {
    return !hand.isSoft && !hand.isPair && hand.total === deviation.total
  }

  return false
}

export const getDeviation = (playerCards, dealerCard, trueCount) => {
  const dealerValue = normalizeCard(Array.isArray(dealerCard) ? dealerCard[0] : dealerCard)
  const hand = calculateHand(playerCards)

  if (hand.isBust || hand.isBlackjack) {
    return null
  }

  return deviations.find((deviation) => {
    return matchesDeviation({ deviation, hand, playerCards, dealerValue })
      && isThresholdMet(trueCount, deviation)
  }) ?? null
}
