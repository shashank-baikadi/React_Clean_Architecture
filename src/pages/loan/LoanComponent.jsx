// import React from 'react';
// import { useLoanForm } from './LoanForm.logic';

// const   LoanComponent = () => {
//   const { data, setData, handleSubmit } = useLoanForm();

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* Assuming config is available in this scope */}
//       {config.map((field, index) => {
//         return (
//           <input
//             key={index}
//             type={field.type}
//             placeholder={`Enter your ${field.name}`}
//             value={data[field.name] || ''}
//             onChange={(e) => setData({ ...data, [field.name]: e.target.value })}
//           />
//         );
//       })}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default LoanComponent;


import React from 'react';
import { useLoanForm } from './LoanForm.logic';

const LoanComponent = ({ config }) => {
  const { data, setData, handleSubmit } = useLoanForm();

  return (
    <form onSubmit={handleSubmit}>
      {config.map((field, index) => {
        if (field.type === 'text') {
          return (
            <div key={index}>
              <label>{field.label}</label>
              <input
                type="text"
                placeholder={field.placeholder}
                value={data[field.name] || ''}
                onChange={(e) => setData({ ...data, [field.name]: e.target.value })}
              />
            </div>
          );
        } else if (field.type === 'options') {
          return (
            <div key={index}>
              <label>{field.label}</label>
              <select
                value={data[field.name] || ''}
                onChange={(e) => setData({ ...data, [field.name]: e.target.value })}
              >
                {field.options.map((option, i) => (
                  <option key={i} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          );
        }
        return null;
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoanComponent;