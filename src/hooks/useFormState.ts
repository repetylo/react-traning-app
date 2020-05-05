import { useState, ChangeEvent, FormEvent } from 'react';

export const useFormState = (): any => {
  const [data, setData] = useState({username: '', password: ''});
  const handleChange = (event: ChangeEvent<HTMLInputElement>): any => {
    
    const {value, name} = event.target;

    setData({...data, [name]: value});
  };
  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
  };
  return {data, handleChange, handleSubmit};
}