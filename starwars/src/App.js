import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import CharCard from './components/Card';
import FilterButton from './components/Button';

const App = () => {
  // * * * STATE PROPERTIES

  const [chars, setChars] = useState([]);
  const [showCameos, setShowCameos] = useState(true);

  // * * * USE EFFECT

  useEffect(() => {
    const getData = () => {
      axios.get('https://swapi.co/api/people')
      .then(response => {
        // console.dir(response.data);
        // console.dir(response.data.results);

        let selection = [];

        response.data.results.forEach(char => {
          selection.push(char);
        });

        selection = selection.flat();

        setChars(selection);

        // console.dir(chars);
      })
      .catch(error => {
        console.log('Data not returned', error);
      });
    };

    getData();
  }, []);
  
  // let flatArr = chars.flat();
  // console.dir(flatArr);
  
  console.dir(chars);

  // let flattenedArr = chars.flat();
  // setChars([flattenedArr]);
  // console.log(chars);

  // * * * FILTER CARDS

  const removeCameos = () => {
    setShowCameos(!showCameos);
  }

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {chars.map((char) => {
          return showCameos || char.films.length > 1 ? (<CharCard key={char.name} name={char.name} year={char.birth_year} films={char.films.length} />) : null;
      })}
      <FilterButton removeCameos={removeCameos} />
    </div>
  );
}

export default App;
