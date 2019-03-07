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
          round: '',
          content: '',
          tips: ''
        }

    this.handleChange = this.handleChange.bind(this); 

    }

    handleChange(e){
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    postQuestion(){
        console.log("Submitting")
    }
  
    render() {
    return (
      <div className="MainContainer">
        <QuestionComponent
          handleChange={this.props.handleChange}
          postQuestion={this.props.postQuestion}        
        />
      </div>
    );
  } 
}

export default MainContainer;