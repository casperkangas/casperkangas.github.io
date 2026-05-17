import { motion } from "framer-motion";
import "../styles/Hero.css";

const item = (delay) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="hero">
      <motion.span className="hero__greeting" {...item(0.1)}>
        Hello, I am
      </motion.span>

      <motion.h1 className="hero__name" {...item(0.3)}>
        Casper Kangas.
      </motion.h1>

      <motion.p className="hero__title" {...item(0.5)}>
        Computer Engineering Student
      </motion.p>

      <motion.p className="hero__bio" {...item(0.7)}>
        Based in Finland, passionate about software development, machine
        learning, and building things that matter.
      </motion.p>

      <motion.div className="hero__buttons" {...item(0.9)}>
        <button
          className="hero__btn hero__btn--primary"
          onClick={() => scrollTo("projects")}
        >
          View Projects
        </button>
        <a
          className="hero__btn hero__btn--secondary"
          href="/CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
