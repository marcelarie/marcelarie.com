import { YearHeaderProps } from './types';
import PostCard from '../post-card';
import './styles.scss';
import { v4 as uuid } from 'uuid';

function YearHeader({ data, year }: YearHeaderProps) {
    return (
        <div className="year-header">
            <h1 className="year-header__title">{year}</h1>
            {data.map(post => (
                <PostCard key={uuid()} post={post} />
            ))}
        </div>
    );
}
export default YearHeader;
