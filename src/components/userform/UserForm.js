
import { useUserForm } from './UserForm.logic';

function UserForm() {
  const { name, email, phoneNumber, handleChange, handleSubmit } = useUserForm();

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={email} onChange={handleChange} placeholder="Email" />
      <input name="phoneNumber" value={phoneNumber} onChange={handleChange} placeholder="Phone Number" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;