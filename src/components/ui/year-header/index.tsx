import ProjectCard from 'components/ui/project-card'
import { YearHeaderProps } from './types'
import './styles.scss'

function YearHeader({ year, projects }: YearHeaderProps) {
    return (
        <div className="year-header">
            <h1>{year}</h1>
            {projects.map((project) => (
                // PostCard ↴
                <ProjectCard project={project} />
            ))}
        </div>
    )
}
export default YearHeader
