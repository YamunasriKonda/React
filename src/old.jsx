import React from 'react';
import { Routes, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Users from './Users';
import Contact from './contact';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <li>
          <Link to="/notfound">NotFound</Link>
        </li>
        <Routes>
          <Route exact path="/"> <Home /> </Route>
          <Route path="/users/:id"><Users /> </Route>
          <Route path="/users"> <Users /> </Route>
          <Route path="/contact" > <Contact /> </Route>
          <Route path="/notfound" > <Contact /> </Route>
        </Routes>


      </div>
    </Router>
  );
}

export default App;