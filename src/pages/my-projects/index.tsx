import ProjectCard from 'components/ui/project-card'
import { useEffect, useState } from 'react'
import './styles.scss'

function MyProjects() {
    const [projects, setProjects] = useState<any>([])
    // this is temporal
    const projectsData = [
        {
            title: 'marcelarie.com',
            lang: ['typescript'],
            description: 'Portfolio & Personal blog',
            link: 'https://github.com/marcelarie/marcelarie.com',
        },
        {
            title: 'wave-in',
            lang: ['mongodb', 'react'],
            description: 'Spotify clone with the MERN stack.',
            link: 'https://github.com/marcelarie/Wave-In',
        },
    ]
    useEffect(() => {
        setProjects(projectsData)
    }, [])
    return (
        <div className="my-projects">
            <h1>Projects</h1>
            {projects &&
                projects.map((project: typeof projectsData[0]) => (
                    <ProjectCard project={project} />
                ))}
        </div>
    )
}

export default MyProjects
