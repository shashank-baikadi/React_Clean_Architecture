

import React from 'react';
import { CiCalendar } from 'react-icons/ci'; 
import { useLoanFormGet } from './LoanForm.logic';
import Styles from '../loan/LoanStyles'; // Import the styles

const LoanGetComponent = () => {
  const { data } = useLoanFormGet();

  return (
    <div>
      {data.map((field, index) => (
        <div key={index}>
          <label className={Styles.standard.label}>{field.label}</label>
          {field.type === 'text' && <input type="text" placeholder={field.placeholder} className={Styles.standard.input} />} 
          {field.type === 'options' && (
            <select className={Styles.standard.input}>
              <option value="" disabled selected>{field.placeholder}</option>
              {field.options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.name}
                </option>
              ))}
            </select>
          )}
          {field.icon === 'CiCalendar' && <CiCalendar className="text-black -mt-7 ml-[40vh]" />}
        </div>
      ))}
    </div>
  );
};

export default LoanGetComponent;