import type { Project } from "../utils/types";

function ProjectCard({ project: project }: { project: Project }) {
    return (
        <div className="relative h-64 w-full items-center justify-center overflow-hidden rounded-2xl border border-white shadow-2xl">
            <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover hover:scale-[1.05]"
            />
            <div className="to-card absolute right-0 bottom-0 left-0 bg-linear-to-b from-transparent p-4 pt-8">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <div className="mt-4 flex gap-4">
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-secondary text-background rounded-3xl px-4 py-2 font-bold"
                    >
                        Live Demo
                    </a>
                    <a
                        href={project.ghLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-secondary text-secondary rounded-3xl border bg-transparent px-4 py-2 font-bold"
                    >
                        Github
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
