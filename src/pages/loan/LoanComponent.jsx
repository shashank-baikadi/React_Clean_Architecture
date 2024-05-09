import React from 'react';
import { useLoanForm } from './LoanForm.logic';
import LoanStyles from './LoanStyles'; // adjust the path as needed

const LoanComponent = ({ config }) => {
  const { data, setData, handleSubmit } = useLoanForm();

  return (
    <form onSubmit={handleSubmit} className={LoanStyles.standard}>
      {config.map((field, index) => {
        if (field.type === 'text') {
          return (
            <div key={index} className={LoanStyles.standard}>
              <label className={LoanStyles.standard.label}>{field.label}</label>
              <input
                type="text"
                placeholder={field.placeholder}
                value={data[field.name] || ''}
                onChange={(e) => setData({ ...data, [field.name]: e.target.value })}
                className={LoanStyles.standard.input}
              />
            </div>
          );
        } else if (field.type === 'options') {
          return (
            <div key={index} className={LoanStyles.standard}>
              <label className={LoanStyles.standard.label}>{field.label}</label>
              <select
                value={data[field.name] || ''}
                onChange={(e) => setData({ ...data, [field.name]: e.target.value })}
                className={LoanStyles.standard.input}
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
      <button type="submit" className='mt-3 bg-blue-50 '>Submit</button>
    </form>
  );
};

export default LoanComponent;