import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <Link to="/">Howl Of Hope</Link>
            <ul>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/profile">User Profile</Link>
            </ul>
        </nav>
    )
}

export default NavBar