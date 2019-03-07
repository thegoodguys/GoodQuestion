import React, { Component } from 'react';
import '../styles.css';
// import QuestionComponent from '../components/QuestionComponent'




class QuestionComponent extends Component {
    render() {
    return (
      <div className="QuestionComponent">
        <p id="submitTitle">SUBMIT YOUR QUESTION</p>
        <span>Question Title: <input id="questions" placeholder="Fizzbuzz, Circle Country, etc..."/></span>
        <span>Position Applied For: <input id="questions" placeholder="Front-end, Back-end, Full-stack, etc..."/></span>
        <span>Company Applied For: <input id="questions" placeholder="Google, Netflix, Wag, Facebook, etc..."/></span>
        <span>Company Location: <input id="questions" placeholder="Los Angeles, San Fran, New York, etc..."/></span>
        <span>Question Type: <input id="questions" placeholder="Behavioral or Technical, etc..."/></span>
        <span>Round: <input id="questions" placeholder="First round, On-site, Take home, etc..."/></span>
        <span>Interview Question: <textarea id="questionsText"/></span>
        <span>Tips For Your Colleagues: <textarea id="questionsText" placeholder="Best place to park, etc..."/></span>
        <button id="postButton" onClick={this.postQuestion}>SUBMIT</button>
      </div>
    );
  } 
}

export default QuestionComponent;




