import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Landing.css';

function Landing() {
  const isAdmin = false;

  return (
    <div className="landing-container">
      <h1 className="title">All-In-One</h1>
      <h1>Sustain, Support, Share – Empowering Students, Reducing Waste!</h1>
      <p className="paragraph">
        💚 Why waste when we can give? All-In-One is your go-to campus sustainability hub!
        Got extra food? Share it. Need essentials? We got you. Want to help? Join the movement.
        Because here, kindness isn’t random—it’s a lifestyle. 🌍✨
      </p>

      <div className="cards-2-container">
        <Link to={isAdmin ? "/admin-options" : "/food-options"} className="card hover">
          <h2>🍽 Sustaining the Pack</h2>
          <p>Leftovers don’t belong in the trash! Registered students can grab extra food instead of it going to waste.</p>
        </Link>

        <Link to="https://packessentials.dasa.ncsu.edu/feed-the-pack/" className="card hover">
          <h2>🛒 Feed the Pack</h2>
          <p>Got groceries you won’t use? Donate them! Need a little extra? We’re here for you. Let’s keep the pack well-fed!</p>
        </Link>

        <Link to="https://packessentials.dasa.ncsu.edu/" className="card hover">
          <h2>🎟 Pack Essentials</h2>
          <p>From meal plans to must-have tickets, we’re hooking you up with the essentials that keep campus life going.</p>
        </Link>

        <Link to="https://docs.google.com/forms/d/e/1FAIpQLSegPhESBCeDQoUKPxt5PB7tZcFup6zVD4LpI6sWTESk_OasIw/viewform?usp=dialog" className="card hover">
          <h2>🙌 Volunteer</h2>
          <p>Make a difference! Help us distribute, organize, and support your fellow students in need. Let’s do this together!</p>
        </Link>
      </div>

    </div>
  );
}

export default Landing