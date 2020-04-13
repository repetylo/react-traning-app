import React, { useState, useEffect } from 'react';

type CounterProps = {
  currentValue: number;
  onChange: (counter: number) => void;
};

// useState, useEffect
// class component
// componentDidMount, componentDidUpdate, willUnmount

// class components
/*wrapper
  <form /> state user: name, age, onChange => ({ name, age })
  <formDebugger> => <pre>{name: '', age: 22, hobby: []}</pre>
*/


const Counter: React.FC<CounterProps> = ({ currentValue, onChange }) => {
  const [data, setData] = useState([]);

  /* useEffect(() => {
    // componentDidMount
  }, []);

  useEffect(() => {
    // componentDidMount + componentDidUpdate
  });

  useEffect(() => {
    // componentDidMount + componentDidUpdate for currentValue
  }, [currentValue]);
 */
  // TODO: 
  // useEffect(() => {
  //   // componentDidUpdate for currentValue
  // }, currentValue);

  

  return (
  <div className='Counter'>
    <button onClick={(): void => onChange(currentValue - 1)}>-1</button>
    <p>{currentValue}</p>
    <button onClick={(): void => onChange(currentValue + 1)}>+1</button>
  </div>
);
  }

export default Counter;