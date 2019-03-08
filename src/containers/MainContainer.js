import React, { Component } from 'react';
import '../styles.css';
import { Link } from 'react-router-dom';


class MainContainer extends Component {
  
    render() { 

      let array = [];
      let questions = this.props.questions
      if (questions.length > 0){
        for(let i = 0; i < questions.length; i += 1){
          array.push(
            <div key={i} id={i} className="questionDiv">
              <p id="questionTitle">{this.props.questions[i].title}</p>
              <div className="questionTagDiv">
                <p id="questionTag">{this.props.questions[i].company_name}</p>
                <p id="questionTag">{this.props.questions[i].role_name}</p>
                <p id="questionTag">{this.props.questions[i].type}</p>
              </div>
            </div>
          )
          console.log("***Questions: ", questions)
        }
      }

    

    return (
      <div>
        <div className="titleAndButton">
          {<h1>INTERVIEW QUESTIONS</h1>}
          <Link to="/question">
          <button id="postButton">POST QUESTION</button>
          </Link>
        </div>
        <div>
          {array}
        </div>
      </div>
    );
  } 
}

export default MainContainer;