import { projectData } from "./project-data";

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projectData && projectData.map((project) => (
                    <a className="project-card-click" href={project.githubLink} key={project.id}>
                        <div className="project-card" key={project.id}>
                            <div className="project-header">
                                <i className="fa fa-folder-open folder-icon" aria-hidden="true"></i>
                                <div className="small-icons">
                                    <a href={project.githubLink}><i className="fa fa-github"></i></a>
                                </div>
                            </div>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>    
                        </div>
                    </a>    
                                        
                ))}
            </div>
        </div>
    )
}

export default Projects;