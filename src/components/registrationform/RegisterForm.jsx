import React from 'react';
import { useRegisterForm } from './RegisterForm.logic';

const RegisterForm = () => {
  const { name, setName, email, setEmail, file, setFile, handleSubmit } = useRegisterForm();

  return (
    <form onSubmit={handleSubmit} >
        <div className='bg-blue-50'>
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
      </div>
    </form>
  );
};

export default RegisterForm;