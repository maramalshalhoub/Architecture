import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Services from './Services';
class App extends Component {
  render() {
    return (
        <div className="App">
              <Header />
              <Home />
              <Services />
        </div>
    );
  }
}

export default App;
