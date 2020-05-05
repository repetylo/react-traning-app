import React from 'react';
import logo from './logo.svg';
import './App.css';

//import Wrapper from './Wrapper';
//import Wrapper from './WrapperClass/Wrapper';
import { LocationForm }  from './components/location-form/location-form';
import LoginForm  from './components/login-form';


function App() {
  return (
    <div className="App">
      {/* <Wrapper initialValue={19} /> */}
      <LocationForm />
      <br/>
      <br/>
      <LoginForm />
    </div>
  );
}

export default App;
