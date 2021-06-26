import axios from 'axios';
import { useQuery } from 'react-query';

const getContentByIdQueryKey = (id: string) => {
    return ['post', id];
};

const fetchContentById = async (id: string) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const { data } = await axios.get(apiUrl + 'posts/' + id);
    return data;
};

export default function usePost(id: string) {
    return useQuery(getContentByIdQueryKey(id), () => fetchContentById(id));
}
