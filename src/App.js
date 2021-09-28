import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Characters from './components/pages/Characters';
import Movies from './components/pages/Movies';
import Items from './components/pages/Items';
import Subscribe from './components/pages/Subscribe'

import './App.css';


function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Switch>
    <Route path="/" exact component={Home} />
    <Route path='/characters' component={Characters} />
    <Route path='/movies' component={Movies} />
    <Route path='/items' component={Items} />
    <Route path='/subscribe' component={Subscribe} />
    </Switch>
    </Router>
    </>
   
    
  );
}

export default App;


