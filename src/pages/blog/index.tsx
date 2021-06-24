//  import YearHeader from 'components/ui/year-header';
import { v4 as uuid } from 'uuid';

import './styles.scss';
import usePosts from 'hooks/fetchAllPosts';
import PostCard from 'components/ui/post-card';
import { PostI } from 'components/ui/post-card/types';

function Blog() {
    const posts = usePosts();
    return (
        <div className="blog">
            {posts.data &&
                posts.data.map((post: PostI) => (
                    //  <YearHeader key={uuid()} data={data} /> + BlogPostsDataI
                    <PostCard key={uuid()} post={post} />
                ))}
        </div>
    );
}
export default Blog;
