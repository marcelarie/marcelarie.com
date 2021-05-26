import { PostI } from './types'
import './styles.scss'
import { NavLink } from 'react-router-dom'
import { HOME } from 'routes'
import StyledPostCard from './styled'

function PostCard({ post }: PostI) {
    return (
        <StyledPostCard className="post">
            <NavLink to={HOME}>
                <h1>{post.title}</h1>
            </NavLink>
            <p>{post.description}</p>
        </StyledPostCard>
    )
}
export default PostCard
