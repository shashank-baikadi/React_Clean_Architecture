import axios from 'axios';

export const registerUser = async (formData) => {
  try {
    const response = await axios.post('http://localhost:3000/user/register', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.status === 200;
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
};