import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import Navbar from './Navbar.js';
import About from './About.js';
import Work from './Work.js';
import Contact from './Contact.js';

  
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route exact path="/About">
          <Navbar/>
          <About />
        </Route>
        
        <Route exact path="/Work">
          <Navbar/>
          <Work/>
        </Route>

        <Route exact path="/Contact">
          <Navbar/>
          <Contact/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
