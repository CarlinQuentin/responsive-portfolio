import React, { Component } from 'react';
import './App.css';
import Landing from './Components/Landing/Landing'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Landing />
        </Router>
      </div>
    );
  }
}

export default App;
