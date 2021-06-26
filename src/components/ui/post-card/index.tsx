import moment from 'moment';

import { PostI } from './types';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import { BLOG } from 'routes';
import StyledPostCard from './styled';

function PostCard({ post }: { post: PostI }) {
    const date = moment(post.created_at).format('MMMM Do , h:mm:ss a');
    return (
        <StyledPostCard className="post">
            <NavLink to={`${BLOG}/${post.id}`}>
                <h1>{post.title}</h1>
            </NavLink>
            <span>{date}</span>
            <p>{post.description}</p>
        </StyledPostCard>
    );
}
export default PostCard;
