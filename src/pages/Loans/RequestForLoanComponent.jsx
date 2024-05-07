
import  { useState } from 'react';
import OptionsComponent from '../../components/generic_components/Formfields/options/OptionsComponent';
import TextComponent from '../../components/generic_components/Formfields/text/TextComponent';

import RequestForLoanStyles from './RequestForLoanStyles';
import axios from 'axios';


const RequestForLoanComponent = ({ config }) => {
const [data, setData] = useState({});
const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (fieldName, value) => {
    setData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/loan', data);
      console.log('Data sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <div className=''>
      <div className='w-[150vh]'>
        <h1 className='text-xl font-semibold translate-x-[5vh] -translate-y-[3.5vh]'>Request For Loan</h1>
        <div className='border-1 border-gray-700 shadow-md h-[45vh]'>
          <div className=' ml-7'>
            <form onSubmit={handleSubmit}>
              {config.slice(0, 1).map((field, index) => (
                <div key={index}>
                  <label className={RequestForLoanStyles[field.textcss].label}>
                    {field.label} 
                  </label>
                  {field.type === 'options' && (
                    <OptionsComponent
               
                      name={field.name}
                      options={field.options}
                      textcss={RequestForLoanStyles[field.textcss].input}
                      icon={field.icon}
                      placeholder={field.placeholder}
                      value={data[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                    />
                  )}
                </div>
              ))}

              {config.slice(1, 2).map((field, index) => (
                <div key={index}>
                  <label className={RequestForLoanStyles[field.textcss].label}>
                    {field.label}
                  </label>
                  {field.type === 'text' && (
                    <TextComponent
                      name={field.name}
                      textcss={RequestForLoanStyles[field.textcss].input}
                      icon={field.icon}
                      placeholder={field.placeholder}
                      value={data[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                    />
                  )}
                </div>
              ))}

              {config.slice(2, 3).map((field, index) => (
                <div key={index}>
                  <label className={RequestForLoanStyles[field.textcss].label}>
                    {field.label}
                  </label>
                  {field.type === 'options' && (
                    <OptionsComponent
                
                      name={field.name}
                      options={field.options}
                      textcss={RequestForLoanStyles[field.textcss].input}
                      icon={field.icon}
                      placeholder={field.placeholder}
                      value={data[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                    />
                  )}
                </div>
              ))}

              {config.slice(3, 4).map((field, index) => (
                <div key={index}>
                  <label className={RequestForLoanStyles[field.textcss].label}>
                    {field.label}
                  </label>
                  {field.type === 'text' && (
                    <TextComponent
                      name={field.name}
                      textcss={RequestForLoanStyles[field.textcss].input}
                      icon={field.icon}
                      placeholder={field.placeholder}
                      value={data[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                    />
                  )}
                </div>
              ))}
              <div className='flex mt-3'>
            <button type="submit" >Submit</button>
              </div>
            
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestForLoanComponent;