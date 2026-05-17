import { Routes, Route } from "react-router-dom";
import ParticleBackground from "./components/ParticleBackground";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ParticleBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
