import YearHeader from 'components/ui/year-header'
import { useEffect, useState } from 'react'
import { BlogPostsDataI } from './types'
import './styles.scss'

function Blog() {
    const [postsByYear, setPostsByYear] = useState<any>([])
    // this is temporal
    const years = [
        {
            year: 2021,
            posts: [
                {
                    title: 'This is a fake post',
                    lang: ['typescript', 'react', 'redux'],
                    description: 'This article is interesting',
                    date: '28-Nov-2021',
                    tags: ['new', 'fake'],
                },
            ],
        },
        {
            year: 2019,
            posts: [
                {
                    title: 'This is another fake post',
                    lang: ['typescript', 'react', 'redux'],
                    description: 'This article is old',
                    date: '28-Nov-2019',
                    tags: ['fake', 'old'],
                },
            ],
        },
    ]
    useEffect(() => {
        setPostsByYear(years)
    }, [])
    return (
        <div className="blog">
            {postsByYear &&
                postsByYear.map((data: BlogPostsDataI) => (
                    <YearHeader data={data} />
                ))}
        </div>
    )
}
export default Blog
