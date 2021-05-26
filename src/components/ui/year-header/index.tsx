import { YearHeaderProps } from './types'
import PostCard from '../post-card'
import './styles.scss'

function YearHeader({ data }: YearHeaderProps) {
    return (
        <div className="year-header">
            <h1 className="year-header__title">{data.year}</h1>
            {data.posts.map((post) => (
                <PostCard post={post} />
            ))}
        </div>
    )
}
export default YearHeader
