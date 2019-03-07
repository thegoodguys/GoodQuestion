import React, { Component } from 'react';
import '../styles.css';

class FilterBox extends Component {
  render() {
    return (
      <div className="FilterBox">
        <p id="filterBy">FILTER BY</p>
        <ul className="filters">
            <li>COMPANIES</li>
            <li>POSITION APPLIED FOR</li>
            <li>ROUND/INTERVIEW TYPE</li>
            <li>COMPANY LOCATION</li>
            <li>USERS</li>
            <li>MOST RECENT</li>
        </ul>
      </div>
    );
  } 
}

export default FilterBox;