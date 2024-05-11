// import axios from 'axios';

// export const submitLoanRequest = async (data) => {
//   try {
//     const response = await axios.post('http://localhost:3001/POST', data);
//     return response.status === 200;
//   } catch (error) {
//     console.error('Error:', error);
//     return false;
//   }
// };

// export const fetchLoanData = async () => {
//   try {
//     const response = await axios.get('http://localhost:3001/GET');
//     return response.data;
//   } catch (error) {
//     console.error('Error:', error);
//     return null;
//   }
// };

// loanAPI.js
import axios from 'axios';

export const submitLoanRequest = async (data) => {
  try {
    const response = await axios.post('http://localhost:3001/POST', data);
    return response.status === 200;
  } catch (error) {
    console.error('Error submitting loan request:', error);
    return false;
  }
};

export const fetchLoanData = async () => {
  try {
    // Check if loan data is cached in sessionStorage
    const cachedData = sessionStorage.getItem('loanData');
    if (cachedData) {
      return JSON.parse(cachedData);
    }

    const response = await axios.get('http://localhost:3000/GET');
    const loanData = response.data;

    // Cache loan data in sessionStorage
    sessionStorage.setItem('loanData', JSON.stringify(loanData));

    return loanData;
  } catch (error) {
    console.error('Error fetching loan data:', error);
    return null;
  }
};
