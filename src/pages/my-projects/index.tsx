import ProjectCard from 'components/ui/project-card'
import { useEffect, useState } from 'react'
import './styles.scss'

function MyProjects() {
    const [projects, setProjects] = useState<any>([])
    // this is temporal
    const projectsData = [
        {
            title: 'marcelarie.com',
            lang: ['typescript', 'react', 'redux'],
            description: 'Portfolio & Personal blog',
            link: 'https://github.com/marcelarie/marcelarie.com',
        },
        {
            title: 'wave-in',
            lang: [
                'react',
                'express',
                'redux',
                'mongodb',
                'nodejs',
                'firebase',
            ],
            description: 'Spotify clone with the MERN stack.',
            link: 'https://github.com/marcelarie/Wave-In',
        },
    ]
    useEffect(() => {
        setProjects(projectsData)
    }, [])
    return (
        <div className="my-projects">
            {projects &&
                projects.map((project: typeof projectsData[0]) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
        </div>
    )
}

export default MyProjects
