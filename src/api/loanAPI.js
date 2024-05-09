import axios from 'axios';

export const submitLoanRequest = async (data) => {
  try {
    const response = await axios.post('http://localhost:3001/POST', data);
    return response.status === 200;
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
};

export const fetchLoanData = async () => {
  try {
    const response = await axios.get('http://localhost:3001/GET');
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};