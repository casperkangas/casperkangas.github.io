import "./Hero.css";
import ProfilePic from "../assets/CV-pic.png";
import CVFile from "../assets/CV.pdf";

export default function Hero() {
  return (
    <section className="hero container">
      {/* Left: Text Content */}
      <div className="hero-text">
        <h1 className="hero-title">
          Hi, I’m <span className="highlight">Casper Kangas</span> 👋
        </h1>
        <h2 className="hero-subtitle">
          Computer Engineering Student & Customer Service Professional
        </h2>

        <p className="hero-description">
          I’m a Computer Engineering student at Åbo Akademi University,
          passionate about technology, business, and problem-solving.
          I enjoy creating meaningful digital solutions while continuously
          improving my technical and interpersonal skills.
        </p>

        <p className="hero-description">
          With experience in customer service, banking, and IT, I bring a strong
          mix of analytical thinking, communication, and adaptability to
          everything I do. Whether it’s coding a project or supporting clients,
          I focus on precision, teamwork, and growth.
        </p>

        <div className="hero-buttons">
          <a href={CVFile} download>
            <button className="button primary">Download CV</button>
          </a>
          <a href="#projects">
            <button className="button secondary">View Projects</button>
          </a>
        </div>
      </div>

      {/* Right: Profile Image */}
      <div className="hero-image">
        <img src={ProfilePic} alt="Casper Kangas" className="profile-img" />
      </div>
    </section>
  );
}