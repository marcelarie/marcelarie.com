import YearHeader from 'components/ui/year-header';
import { v4 as uuid } from 'uuid';

import './styles.scss';
import usePosts from 'hooks/fetchAllPosts';
import { PostI } from 'components/ui/post-card/types';

type PostByYearT = {
    [key: string]: PostI[];
};

function Blog() {
    const postsQuery = usePosts();
    const postByYear: PostByYearT = {};

    const orderPostByYear = (posts: typeof postsQuery) => {
        if (posts.data) {
            posts.data.forEach((post: PostI) => {
                const year = post.created_at.slice(0, 4);
                postByYear[year]
                    ? postByYear[year].push(post)
                    : (postByYear[year] = [post]);
            });
        }
    };

    orderPostByYear(postsQuery);

    const printPostsByYear = (postByYear: PostByYearT) => {
        for (const post in postByYear) {
            return (
                <YearHeader key={uuid()} data={postByYear[post]} year={post} />
            );
        }
    };

    return <div className="blog">{printPostsByYear(postByYear)}</div>;
}
export default Blog;
