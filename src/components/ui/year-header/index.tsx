import { YearHeaderProps } from './types'
import PostCard from '../post-card'
import './styles.scss'

function YearHeader({ data }: YearHeaderProps) {
            console.log( data)
    return (
        <div className="year-header">
            <h1 className="year-header__title">{data.year}</h1>
            {data.posts.map((post) => (
                <PostCard key={post.title} post={post} />
            ))}
        </div>
    )
}
export default YearHeader
