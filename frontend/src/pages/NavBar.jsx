import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { auth, googleProvider } from '../config/firebase';
import { signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';

function NavBar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const isAdmin = localStorage.getItem('isAdmin') || false

    // Check authentication state on component mount
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                setIsAuthenticated(true);
                localStorage.setItem('isAuthenticated', 'true'); // Save state to localStorage
            } else {
                // User is signed out
                setIsAuthenticated(false);
                localStorage.removeItem('isAuthenticated'); // Remove state from localStorage
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            alert('Signed in successfully with Google');
        } catch (error) {
            console.error('Error signing in with Google', error);
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            alert('User signed out successfully');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    const handleUserSignIn = () => {
        signInWithGoogle();
    };

    const handleUserSignOut = () => {
        handleSignOut();
    };

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
                            <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>{isAdmin ? 'Admin' : 'User Profile'}</NavLink> |
                            <Link onClick={handleUserSignOut}>Sign Out</Link>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;