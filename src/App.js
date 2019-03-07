import React, { Component } from 'react';
import './styles.css';
import MainHeader from './components/MainHeader'
import FilterBox from './components/FilterBox';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterContainer from './containers/RouterContainer'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <MainHeader />
          <FilterBox />
          <RouterContainer />
        </div>
      </Router>
    );
  } 
}

export default App;
