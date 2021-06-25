import axios from 'axios';
import { useQuery } from 'react-query';

async function getAllPosts() {
    const { data } = await axios.get('http://localhost:8000/posts');
    return data;
}

export default function usePosts() {
    return useQuery('posts', getAllPosts);
}
