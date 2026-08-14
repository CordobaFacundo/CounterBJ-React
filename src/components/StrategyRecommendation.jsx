export const StrategyRecommendation = () => {
  return (
    <div className="d-flex justify-content-center gap-4 mt-4">

      <div className="text-center">
        <h5 className="mb-2">Basic Strategy</h5>

        <div className="strategy-result-box border rounded">
          <span className="fs-5 fw-bold">
            HIT
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
