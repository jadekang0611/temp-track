import axios from 'axios';

export default axios.create({
  // uncomment for testing with local api
  // baseURL: 'http://localhost:8000/',
  baseURL: 'https://powerful-chamber-61617.herokuapp.com',
});
