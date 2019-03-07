import React, { Component } from 'react';
import './styles.css';
import MainHeader from './components/MainHeader'
import FilterBox from './components/FilterBox';
import MainContainer from './containers/MainContainer'

class App extends Component {

  render() {
    return (
      <div className="App">
        <MainHeader />
        <FilterBox />
        <MainContainer />
      </div>
    );
  } 
}

export default App;
