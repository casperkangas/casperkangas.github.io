import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import "../styles/Navbar.css";

const links = ["About", "Skills", "Projects", "Education", "Contact"];

function Navbar({ isDark, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <span className="navbar__logo">CK</span>
      <div className="navbar__right">
        <ul className="navbar__links">
          {links.map((link) => (
            <li key={link}>
              <button onClick={() => scrollTo(link)}>{link}</button>
            </li>
          ))}
        </ul>
        <button className="navbar__theme-toggle" onClick={onToggleTheme}>
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
