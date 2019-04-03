import React, { Component } from 'react';
import './App.css';
import Header from './Header';

class App extends Component {
  render() {
    return (
        <div className="App">
              <Header />
              <footer>
                <br/>
                <h6>@2019 SBinShalhoub Company. <br/> All Rights Reserved.</h6>
              </footer>
        </div>
    );
  }
}
export default App;
