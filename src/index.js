import React from 'react';
import ReactDOM from 'react-dom';
/* Add NavLink to importer */
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import About from './about'
import Login from './login'
import Navbar from './navbar'


const Home = () => <h1>Home!</h1>;

ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <br></br>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);
