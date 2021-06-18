import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Wrapper from './components/Wrapper';

// import NoMatch from "./pages/NoMatch";
// import Search from "./pages/Search";
// import Saved from "./pages/Saved";

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Books}></Route>
          <Route exact path='/savedbooks' component={SavedBooks}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
