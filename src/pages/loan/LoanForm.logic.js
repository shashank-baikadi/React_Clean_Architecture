import { useState } from 'react';
import { submitLoanRequest } from '../../api/loanAPI';

export function useLoanForm() {
  const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await submitLoanRequest(data);
    if (success) {
      console.log('Loan request successful');
    } else {
      console.error('Loan request failed');
    }
  };

  return { data, setData, handleSubmit };
}