import React from 'react'
import LoanComponent from './LoanComponent';
import {LoanData } from './LoanData'; 
const Loan = ({ component: Component = LoanComponent, data = LoanData }) => {
  return (
    <div>
         {/* <LoanComponent config={LoanData}/> */}
         <Component config={data}/>
    </div>
  )
}

export default Loan
