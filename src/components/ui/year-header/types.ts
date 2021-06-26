import { BlogPostsDataI } from '../../../pages/blog/types';
import { PostI } from '../post-card/types';

export interface YearHeaderProps {
    data: PostI[];
    year: string;
}
