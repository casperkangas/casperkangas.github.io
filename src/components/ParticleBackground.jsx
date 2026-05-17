import { useEffect, useRef } from "react";

function ParticleBackground() {
  const canvasRef = useRef(null);
  const glows = useRef([]);
  const animationId = useRef(null);
  const lastPos = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e) => {
      const pos = { x: e.clientX, y: e.clientY };

      if (!lastPos.current) {
        lastPos.current = pos;
        return;
      }

      const dx = pos.x - lastPos.current.x;
      const dy = pos.y - lastPos.current.y;

      if (Math.sqrt(dx * dx + dy * dy) < 15) return;

      lastPos.current = pos;

      glows.current.push({
        x: pos.x,
        y: pos.y,
        size: Math.random() * 40 + 120,
        age: 0,
        maxAge: 200,
      });
    };
    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighten";

      glows.current = glows.current.filter((g) => g.age < g.maxAge);

      for (const g of glows.current) {
        g.age++;
        const progress = g.age / g.maxAge;

        // Decay only — no ease-in, always fading from peak
        const opacity = Math.pow(1 - progress, 1.8) * 0.08;

        const gradient = ctx.createRadialGradient(
          g.x,
          g.y,
          0,
          g.x,
          g.y,
          g.size,
        );
        gradient.addColorStop(0, `rgba(226, 218, 219, ${opacity})`);
        gradient.addColorStop(1, `rgba(226, 218, 219, 0)`);

        ctx.beginPath();
        ctx.arc(g.x, g.y, g.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
      animationId.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

export default ParticleBackground;
