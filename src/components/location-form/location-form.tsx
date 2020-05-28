import React, { useState, ChangeEvent, } from 'react';

import { Select } from './form-select';

import { useFormState } from '../../hooks/useFormState';

type Aa = 'city' | 'region' | 'country';

interface IItem {
  value: string;
  url: any;
  label: string;
}

type Props = {
  hierarchy: IItem[]
}

// city, disttrict, street

const state = {
  city: {
    id: '',
    trigger: false
  },
  district: {
    id: '',
    trigger: false
  },
  street: {
    id: '',
    trigger: false
  }
}

export const LocationForm: React.FC<Props> = ({ hierarchy }) => { // [{ value, url, label }]
  console.log('Rerender <LocationForm />');

// const [state, setState] = useState(hierarchy);

  const [state, setState] = useState(
    hierarchy.reduce((acc: {[prop: string]:{id:string,trigger:boolean}}, { value }, i)=> {
    return {
      ...acc,
      [value]: {
        id:'',
        trigger:false
      },
    }
    
    // acc[item.value] = ''
    // return acc;
  }, {}));

  // pop, push
  // reverse

  // .map,  [.filter, / .every, .some]
  // [join] => 'join'
  // [reduce, reduceRight] => {}   arr.reduce((acc, item, idx, arr) => {  asasa; return acc;}, {});

  const { handleSubmit } = useFormState();

  // const handleChange = (value: string): void => {
  //   setState({ ...state, [value]: value })
  // };

  //const addTrigger = (initialValue: keyof typeof state): string => state[initialValue];

  const renderOptions = hierarchy.map((select,index,array) =>
      <label>
        {select.label}
        <Select
          trigger={index === 0 ? true : state[select.value].trigger}
          itemsLink={select.url(index !== 0 ? state[array[index-1].value].id : '')}
          onSelect={(value:string) => {
            if(array.length!=index+1) {
              const l= { id: value, trigger: true }
              const k= { id:'', trigger: true }
              setState({ ...state, [select.value]: l, [array[index+1].value]: k});
            }
          }}
        />
      </label>
    )

  return (

    <form onSubmit={handleSubmit}>
      {renderOptions}
      <input type="submit" value="Надіслати" />
    </form>
  );
};

// render form with n selects
// props:
  // input => hierarchy: [{ value, url, label }]
  // output => { city: '', district: '', street: '' }


// next select disable if current is empty
// on reset select => reset all select after
// 
