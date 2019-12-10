import axios from 'axios';

const apiUser = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/photos' });
//
export default apiUser;
