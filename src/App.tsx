import React from 'react';
import logo from './logo.svg';
import './App.css';

//import Wrapper from './Wrapper';
import Wrapper from './WrapperClass/Wrapper';


function App() {
  return (
    <div className="App">
      <Wrapper initialValue={19} />
    </div>
  );
}

export default App;
