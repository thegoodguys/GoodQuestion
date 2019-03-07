import React, { Component } from 'react';
import '../styles.css';
import QuestionComponent from '../components/QuestionComponent'

class MainContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          title: '',
          role: '',
          company: '',
          location: '',
          type: '',
          round: '',
          content: '',
          tips: ''
        }

    this.handleChange = this.handleChange.bind(this); 
    this.postQuestion = this.postQuestion.bind(this);

    }

    handleChange(e){
      e.preventDefault();
      this.setState({
          [e.target.id]: e.target.value,
      })
    }

    postQuestion(){
      fetch('http://localhost:3001/postToQuestions')
        .then(res => res)
        .then(res => (
          this.setState((state) => ({
            title: '',
            role: '',
            company: '',
            location: '',
            type: '',
            round: '',
            content: '',
            tips: ''
      }))))
        .catch(err => console.log("***Error: ", err))
    }
  
    render() {
    return (
      <div className="MainContainer">
        <QuestionComponent
          handleChange={this.handleChange}
          postQuestion={this.postQuestion}        
        />
      </div>
    );
  } 
}

export default MainContainer;