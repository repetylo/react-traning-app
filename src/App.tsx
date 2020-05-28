import React from 'react';
import logo from './logo.svg';
import './App.css';

//import Wrapper from './Wrapper';
//import Wrapper from './WrapperClass/Wrapper';
import { LocationForm }  from './components/location-form/location-form';
import LoginForm  from './components/login-form';
import { UserCard } from './components/user-card/user-card';

const selectHierarchy = [
  {
      value:'region',
      url:(key: string)=>'http://overpass-api.de/api/interpreter?data=[out:json];area(3600060199);(rel[admin_level=4][koatuu][place!=%22city%22][!%22official_status%22](area););out;',
      label:'Оберіть область'
  },
  {
      value:'city',
      url:(key: string)=>{
        while (key.length < 6) {
          key = '0' + key;
          console.log('city key', key)
        };
        return `http://overpass-api.de/api/interpreter?data=[out:json];area(3600${key});(rel[place~%22city|town%22](area););out;`
      },
      label:'Оберіть місто'
  },
  {
      value:'street',
      url:(key: string)=>{
        while (key.length < 7) {
          key = '0' + key;
          console.log('street key', key)
        };
        return `http://overpass-api.de/api/interpreter?data=[out:json];area(360${key});(rel[type=%22associatedStreet%22](area););out;`
      },
      label:'Оберіть вулицю'
  }
  ]

const user = {
  id: 1,
  name: {
    firstName: 'Sarah',
    lastName: 'Fischer',
  },
  avatarUrl:'./users/user1.png',
  contacts: {
    username: 'sarahfischer',
    site: 'sarahfischer.com'
  },
  job: 'Technical Writer', //jobID?
  location: {
    city: 'Berlin',
    country: 'Germany',
    coverUrl: './users/berlinCover.png'
  },
  activity: {
    postsCount: 501,
    followersCount: 1407,
    followingCount: 398,
  },
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum condimentum euismod. Mauris vulputate sed nisl et molestie. Morbi ac commodo neque, quis viverra dui. Nulla facilisi.',
  skills: [
    'Ability to write clearly',
    'Research and exploration skills',
    'Attention to detail',
    'Work with Technical Writing Tools'
  ]

}

function App() {
  return (
    <div className="App">
      {/* <Wrapper initialValue={19} /> */}
      {/* <LocationForm hierarchy={selectHierarchy}/>
      <br/>
      <br/>
      <LoginForm /> */}
      <UserCard user={user} />
    </div>
  );
}

export default App;
