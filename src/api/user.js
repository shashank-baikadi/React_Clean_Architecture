import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001'
});

export function saveUser(user) {
  return instance.post('/users', user);
}