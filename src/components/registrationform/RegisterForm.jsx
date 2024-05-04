import React from 'react';
import { useRegisterForm } from './RegisterForm.logic';

const RegisterForm = () => {
  const { name, setName, email, setEmail, file, setFile, handleSubmit } = useRegisterForm();

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        className="border-2 border-black"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter your email"
        className="border-2 border-black"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type="file" className="border-2 border-black" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;