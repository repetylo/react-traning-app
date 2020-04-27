import React, { useState } from 'react';

type Props = {
  id: string;
  type: string;
  inputValue: string;
  onValueChange: (value: string) => void;
};


const Input: React.FC<Props> = ({ id, type, inputValue, onValueChange }) => {
  return (
    <div>
      <label>{id}: </label>
      <input type={type} id={id} onChange={(e): void => onValueChange(e.target.value)} />
      {/*console.log(`${id} = ${inputValue}`)*/}
    </div>
  )
}

export default Input;