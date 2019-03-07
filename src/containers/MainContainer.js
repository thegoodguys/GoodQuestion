import React, { Component } from 'react';
import '../styles.css';
import QuestionComponent from '../components/QuestionComponent';


class MainContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          username: '',
          company_name: '',
          role_name: '',
          round: '',
          type: '',
          title: '',
          content: '',
          location_name: '',
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
      fetch('http://localhost:3002/postQuestion', {
        method: 'POST',
        mode: 'cors',
        headers:  {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(this.state)
      })
        .then(res => res.json())
        .then(res => console.log("Success!"))
        .then(res => (
          this.setState((state) => ({
            username: '',
            company_name: '',
            role_name: '',
            round: '',
            type: '',
            title: '',
            content: '',
            location_name: '',
            tips: ''
      }))))
        .catch(err => console.log("***Error: ", err))
    }
  
    render() {
    return (
      <>
        <QuestionComponent
          handleChange={this.handleChange}
          postQuestion={this.postQuestion}        
        />
      </>
    );
  } 
}

export default MainContainer;