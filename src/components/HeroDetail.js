import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/HeroDetail.scoped.css';
import { Link , useParams } from 'react-router-dom';

function HeroDetail() {
    const [hero, setHero] = useState([]);
    const { heroId } = useParams();

    useEffect(() => {
        axios.get(`https://localhost:7002/hero/${heroId}`)
            .then(hero => setHero(hero.data));
    }, []);

    function save(){
        axios.put(`https://localhost:7002/hero/${heroId}`, hero)
            .finally(() => window.history.back());
    }

    function handleChange(event) {
        setHero({id: hero.id, name: event.target.value});
    }

    if(!hero.name) return null;
    return(
        <div>
            <h2>{hero.name.toUpperCase()} Details</h2>
            <div><span>id: </span>{hero.id}</div>
            <div>
                <label for="hero-name">Hero name: </label>
                <input id="hero-name" value={hero.name} onChange={handleChange} placeholder="name"/>
            </div>
            <button type="button" onClick={() => window.history.back()}>go back</button>
            <button type="button" onClick={() => save()}>save</button>
        </div>
    );
}

export default HeroDetail;