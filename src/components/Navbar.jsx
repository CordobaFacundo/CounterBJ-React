import React from 'react'

export const Navbar = () => {
  return (
    <nav className="d-flex justify-content-between align-items-center p-3 border-bottom">

      <div className="d-flex align-items-center gap-2">
        <span>RC</span>

        <span className="border px-3 py-1">
          0
        </span>
      </div>

      <div>
        <button className="btn btn-outline-secondary">
          New Shoe
        </button>
      </div>

      <div className="d-flex align-items-center gap-2">
        <span>TC</span>

        <span className="border px-3 py-1">
          0.0
        </span>
      </div>

      <div className="d-flex align-items-center gap-2">
        <span>Decks</span>

        <span className="border px-3 py-1">
          8
        </span>
      </div>

    </nav>
  )
}
