

// import { useState, useEffect } from 'react';
// import { fetchLoanData } from '../../api/loanAPI';

// export function useLoanFormGet() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await fetchLoanData();
//       const mappedData = mapDataToLoanForm(result);
//       setData(mappedData);
//     };
 
//     fetchData();
//   }, []);

//   return { data };
// }

// function mapDataToLoanForm(rawData) {
//   return rawData.map(item => ({
//     name: item.name,
//     label: item.label,
//     type: item.type,
//     placeholder: item.placeholder,
//     textcss: item.textcss,
//     icon: item.icon,
//     options: item.options,

//   }));
// }

// LoanForm.logic.js
import { useState, useEffect, useMemo } from 'react';
import { fetchLoanData } from '../../api/loanAPI';

export function useLoanFormGet() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchLoanData();
      setData(result || []);
    };
 
    fetchData();
  }, []);

  // Memoize the mapped loan form data to prevent unnecessary re-computation
  const mappedData = useMemo(() => mapDataToLoanForm(data), [data]);

  return { data: mappedData };
}

function mapDataToLoanForm(rawData) {
  return rawData.map(item => ({
    name: item.name,
    label: item.label,
    type: item.type,
    placeholder: item.placeholder,
    textcss: item.textcss,
    icon: item.icon,
    options: item.options,
  }));
}
