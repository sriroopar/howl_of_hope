import React from 'react'
import { Link } from 'react-router-dom'

function FoodOptions() {
  return (
      <div className="landing-container-2">
          <div className="cards-2-container">
              <Link to="/pantry" className="card hover">
                  <h2>Pantry</h2>
              </Link>

              <Link to="/readymade-food" className="card hover">
                  <h2>Ready Made Food</h2>
              </Link>
          </div>

      </div>
  )
}

export default FoodOptions