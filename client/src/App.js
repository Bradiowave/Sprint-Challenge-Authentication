import React, { Component } from 'react';
import './App.css';

import { Route, withRouter } from 'react-router-dom';
import Signup from './components/Signup.js';
import Login from './components/Login.js';
import Jokes from './components/Jokes.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <Route path='/jokes' component={Jokes} />
      </div>
    );
  }
}

export default withRouter(App);