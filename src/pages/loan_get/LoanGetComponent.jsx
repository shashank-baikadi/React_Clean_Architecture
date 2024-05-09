
import React from 'react';

import { CiCalendar } from 'react-icons/ci'; 
import { useLoanFormGet } from './LoanForm.logic';

const LoanGetComponent = () => {
  const { data } = useLoanFormGet();

  return (
    <div>
      {data.map((field, index) => (
        <div key={index}>
          <label>{field.label}</label>
          {field.type === 'text' && <input type="text" placeholder={field.placeholder} />}
          {field.type === 'options' && (
            <select>
              {field.options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.name}
                </option>
              ))}
            </select>
          )}
          {field.icon === 'CiCalendar' && <CiCalendar className="text-black -mt-6 ml-[16vh]" />}
        
        </div>
      ))}
    </div>
  );
};

export default LoanGetComponent;
