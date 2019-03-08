import React, { Component } from 'react';
import '../styles.css';
import { Link } from 'react-router-dom'

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
            <Link to="/">
            <li id="mostRecent">MOST RECENT</li>
          </Link>
        </ul>
      </div>
    );
  } 
}

export default FilterBox;