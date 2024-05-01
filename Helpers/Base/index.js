import axios from 'axios';

// const RequestApi = axios.create({
//   baseURL: 'http://localhost:8000/api',
// });

const RequestApi = axios.create({
  baseURL: 'https://web-game-backed.vercel.app/api',
});

export default RequestApi;
