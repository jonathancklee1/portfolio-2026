import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import { PROJECTS } from "../data/contants";
function Projects() {
    return (
        <section className="flex flex-col gap-8 lg:gap-12" id="projects">
            <SectionHeader text="My Projects" />
            <div className="grid gap-10 md:grid-cols-2 lg:gap-12">
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
