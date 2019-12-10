import axios from 'axios';

const apiUser = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/posts' });
//
export default apiUser;
