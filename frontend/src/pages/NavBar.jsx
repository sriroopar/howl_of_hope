import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { auth, googleProvider } from '../config/firebase';  
import { signInWithPopup } from 'firebase/auth';
import { signOut } from 'firebase/auth';

function NavBar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const signInWithGoogle = async () => {
        try {
          await signInWithPopup(auth, googleProvider);
          alert('Signed in successfully with Google');
          setIsAuthenticated(prev=>!prev)
        } catch (error) {
          console.error('Error signing in with Google', error);
        }
      };

    const handleSignOut = async () => {
        try {
          await signOut(auth);
          alert('User signed out successfully');
          setIsAuthenticated(prev=>!prev)
        } catch (error) {
          console.error('Error signing out:', error);
        }
      };  

    const handleUserSignIn = () => {
        signInWithGoogle()
    }

    const handleUserSignOut = () => {
        console.log("Sign out")
        handleSignOut()
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
                        <>
                        <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>User Profile</NavLink>
                        <Link onClick={handleUserSignOut}>Sign Out</Link>
                        </> 
                    )}
                </ul>
                
            </div>
        </nav >
    )
}

export default NavBar