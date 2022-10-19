import React from 'react';
import { Routes, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import Home from './Home'
import Users from './Users';
import Contact from './contact';
import notfound from './notfound';

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
          <li>
            <Link to="/notfound">notfound</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<Users />} />
          <Route path="/notfound" element={<notFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;