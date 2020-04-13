import React, { useState } from 'react';

import Counter from './Counter';
import People from './People';

type Props = {
  initialValue: number
}

export const Wrapper: React.FC<Props> = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue); // state

  const handleChange = (nextCount: number): void => setCount(nextCount); // 19

  return (
    <div className='Wrapper'>
      <Counter currentValue={count} onChange={handleChange} />
      <People count={count} items={[...Array(count)].map((_, i) => i)}/>
    </div>
  );
};

export default Wrapper;
/*

  Wrapper
    - index.ts (export default) // => connect()
    - wrapper.tsx (export const)

    - wrapper.test.tsx (jest + @testing-library/react)

*/