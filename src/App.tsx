import React from 'react';
import logo from './logo.svg';
import './App.css';

//import Wrapper from './Wrapper';
//import Wrapper from './WrapperClass/Wrapper';
import {Loginform } from './Loginform/Loginform';


function App() {
  return (
    <div className="App">
      {/* <Wrapper initialValue={19} /> */}
      <Loginform value=''/>
    </div>
  );
}

export default App;
