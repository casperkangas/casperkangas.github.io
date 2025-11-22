import "./Projects.css";

export default function Projects() {
  const projectList = [
    { title: "Medicine App",
      description: "A medicine reminder app built with React and classic CSS.",
      link: "https://casperkangas.github.io/medicine-app/"
    },
    { title: "Vite Portfolio Starter",
      description: "Starter portfolio using Vite + React.",
    },
    { title: "Hardware Project Placeholder",
      description: "Example hardware project with placeholder content."
    },
  ];

  return (
    <section id="projects" className="projects container">
      <h2>Projects</h2>
      {projectList.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {/* Link only if provided */}
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link"
            >
              View Project
            </a>
          )}
        </div>
      ))}
    </section>
  );
}