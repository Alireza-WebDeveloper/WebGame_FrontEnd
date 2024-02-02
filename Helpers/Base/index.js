import axios from 'axios';

const RequestApi = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export default RequestApi;
