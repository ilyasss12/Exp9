// main.js

import axios from "../axios";

axios.get('/api/endpoint')
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
