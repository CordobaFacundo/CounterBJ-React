
import { CardSelector } from './components/cardSelector'
import { Navbar } from './components/Navbar'
import { StrategyRecommendation } from './components/StrategyRecommendation'

function App() {


  return (
    <div className="container py-4">
      <div className="border rounded-4 overflow-hidden">

        <Navbar />

        <div className="p-4">

          <div className="text-center mb-4">
            <h5 className="mb-2">Dealer</h5>

            <div className="d-inline-block border rounded px-4 py-3 fs-5">
              ?
            </div>
          </div>

          <CardSelector />

          <div className="d-flex justify-content-center align-items-center gap-4 mt-4">
            <div className="text-center mt-4">
              <h5 className="mb-2">Player</h5>

              <div className="d-flex justify-content-center gap-2">
                <div className="border rounded px-4 py-3 fs-5">
                  ?
                </div>

                <div className="border rounded px-4 py-3 fs-5">
                  ?
                </div>
              </div>
            </div>
            <button className="btn btn-outline-secondary px-4 py-2 mt-4">
              Next Hand
            </button>
          </div>
          <StrategyRecommendation />
        </div>
      </div>
    </div>
  )
}

export default App
