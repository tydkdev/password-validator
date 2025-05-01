import './App.css';
import validator from 'validator';
import { useState } from 'react';

function App() {

  const [errorMessage, setErrorMessage] = useState('');

  const validate = (value) => {
    if (validator.isStrongPassword(value, { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })) {
      setErrorMessage('Strong Password');
    } else if (validator.isStrongPassword(value)) {
      setErrorMessage('Weak Password');
    } else {
      setErrorMessage('Invalid Password');
    }
  } 
  
  return (

    <div style={{ marginLeft: '200px' }}>
      <prep>
        <h2>Checking Password Strength in ReactJS</h2>
        <span>Enter Password:</span>
        <input 
          type="text" 
          onChange={(e) => validate(e.target.value)} 
        /> <br/>
        {errorMessage === '' ? null : 
          <span style={{ fontWeight: 'bold', color: 'red' }}>{errorMessage}</span>}

      </prep>
    </div>
  );
}

export default App;
