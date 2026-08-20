import { ACTIONS_LABELS } from '../data/actions'
import { getDeviation } from '../utils/getDeviation'
import { getBasicStrategy } from '../utils/getBasicStrategy'

const formatIndex = (deviation) => {
  if (!deviation) {
    return ''
  }

  const operator = deviation.direction === 'BELOW' ? '<' : '>='
  const sign = deviation.index > 0 ? '+' : ''

  return `TC ${operator} ${sign}${deviation.index}`
}

export const StrategyRecommendation = ({ dealerCards, playerCards, trueCount }) => {
  const canShowStrategy = dealerCards.length > 0 && playerCards.length > 1
  const recommendation = canShowStrategy
    ? getBasicStrategy(playerCards, dealerCards[0])
    : null
  const deviation = canShowStrategy
    ? getDeviation(playerCards, dealerCards[0], trueCount)
    : null

  return (
    <div className="d-flex justify-content-center gap-4 mt-4">

      <div className="text-center">
        <h5 className="mb-2">Basic Strategy</h5>

        <div className="strategy-result-box border rounded">
          <span className="fs-5 fw-bold">
            {recommendation ? ACTIONS_LABELS[recommendation.action] : '-'}
          </span>
        </div>
      </div>

      <div className="text-center">
        <h5 className="mb-2">Deviation</h5>
        <div className="strategy-result-box border rounded">
          {deviation ? (
            <>
              <span className="fs-5 fw-bold d-block">
                {ACTIONS_LABELS[deviation.action]}
              </span>
              <span className="small text-secondary">
                {deviation.group} #{deviation.rank} · {formatIndex(deviation)}
              </span>
            </>
          ) : (
            <span className="fs-5 fw-bold">-</span>
          )}
        </div>
      </div>

    </div>
  )
}
