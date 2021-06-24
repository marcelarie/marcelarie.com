//  import YearHeader from 'components/ui/year-header';
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import './styles.scss';
import usePosts from 'hooks/fetchAllPosts';
import PostCard from 'components/ui/post-card';
import { PostI } from 'components/ui/post-card/types';

function Blog() {
    // eslint-disable-next-line
    const [postsByYear, setPostsByYear] = useState<any>([]); // this is temporal
    const years = [
        {
            year: 2021,
            posts: [
                {
                    id: 1,
                    title: 'This is a fake post',
                    body: 'This article is interesting',
                    created_at: '2021-06-19T18:06:00.673982',
                    published: false,
                    //                    lang: ['typescript', 'react', 'redux'],
                    //                    tags: ['new', 'fake'],
                },
            ],
        },
        {
            year: 2019,
            posts: [
                {
                    id: 2,
                    title: 'This is another fake post',
                    body: 'This article is old',
                    created_at: '2019-06-19T18:06:00.673982',
                    published: false,
                    //                    lang: ['typescript', 'react', 'redux'],
                    //                   tags: ['fake', 'old'],
                },
            ],
        },
    ];
    const posts = usePosts();
    useEffect(() => {
        setPostsByYear(years);
        // eslint-disable-next-line
    }, []);
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
