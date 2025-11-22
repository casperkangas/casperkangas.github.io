import "../stylesnp/Projects.css";

export default function Projects() {
  const projectList = [
    {
      title: "Medicine App",
      description: "A simple medicine reminder app built with React CSS.",
      link: "https://casperkangas.github.io/medicine-app/"
    },
    {
      title: "Placeholder Project",
      description: "Placeholder description.",
      link: null
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