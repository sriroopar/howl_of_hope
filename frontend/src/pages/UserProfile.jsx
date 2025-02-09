import React, { useState, useEffect } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import "../styles/UserProfile.css";

function Profile() {
    const [user, setUser] = useState(null);
    const [studentId, setStudentId] = useState("");
    const [snapStatus, setSnapStatus] = useState("Not Eligible");
    const [howlUsage, setHowlUsage] = useState("None");

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser({
                    displayName: currentUser.displayName,
                    email: currentUser.email,
                    photoURL: currentUser.photoURL,
                });
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    if (!user) {
        return <p className="not-logged-in">Please log in to view your profile.</p>;
    }

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        
        if (checked) {
            setHowlUsage([...howlUsage, value]);
        } else {
            setHowlUsage(howlUsage.filter((option) => option !== value));
        }
    };

    return (
        <div className="profile-container">
            <div className="profile-left">
                <img src={user.photoURL} alt="Profile" className="profile-picture" />
            </div>
            <div className="profile-right">
                <h2>Welcome, {user.displayName.split(" ")[0]}!</h2>
                <p><strong>First Name:</strong> {user.displayName.split(" ")[0]}</p>
                <p><strong>Last Name:</strong> {user.displayName.split(" ")[1] || "N/A"}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <label>
                    <strong>Student ID#:</strong>
                    <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
                </label>
                <label>
                    <strong>SNAP Eligibility Status:</strong>
                    <select value={snapStatus} onChange={(e) => setSnapStatus(e.target.value)}>
                        <option value="Eligible">Eligible</option>
                        <option value="Not Eligible">Not Eligible</option>
                    </select>
                </label>
                <p className="snap-info">
                    Not sure? Check your eligibility
                    <a href="https://www.snapscreener.com/screener/north-carolina" target="_blank" rel="noopener noreferrer">
                        here.
                    </a>
                </p>
                {/* <label><strong>Howl of Hope Usage:</strong></label>
                <div className="howl-options">
                    <div>
                        <input
                            type="checkbox"
                            value="Sustaining the Pack"
                            checked={howlUsage.includes("Sustaining the Pack")}
                            onChange={handleCheckboxChange}
                        />
                        <span>Sustaining the Pack</span>
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            value="Feed the Pack"
                            checked={howlUsage.includes("Feed the Pack")}
                            onChange={handleCheckboxChange}
                        />
                        <span>Feed the Pack</span>
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            value="Pack Essentials"
                            checked={howlUsage.includes("Pack Essentials")}
                            onChange={handleCheckboxChange}
                        />
                        <span>Pack Essentials</span>
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            value="Volunteer"
                            checked={howlUsage.includes("Volunteer")}
                            onChange={handleCheckboxChange}
                        />
                        <span>Volunteer</span>
                    </div>
                </div> */}


            </div>
        </div>
    );
}

export default Profile;
