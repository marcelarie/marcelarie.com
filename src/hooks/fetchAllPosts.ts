import axios from 'axios';
import { useQuery } from 'react-query';

async function getAllPosts() {
    const apiUrl = process.env.REACT_APP_API_URL;
    const { data } = await axios.get(`${apiUrl}posts`);
    return data;
}

export default function usePosts() {
    return useQuery('posts', getAllPosts);
}
