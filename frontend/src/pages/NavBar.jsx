import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const handleUserSignIn = () => {
        console.log('Sign in attempt')
    }

    return (
        <nav>
            <div>
                <h1><Link to="/">Howl Of Hope</Link></h1>
                <ul>
                    {!isAuthenticated ? (
                        <>
                            <Link onClick={handleUserSignIn}>Sign in with Google</Link>
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