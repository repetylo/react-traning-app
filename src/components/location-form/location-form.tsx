import React, { useState, ChangeEvent, } from 'react';

import { Select } from './form-select';

import { useFormState } from '../../hooks/useFormState';

export const LocationForm: React.FC = ({ }) => {
  
  const [state, setState] = useState({});
/*
  const [region, setRegion] = useState();
  const [city, setCity] = useState();
  const [street, setstreet] = useState();
*/
  const { handleSubmit } = useFormState();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const { value, name } = event.target;
  };

  return (

    <form onSubmit={handleSubmit}>
      <label>
        Оберіть область:
        <Select
          trigger={true}
          itemsLink={'http://overpass-api.de/api/interpreter?data=[out:json];area(3600060199);(rel[admin_level=4][koatuu][place!=%22city%22][!%22official_status%22](area););out;'} 
          onSelect={(value:string) => setState({ ...state, 'region': value })}
        />
      </label>
      <label>
        Оберіть місто:
        
      </label>
      <label>
        Оберіть вулицю:
        
      </label>
      <input type="submit" value="Надіслати" />
    </form>
  );
};

// http://overpass-api.de/api/interpreter?data=[out:json];area(3600072380);(rel[place~%22city|town%22](area););out;

// http://overpass-api.de/api/interpreter?data=[out:json];area(3602032280);(rel[type=%22associatedStreet%22](area););out; 