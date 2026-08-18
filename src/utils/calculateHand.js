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

export const calculateHand = (cards) => {
  const normalizedCards = cards.map(normalizeCard)
  const aces = normalizedCards.filter((card) => card === 'A').length
  const nonAceTotal = normalizedCards.reduce((total, card) => {
    return card === 'A' ? total : total + card
  }, 0)

  let total = nonAceTotal + aces * 11
  let softAces = aces

  while (total > 21 && softAces > 0) {
    total -= 10
    softAces -= 1
  }

  return {
    total,
    isSoft: softAces > 0,
    isPair: normalizedCards.length === 2 && normalizedCards[0] === normalizedCards[1],
    isBust: total > 21,
    isBlackjack: normalizedCards.length === 2 && total === 21,
  }
}
