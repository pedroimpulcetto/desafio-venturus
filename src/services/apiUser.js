import axios from 'axios';

const apiUser = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/users' });
//
export default apiUser;
