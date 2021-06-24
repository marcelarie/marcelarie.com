import axios from 'axios';
import { useQuery } from 'react-query';

const getContentByIdQueryKey = (id: string) => {
    return ['post', id];
};

const fetchContentById = async (id: string) => {
    const { data } = await axios.get('http://localhost:8000/posts/' + id);
    return data;
};

export default function usePost(id: string) {
    return useQuery(getContentByIdQueryKey(id), () => fetchContentById(id));
}
