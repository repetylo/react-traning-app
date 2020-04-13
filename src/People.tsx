import React, { useState } from 'react';
import person from './person.svg';

type Props = {
  count: number;
  items: any[];
};

const People: React.FC<Props> = ({ count, items }) => {
  // const personIMG = <img src={person} className="Person" alt="person" />;
  
  // key
  // let render=[];
  // for (let index = 0; index < count; index++) {
  //   render.push(<img key={index} src={person} className="Person" alt="person" />);
  // }

  // 19 => arr.length = 19 new Array(19) => [undefined, ]
  // utils => createNumbersArray => 
  // utils => create uniqueArray(19) => [uuid(), uuid()] ||

  return (
  <div className='People'>
    {items.map(item => <img src={person} className="Person" alt="person" />) }
    {/* {count.map(item => <img key={item.id} src={item.avatar} className="Person" alt="person" />)} */}
  </div>);
};

export default People;