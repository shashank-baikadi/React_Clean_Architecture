import { useState } from 'react';
import { registerUser } from '../../api/registerUser';

export function useRegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', name);
    formData.append('email', email);
    formData.append('photo', file);

    const success = await registerUser(formData);
    if (success) {
      console.log('Registration successful');
    } else {
      console.error('Registration failed');
    }
  };

  return { name, setName, email, setEmail, file, setFile, handleSubmit };
}