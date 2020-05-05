import React, {} from 'react';

import { useFormState } from '../../hooks/useFormState';

export const LoginForm: React.FC = ({}) => {

  const {data, handleChange, handleSubmit} = useFormState();

  return (
    <div>
      <form onSubmit={handleSubmit}>  
        <label> Username: 
          <input 
            id="username" 
            name="username"
            type="text" 
            onChange={handleChange} 
            value={data.username}
          />
        </label>
        <label htmlFor="password">Password: </label>
        <input 
          id="password" 
          name="password"
          type="password" 
          onChange={handleChange} 
          value={data.password}
        />

        <button type="submit">Submit</button>
      </form>
      <p>your username is: {data.username}</p>
      <p>your password is: {data.password}</p>
    </div>
  );
};