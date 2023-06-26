import React, {useState, useEffect} from 'react';
import getHeroes from '../services/HeroService'
import Hero from '../objects/Hero'
import axios from 'axios';
import './css/Dashboard.scoped.css';

function Dashboard() {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7002/hero')
        .then(heroes => setHeroes(heroes.data));
    })

    return(
        <div>
            <h2>Top Heroes</h2>
            <div className="heroesMenu">
                {heroes.slice(0, 4).map(hero => 
                    <a>{hero.name}</a>)}
            </div>
        </div>
    );
}

export default Dashboard;