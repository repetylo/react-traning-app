import React, { useState, useEffect, useRef } from 'react';

import { useDidMount } from './hooks/useDidMount';
//import { useOutsideClick } from './hooks/useOutsideClick'

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
  const [isMounted] = useDidMount();
  const wrapperRef = useRef(); // wrapperRef.current.

  const closeModal = () => {
    // on outside click
  }

  //useOutsideClick(wrapperRef.current, closeModal);

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

  useEffect(() => {
    // Update the document title using the browser API
    if (!isMounted) return;
    console.log(`You clicked ${currentValue} times`);
  }, [currentValue]);

  useEffect(() => {
    // ..
    // const initData = async () = {
    //   const data = await getDataFromHtttp();
    //   return [...data, 1]
    // }

    // initData();



    return () => { }
  }, [])

  return (
    <div className='Counter' ref={'wrapperRef'}>
      <button onClick={(): void => onChange(currentValue - 1)}>-1</button>
      <p>{currentValue}</p>
      <button onClick={(): void => onChange(currentValue + 1)}>+1</button>
    </div>
  );
}

Counter.displayName = 'Counter'

export default Counter;