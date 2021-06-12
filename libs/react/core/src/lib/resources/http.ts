import axios from 'axios';

export const http = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
});
