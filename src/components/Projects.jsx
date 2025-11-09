import "./Projects.css";

export default function Projects() {
  const projectList = [
    { title: "React App Example", description: "A small React project demonstrating components and state." },
    { title: "Vite Portfolio Starter", description: "Starter portfolio using Vite + React." },
    { title: "Hardware Project Placeholder", description: "Example hardware project with placeholder content." },
  ];

  return (
    <section id="projects" className="projects container">
      <h2>Projects</h2>
      {projectList.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
}