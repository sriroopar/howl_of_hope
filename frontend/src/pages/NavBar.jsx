import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)

    return (
        <nav>
            <div className="wrapper">
                <h1><Link to="/">Howl Of Hope</Link></h1>
                <ul>
                    {!isAuthenticated ? (
                        <>
                            <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>Login</NavLink>
                            <NavLink to="/register" className={({ isActive }) => isActive ? "active" : ""}>Register</NavLink>
                        </>
                    ) : (
                        <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>User Profile</NavLink>
                    )}
                </ul>
            </div>
        </nav >
    )
}

export default NavBar