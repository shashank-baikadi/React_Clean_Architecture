import React from 'react'
import RequestForLoanComponent from './RequestForLoanComponent'; // adjust the path as needed
import { RequestForLoanData } from './RequestForLoanData'; // adjust the path as needed
const Loan = () => {
  return (
    <div>
         <RequestForLoanComponent config={RequestForLoanData}/>
    </div>
  )
}

export default Loan
