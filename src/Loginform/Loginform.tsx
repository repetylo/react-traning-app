import React, { useState } from 'react';

import Input from './Input';

type Props = {
  value: string
}

export const Loginform: React.FC<Props> = ({ value }) => {

  const [inputValue, setInputValue] = useState(value);

  const handleChange = (value: string): void => {
    setInputValue(value);
    console.log(inputValue)
  }

  return (
    <div>
      <Input id="username" type="text" onValueChange={handleChange} inputValue={value}/>
      <Input id="password" type="password" onValueChange={handleChange} inputValue={value}/> 
      <button>Submit</button>
    </div>
  );
};