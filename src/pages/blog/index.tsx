import YearHeader from 'components/ui/year-header'
import { useEffect, useState } from 'react'

function Blog() {
    const [posts, setPosts] = useState<any>([])
    // this is temporal
    const years = [
        {
            year: 2021,
            posts: [
                {
                    title: 'marcelarie.com',
                    lang: 'TS',
                    description: 'Portfolio & Personal blog',
                    link: 'https://github.com/marcelarie/marcelarie.com',
                },
                {
                    title: 'Wave In',
                    lang: 'M.E.R.N',
                    description: 'Spotify clone with the MERN stack.',
                    link: 'https://github.com/marcelarie/Wave-In',
                },
            ],
        },
    ]
    useEffect(() => {
        setPosts(years)
    }, [])
    return (
        <div className="my-projects">
            <h1>Projects</h1>
        </div>
    )
}
            // {years &&
            //     years.map(({ year, projects }) => (
            //         <YearHeader year={year} projects={projects} />
            //     ))}

export default Blog
