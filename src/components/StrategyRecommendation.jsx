import { ACTIONS_LABELS } from '../data/actions'
import { getBasicStrategy } from '../utils/getBasicStrategy'

export const StrategyRecommendation = ({ dealerCards, playerCards }) => {
  const canShowStrategy = dealerCards.length > 0 && playerCards.length > 1
  const recommendation = canShowStrategy
    ? getBasicStrategy(playerCards, dealerCards[0])
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
        <h5 className="mb-2">TC Deviation</h5>
        <div className="strategy-result-box border rounded">
          <span className="fs-5 fw-bold">
            -
          </span>
        </div>
      </div>

    </div>
  )
}
