import React, { useState, useEffect, ChangeEvent, } from 'react';


interface BaseEntity {
  id: number;

}

type Props = {
  trigger: boolean,
  itemsLink: string,
  onSelect: any
}

// const [regions, setRegions] = useState([]);

// ['region', 'city' , 'district', 'street'] => 
// 3 select

// map


export const Select: React.FC<Props> = ({ trigger, itemsLink, onSelect }) => {
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    if (trigger) setItems([]);

    const initItems = async () => {
      const getItems =
        fetch(itemsLink)//`https://jsonplaceholder.typicode.com/users`
          .then(response => {
            return response.json();
            })
          .then(
            (result) => {
              setIsLoaded(true);
              localStorage.setItem('myItems', JSON.stringify(result.elements));
              setItems(result.elements);
            },

            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }

    onSelect('');

    initItems();

  }, [trigger]);

  const renderOptions = (items: BaseEntity[]) =>
  items.map((p)=><option key={p.id} value={p.id}>{p.id}</option>);

/* const regionsSelectList = renderOptions(regions);
 const citiesSelectList = renderOptions(cities); // []
  const streetsSelectList = renderOptions(streets); // []
*/

  if (error) {
    return <div>Error: </div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <select name="state" id="state" disabled={!trigger}>
        {renderOptions}
      </select>
    );
  }
};