import { useEffect, useRef } from "react";

function ParticleBackground() {
  const canvasRef = useRef(null);
  const glows = useRef([]);
  const animationId = useRef(null);
  const lastPos = useRef({ x: 0, y: 0 });

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
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 20) return;

      lastPos.current = { x: e.clientX, y: e.clientY };

      glows.current.push({
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 40 + 120,
        age: 0,
        maxAge: 160,
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
        const opacity = Math.sin(progress * Math.PI) * 0.08;

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
