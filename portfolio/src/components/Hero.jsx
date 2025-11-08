import React from "react";
import ProfilePic from "../assets/profile-placeholder.png";
import CVFile from "../assets/CV.pdf"; // put your CV in /src/assets/CV.pdf

export default function Hero() {
  return (
    <section className="hero container">
      {/* Left: Text */}
      <div className="hero-text">
        <h1>Hello! 👋</h1>
        <p>Welcome to my computer engineering portfolio. I love building React apps and exploring hardware projects.</p>
        <a href={CVFile} download>
          <button className="button">Download CV</button>
        </a>
        <button className="button">View Projects</button>
      </div>

      {/* Right: Profile image */}
      <div>
        <img
          src={ProfilePic}
          alt="Profile"
          className="profile-img"
        />
      </div>
    </section>
  );
}