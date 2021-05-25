import { YearHeaderProps } from './types'
import './styles.scss'

function YearHeader({ year, projects }: YearHeaderProps) {
    return (
        <div className="year-header">
            <h1>{year}</h1>
        </div>
    )
}
// {projects.map((project) => (
//     // PostCard ↴
//     <ProjectCard project={project} />
// ))}
export default YearHeader
