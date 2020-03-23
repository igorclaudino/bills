import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

const user = localStorage.getItem('@bills/user');
if (user) {
  const { token } = JSON.parse(user);
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default api;
