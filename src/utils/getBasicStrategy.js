import { ACTIONS } from '../data/actions'
import { hardStrategy, pairStrategy, softStrategy } from '../data/basicStrategy'
import { surrenderStrategy } from '../data/surrenderStrategy'
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

const getSoftKey = (total) => {
  return `A${total - 11}`
}

const getHardAction = (total, dealerCard) => {
  if (hardStrategy[total]?.[dealerCard]) {
    return hardStrategy[total][dealerCard]
  }

  if (total <= 8) {
    return ACTIONS.HIT
  }

  return ACTIONS.STAND
}

export const getBasicStrategy = (playerCards, dealerCard) => {
  const dealerValue = normalizeCard(Array.isArray(dealerCard) ? dealerCard[0] : dealerCard)
  const hand = calculateHand(playerCards)

  if (hand.isBust) {
    return {
      action: ACTIONS.BUST,
      handType: 'bust',
      total: hand.total,
    }
  }

  if (hand.isBlackjack) {
    return {
      action: ACTIONS.BLACKJACK,
      handType: 'blackjack',
      total: hand.total,
    }
  }

  if (!hand.isSoft && !hand.isPair) {
    const surrenderAction = surrenderStrategy[hand.total]?.[dealerValue]

    if (surrenderAction) {
      return {
        action: surrenderAction,
        handType: 'hard',
        total: hand.total,
      }
    }
  }

  if (hand.isPair) {
    const pairKey = getPairKey(playerCards)

    return {
      action: pairStrategy[pairKey]?.[dealerValue] ?? getHardAction(hand.total, dealerValue),
      handType: 'pair',
      total: hand.total,
    }
  }

  if (hand.isSoft) {
    const softKey = getSoftKey(hand.total)

    return {
      action: softStrategy[softKey]?.[dealerValue] ?? ACTIONS.STAND,
      handType: 'soft',
      total: hand.total,
    }
  }

  return {
    action: getHardAction(hand.total, dealerValue),
    handType: 'hard',
    total: hand.total,
  }
}
