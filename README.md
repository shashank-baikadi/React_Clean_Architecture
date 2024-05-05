React_Clean_Architecture
React Clean Architecture is an architectural pattern that aims to structure React applications in a clean and organized manner, focusing on separation of concerns, maintainability, and scalability.


npm install --save-dev jest @testing-library/react @testing-library/jest-dom


npm install --save-dev @babel/core @babel/preset-env @babel/preset-react

npm i axios        
npm install -D json-server     
json-server --watch db.json --port 3001    
db.json file    
{
  "users": [
  ]
}

.eslintrc.js
module.exports = {
    env: {
      node: true,
    },
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      // add your custom rules here
    },
  };

  ## shashnk