import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './css/Dashboard.scoped.css';
import { Link } from 'react-router-dom';

function Dashboard() {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7002/hero')
            .then(heroes => setHeroes(heroes.data));
    }, []);

    return(
        <div>
            <h2>Top Heroes</h2>
            <div className="heroesMenu">
                {heroes.slice(0, 4).map(hero => 
                    <Link className="heroLink" to={`/hero/${hero.id}`} key={hero.id}>{hero.name}</Link>)}
            </div>
        </div>
    );
}

export default Dashboard;