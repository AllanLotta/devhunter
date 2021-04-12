import axios from 'axios';

export const baseURL = 'http://localhost:3333';

// the method below don't let us to do http request only https. If you use a https service it's work fine
// import axios from 'axios';

const api = axios.create({
  baseURL,
  headers: {
    'Content-type': 'application/json; charset=utf-8',
  },
});

export default api;
