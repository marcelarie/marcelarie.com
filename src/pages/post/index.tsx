import { useHistory, useParams } from 'react-router-dom';
import usePost from '../../hooks/fetchPostById';
import ReactMarkdown from 'react-markdown';
import codeBlock from '../../components/internal/code-block';
import './styles.scss';
import moment from 'moment';
import { BLOG } from 'routes';

export default function Post() {
    let { id }: { id: string } = useParams();
    const post = usePost(id);
    const history = useHistory();
    console.log(post);
    // TODO: add no id found and 404 error handeling
    if (post.isError || post.failureCount > 2) history.push(BLOG);
    if (post.isLoading || post.isError)
        return (
            <div className="post-loading">
                <h1>Loading...</h1>
            </div>
        );
    const { data } = post;
    const date = moment(data.created_at).format('MMMM Do , h:mm:ss a');

    const getReadingTime = (posts: typeof data) => {
        const total = (posts.body.length + posts.title.length) / 200;
        const decimals = Math.round(total) - total;
        const seconds = (decimals * 0.6).toString().split('.')[1].slice(0, 2);
        return { minutes: Math.trunc(total), seconds };
    };
    const { minutes, seconds } = getReadingTime(data);

    return (
        post.data && (
            <div className="current-post">
                <div className="post-title">
                    <h1>{data.title}</h1>
                    <div>
                        <span>{`read time: ${minutes}m ${seconds}s`}</span>
                        <span>{`${date}`}</span>
                    </div>
                </div>
                <ReactMarkdown
                    components={{
                        code({ className, children }) {
                            const lang = 'language-';

                            if (children && className) {
                                // Removing "language-" because React-Markdown
                                // already added "language-"
                                const language = className.replace(lang, '');
                                const value = children[0];
                                return codeBlock({ language, value });
                            }
                            return children;
                        },
                    }}
                >
                    {data.body}
                </ReactMarkdown>
            </div>
        )
    );
}
