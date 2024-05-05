// // OptionsComponent.jsx

// import React from 'react';
// import { IoMdArrowDropdown } from 'react-icons/io';
// const OptionsComponent = ({name, label, value, options, onChange, textcss, placeholder }) => {
//   return (
//     <div>
//       <label>{label} </label>
      
//       <select
//       name={name}
//         value={value}
//         onChange={onChange}
//         className={textcss}
        
//       >
//         {value ? null : (
//           <option value="" disabled hidden>
//             {placeholder}
//           </option>
//         )}
//         {options.map((option, index) => (
//           <option key={index} value={option.value}>
//             {option.name}
//           </option>
//         ))}
//       </select>
//       {/* <IoMdArrowDropdown className='-translate-y-[4vh] translate-x-[30.7vh] text-gray-200'/> */}
//       {value && (
//         <p className="text-gray-500 mt-1"></p>
//       )}
//     </div>
//   );
// };

// export default OptionsComponent;
// import React from 'react';
// import Select from 'react-select';

// const OptionsComponent = ({name, label, value, options, onChange, placeholder }) => {
//   // Convert options to the format react-select expects
//   const selectOptions = options.map(option => ({ value: option.value, label: option.name }));

//   // Handle change event
//   const handleChange = selectedOption => {
//     // Call the passed in onChange function with an event-like object
//     onChange({
//       target: {
//         name: name,
//         value: selectedOption ? selectedOption.value : ''
//       }
//     });
//   };

//   // Convert value to the format react-select expects
//   const selectValue = selectOptions.find(option => option.value === value);

//   return (
//     <div>
//       <label>{label} </label>
//       <Select
//         name={name}
//         value={selectValue}
//         onChange={handleChange}
//         options={selectOptions}
//         placeholder={placeholder}
//       />
//       {value && (
//         <p className="text-gray-500 mt-1"></p>
//       )}
//     </div>
//   );
// };

// export default OptionsComponent;


// const OptionsComponent = ({name, label, value, options, onChange, textcss, placeholder }) => {
//   return (
//     <div style={{ position: 'relative' }}>
//       <label>{label} </label>
      
//       <select
//         name={name}
//         value={value}
//         onChange={onChange}
//         className={textcss}
//         style={{ appearance: 'none', background: 'transparent' }}
    
//       >
//         {value ? null : (
//           <option value="" disabled hidden>
//             {placeholder}
//           </option>
//         )}
//         {options.map((option, index) => (
//           <option key={index} value={option.value}>
//             {option.name}
//           </option>
//         ))}
//       </select>
//       {/* <IoMdArrowDropdown style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}/> */}
//       {value && (
//         <p className="text-gray-500 mt-1"></p>
//       )}
//     </div>
//   );
// };

// export default OptionsComponent;

const OptionsComponent = ({ name, label, value, options, onChange, textcss, placeholder, icon                                                                     }) => {
  return (
    <div style={{ position: 'relative' }}>
      {icon && <div className="absolute ml-[30vh] mt-8">{icon}</div>}
      <label>{label} </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={textcss}
        style={{ appearance: 'none', background: 'transparent' }}
      >
        {value ? null : (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      {value && <p className="text-gray-500 mt-1"></p>}
    </div>
  );
};

export default OptionsComponent;
