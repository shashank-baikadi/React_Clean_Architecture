import axios from 'axios';

export const submitLoanRequest = async (data) => {
  try {
    const response = await axios.post('http://localhost:3000/loan', data);
    return response.status === 200;
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
};