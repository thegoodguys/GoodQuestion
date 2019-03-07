import React, { Component } from 'react';
import '../styles.css';

class FilterBox extends Component {
  render() {
    return (
      <div className="FilterBox">
        <p id="filterBy">FILTER BY</p>
        <ul className="filters">
            <li onClick={() => {console.log('hit')}}>COMPANIES</li>
            <li onClick={() => {console.log('hit')}}>POSITION APPLIED FOR</li>
            <li onClick={() => {console.log('hit')}}>ROUND/INTERVIEW TYPE</li>
            <li onClick={() => {console.log('hit')}}>COMPANY LOCATION</li>
            <li onClick={() => {console.log('hit')}}>USERS</li>
            <li onClick={() => {console.log('hit')}}>MOST RECENT</li>
        </ul>
      </div>
    );
  } 
}

export default FilterBox;