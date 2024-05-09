// api.js
import axios from 'axios';

export const fetchLoanData = async () => {
  try {
    const response = await axios.get('http://localhost:3001/GET');
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};