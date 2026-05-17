import { Routes, Route } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const { isDark, toggle } = useTheme();

  return (
    <>
      <ParticleBackground isDark={isDark} />
      <Navbar isDark={isDark} onToggleTheme={toggle} />
      <div style={{ position: "relative", zIndex: 1, paddingTop: "64px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
