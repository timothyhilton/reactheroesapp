import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './css/HeroList.scoped.css';

function HeroList() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7002/hero')
        .then(heroes => setHeroes(heroes.data)
    );
  }, []);

  function addHero() {
    let heroName = document.getElementById("newHero").value;

    axios.post('https://localhost:7002/hero', {name: heroName})
      .then(() => {
        axios.get('https://localhost:7002/hero')
          .then(heroes => setHeroes(heroes.data));})
  }

  function deleteHero(id) {
    axios.delete(`https://localhost:7002/hero/${id}`)
      .then(() => {
        axios.get('https://localhost:7002/hero')
          .then(heroes => setHeroes(heroes.data));})
  }

  return (
    <div>
      <h2>My Heroes</h2>
      <ul className="heroes">
        {heroes.map(hero =>
          <li key={hero.id}>
            <Link to={`/detail/${hero.id}`}>
              <span className="badge">{heroes.indexOf(hero) + 1}</span>
              {hero.name}
            </Link>
            <button type="button" className="delete" title="delete hero" onClick={() => deleteHero(hero.id)}>x</button>
          </li>
        )}
      </ul>

      <div>
        <label htmlFor="newHero">Hero name: </label>
        <input id="newHero" />
        <button type="button" className="add-button" onClick={() => addHero()}>
          Add hero
        </button>
      </div>
    </div>
  );
}

export default HeroList;