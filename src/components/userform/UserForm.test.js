
// import { render, fireEvent } from '@testing-library/react';
// import UserForm from './UserForm';
// import { saveUser } from '../api/user';

// jest.mock('../../api/user.js');

// test('submits the form', () => {
//   saveUser.mockResolvedValueOnce();

//   const { getByPlaceholderText, getByRole } = render(<UserForm />);

//   fireEvent.change(getByPlaceholderText('Name'), { target: { value: 'John Doe' } });
//   fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'john.doe@example.com' } });
//   fireEvent.change(getByPlaceholderText('Phone Number'), { target: { value: '1234567890' } });

//   fireEvent.click(getByRole('button'));

//   expect(saveUser).toHaveBeenCalledWith({
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     phoneNumber: '1234567890',
//   });
// });

import { render, fireEvent } from '@testing-library/react';
import UserForm from './UserForm';
import { saveUser } from '../../api/user';

jest.mock('../../api/user'); // Corrected path

test('submits the form', () => {
  saveUser.mockResolvedValueOnce();

  const { getByPlaceholderText, getByRole } = render(<UserForm />);

  fireEvent.change(getByPlaceholderText('Name'), { target: { value: 'John Doe' } });
  fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'john.doe@example.com' } });
  fireEvent.change(getByPlaceholderText('Phone Number'), { target: { value: '1234567890' } });

  fireEvent.click(getByRole('button'));

  expect(saveUser).toHaveBeenCalledWith({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '1234567890',
  });
});