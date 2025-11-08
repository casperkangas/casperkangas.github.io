export default function Navbar({ darkMode, setDarkMode }) {
    return (
        <nav>
            <h2>My Portfolio</h2>
            <div className="nav-links">
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>

                {/* Dark/Light toggle switch */}
                <div className="toggle-switch" onClick={() => setDarkMode(!darkMode)}>
                    <div className={`toggle-thumb ${darkMode ? "dark" : "light"}`}></div>
                </div>
            </div>
        </nav>
    );
}