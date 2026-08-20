import { ACTIONS } from './actions'

export const DEVIATION_DIRECTIONS = {
  AT_OR_ABOVE: 'AT_OR_ABOVE',
  BELOW: 'BELOW',
}

const { HIT, STAND, DOUBLE, SPLIT, SURRENDER, INSURANCE } = ACTIONS
const { AT_OR_ABOVE, BELOW } = DEVIATION_DIRECTIONS

export const deviations = [
  { group: 'I18', rank: 1, type: 'insurance', dealer: 'A', index: 3, action: INSURANCE, direction: AT_OR_ABOVE },
  { group: 'I18', rank: 2, type: 'hard', total: 16, dealer: 10, index: 0, action: STAND, direction: AT_OR_ABOVE },
  { group: 'I18', rank: 3, type: 'hard', total: 15, dealer: 10, index: 4, action: STAND, direction: AT_OR_ABOVE },
  { group: 'I18', rank: 4, type: 'pair', pairKey: 'TT', dealer: 5, index: 5, action: SPLIT, direction: AT_OR_ABOVE },
  { group: 'I18', rank: 5, type: 'pair', pairKey: 'TT', dealer: 6, index: 4, action: SPLIT, direction: AT_OR_ABOVE },
  { group: 'I18', rank: 6, type: 'hard', total: 10, dealer: 10, index: 4, action: DOUBLE, direction: AT_OR_ABOVE },
  { group: 'I18', rank: 7, type: 'hard', total: 12, dealer: 3, index: 2, action: STAND, direction: AT_OR_ABOVE },
  { group: 'I18', rank: 8, type: 'hard', total: 12, dealer: 2, index: 3, action: STAND, direction: AT_OR_ABOVE },
  { group: 'I18', rank: 9, type: 'hard', total: 11, dealer: 'A', index: 1, action: DOUBLE, direction: AT_OR_ABOVE },
  { group: 'I18', rank: 10, type: 'hard', total: 9, dealer: 2, index: 1, action: DOUBLE, direction: AT_OR_ABOVE },
  { group: 'I18', rank: 11, type: 'hard', total: 10, dealer: 'A', index: 4, action: DOUBLE, direction: AT_OR_ABOVE },
  { group: 'I18', rank: 12, type: 'hard', total: 9, dealer: 7, index: 3, action: DOUBLE, direction: AT_OR_ABOVE },
  { group: 'I18', rank: 13, type: 'hard', total: 16, dealer: 9, index: 5, action: STAND, direction: AT_OR_ABOVE },
  { group: 'I18', rank: 14, type: 'hard', total: 13, dealer: 2, index: -1, action: HIT, direction: BELOW },
  { group: 'I18', rank: 15, type: 'hard', total: 12, dealer: 4, index: 0, action: HIT, direction: BELOW },
  { group: 'I18', rank: 16, type: 'hard', total: 12, dealer: 5, index: -2, action: HIT, direction: BELOW },
  { group: 'I18', rank: 17, type: 'hard', total: 12, dealer: 6, index: -1, action: HIT, direction: BELOW },
  { group: 'I18', rank: 18, type: 'hard', total: 13, dealer: 3, index: -2, action: HIT, direction: BELOW },
  { group: 'Fab 4', rank: 1, type: 'hard', total: 14, dealer: 10, index: 3, action: SURRENDER, direction: AT_OR_ABOVE },
  { group: 'Fab 4', rank: 2, type: 'hard', total: 15, dealer: 9, index: 2, action: SURRENDER, direction: AT_OR_ABOVE },
  { group: 'Fab 4', rank: 3, type: 'hard', total: 15, dealer: 10, index: 0, action: SURRENDER, direction: AT_OR_ABOVE },
  { group: 'Fab 4', rank: 4, type: 'hard', total: 15, dealer: 'A', index: 1, action: SURRENDER, direction: AT_OR_ABOVE },
]
