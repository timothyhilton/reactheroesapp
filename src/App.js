import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import HeroList from './components/HeroList';
import HeroDetail from './components/HeroDetail';
import Dashboard from './components/Dashboard';
import './App.scoped.css';

function App() {
  return (
    <Router>
      <div>
        <h1 className="title">Tour of Heroes</h1>
        <nav>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/heroes">Heroes</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Navigate to='/dashboard' />} />
          <Route exact path='/dashboard' Component={Dashboard} />
          <Route exact path="/heroes/" Component={HeroList} />
          <Route path="/detail/:heroId" Component={HeroDetail} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;