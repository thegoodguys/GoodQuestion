import React, { Component } from 'react';
import '../styles.css';


class MainHeader extends Component {
  render() {
    return (
      <div className="MainHeader">
        <button id="logo">Good Question</button>
        <form className="headerForm">
          <input id="headerInput" placeholder='Search...'></input>
        </form>
      </div>
    );
  } 
}

export default MainHeader;