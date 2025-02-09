import React from 'react'
import { Link } from 'react-router-dom'

function AdminOptions() {
    return (
        <div className="landing-container-2">
            <div className="cards-2-container">
                <Link to="/today-menu" className="card hover">
                    <h2>Today's Menu</h2>
                </Link>

                <Link to="/edit-items" className="card hover">
                    <h2>Edit current items</h2>
                </Link>
            </div>

        </div>
    )
}

export default AdminOptions