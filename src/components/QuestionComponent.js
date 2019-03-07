import React, { Component } from 'react';
import '../styles.css';
import { Switch, Route, withRouter } from 'react-router-dom';




class QuestionComponent extends Component {
    render() {
    return (
      <div className="QuestionComponent">
        
        <p id="submitTitle">SUBMIT YOUR QUESTION</p>
        
        <span id="questionSpan">
                Question Title: 
                <input 
                        id="title" 
                        placeholder="Fizzbuzz, Circle Country, etc..."
                        onChange={this.props.handleChange}
                />
        </span>
        
        <span id="questionSpan">
                Position Applied For: 
                <input 
                        id="role_name" 
                        placeholder="Front-end, Back-end, Full-stack, etc..."
                        onChange={this.props.handleChange}
                />
        </span>
        
        <span id="questionSpan">
                Company Applied For: 
                <input 
                        id="company_name" 
                        placeholder="Google, Netflix, Wag, Facebook, etc..."
                        onChange={this.props.handleChange}
                />
        </span>
        
        <span id="questionSpan">
                Company Location: 
                <input 
                        id="location_name" 
                        placeholder="Los Angeles, San Fran, New York, etc..."
                        onChange={this.props.handleChange}
                />
        </span>
        
        <span id="questionSpan">
                Question Type: 
                <input 
                        id="type" 
                        placeholder="Behavioral or Technical, etc..."
                        onChange={this.props.handleChange}
                />
        </span>
        
        <span id="questionSpan">
                Round: 
                <input 
                        id="round"
                        placeholder="First round, On-site, Take home, etc..."
                        onChange={this.props.handleChange}
                />
        </span>
        
        <span id="textAreaSpan">Interview Question: 
                <textarea 
                        id="content"
                        onChange={this.props.handleChange}
                />
        </span>
        
        <span id="textAreaSpan">Tips For Your Colleagues: 
                <textarea 
                        id="tips" 
                        placeholder="Best place to park, etc..."
                        onChange={this.props.handleChange}
                />
        </span>
        
        <button id="postButton" onClick={this.props.postQuestion}>SUBMIT</button>
      
      </div>
    );
  } 
}


export default withRouter(QuestionComponent);




