import { useState } from 'react';
import { saveUser } from '../../api/user';

export function useUserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phoneNumber':
        setPhoneNumber(value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    saveUser({ name, email, phoneNumber });
  }

  return { name, email, phoneNumber, handleChange, handleSubmit };
}