import React from 'react'
import LoanComponent from './LoanComponent'; // adjust the path as needed
import {LoanData } from './LoanData'; // adjust the path as needed
const Loan = ({ component: Component = LoanComponent, data = LoanData }) => {
  return (
    <div>
         {/* <LoanComponent config={LoanData}/> */}
         <Component config={data}/>
    </div>
  )
}

export default Loan
