import React, { useState, useEffect, ChangeEvent, } from 'react';

interface ITags {
  name: string;
}

interface IBaseEntity {
  id: number;
  tags: ITags;
}

interface IResultEllements {
  id: number, 
  name: string
}

type Props = {
  trigger: boolean,
  itemsLink: string,
  onSelect: any
}

export const Select: React.FC<Props> = ({ trigger, itemsLink, onSelect }) => {
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    if (trigger) {
      setError(null);
      console.log(trigger);

      const initItems = async () => {
      
        fetch(itemsLink)//`https://jsonplaceholder.typicode.com/users`)
          .then(response => {
            return response.json();
            })
          .then(
            (result) => {
              setIsLoaded(true);

              let selectItems = result.elements.reduce((acc: IResultEllements[], { id, tags }: IBaseEntity )=>{
                return acc.concat([{['name']: tags.name, ['id']: id}])
              }, [])

              selectItems.sort((a: IResultEllements,b: IResultEllements)=>a.name.localeCompare(b.name, 'uk'))

              localStorage.setItem(itemsLink, JSON.stringify(selectItems));
              setItems(selectItems);
              console.log('getItems1');

            },

            (error) => {
              setIsLoaded(true);
              setError(error);
            }
        )
      }

      if(localStorage.getItem(itemsLink)) {
        setItems(JSON.parse(localStorage.getItem(itemsLink)||''));
        setIsLoaded(true);
      }else{
        initItems();
      }
    }
  }, [trigger,itemsLink]);

  const renderOptions = (items: IResultEllements[]) => {
    const validItems = items.filter(item=>item.name);
    return validItems.map((p)=><option key={p.id} value={p.id}>{p.name}</option>)}

  const handleSelect = (event:ChangeEvent<HTMLSelectElement>)=>{
    let a = event.target.value;
    console.log(a);
    onSelect(event.target.value) 
  }

  if (error) {
    return <div>Error: </div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <select 
        name="state" 
        id="state" 
        disabled={!trigger}
        onChange={handleSelect}>
          {<option value=""></option>}
          {renderOptions(items)}
      </select>
    );
  }
};