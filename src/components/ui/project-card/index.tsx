import { ProjectCardProps } from './types'
import SProjectCard from './styled'
import './styles.scss'

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <SProjectCard className="project-card">
            <a target="_blank" rel="noreferrer" href={project.link}>
                {project.title}
            </a>
            <p>{project.description}</p>
            {project.lang.map((lang: string) => <i key={lang} className={`devicon-${lang}-plain  devicon-${lang}-original colored`} ></i>
                )}
        </SProjectCard>
    )
}

export default ProjectCard
