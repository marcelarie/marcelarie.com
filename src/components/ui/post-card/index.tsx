import {  PostI } from './types';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import { BLOG } from 'routes';
import StyledPostCard from './styled';

function PostCard({ post }: { post: PostI}) {
    return (
        <StyledPostCard className="post">
            <NavLink to={`${BLOG}/${post.id}`}>
                <h1>{post.title}</h1>
            </NavLink>
            <p>{post.description}</p>
        </StyledPostCard>
    );
}
export default PostCard;
