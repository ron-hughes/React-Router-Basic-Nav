import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    <Route path='/' component={Home} exact></Route>
    <Route path='/About' component={About}></Route>
    <Route path='/Contact' component={Contact}></Route>

  </div>
);

export default App;
