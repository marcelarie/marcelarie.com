import { useParams } from 'react-router-dom';
import usePost from '../../hooks/fetchPostById';
import ReactMarkdown from 'react-markdown';
import codeBlock from '../../components/internal/code-block';

export default function Post() {
    let { id }: { id: string } = useParams();
    const post = usePost(id);
    if (!post.data) return <h1>Loading...</h1>;
    const { data } = post;

    return (
        post.data && (
            <div>
                <h1>{data.title}</h1>
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
